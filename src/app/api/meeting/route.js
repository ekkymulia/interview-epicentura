import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function createResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: corsHeaders,
    });
}

// POST handler
export async function POST(request) {
    try {
        const data = await request.json();

        // Destructure and validate incoming data
        const {
            unit,
            ruang_meeting,
            kapasitas,
            tanggal_rapat,
            waktu_mulai,
            waktu_selesai,
            jumlah_peserta,
            jenis_snack_siang,
            jenis_makan_siang,
            jenis_snack_sore,
            nominal_konsumsi,
        } = data;

        // Validate required fields
        if (!unit || !ruang_meeting || !kapasitas || !tanggal_rapat || !waktu_mulai || !waktu_selesai || !jumlah_peserta || !nominal_konsumsi) {
            return createResponse({ error: 'Missing required fields' }, 400);
        }

        // Validate numeric fields
        if (isNaN(kapasitas) || isNaN(jumlah_peserta) || isNaN(nominal_konsumsi)) {
            return createResponse({ error: 'kapasitas, jumlah_peserta, and nominal_konsumsi must be numbers' }, 400);
        }

        // Validate date and time formats
        const waktuMulaiDatetime = new Date(`${tanggal_rapat}T${waktu_mulai}:00`);
        const waktuSelesaiDatetime = new Date(`${tanggal_rapat}T${waktu_selesai}:00`);

        if (isNaN(waktuMulaiDatetime) || isNaN(waktuSelesaiDatetime)) {
            return createResponse({ error: 'Invalid waktu_mulai or waktu_selesai format.' }, 400);
        }

        // Ensure waktu_selesai is after waktu_mulai
        if (waktuSelesaiDatetime <= waktuMulaiDatetime) {
            return createResponse({ error: 'waktu_selesai must be after waktu_mulai' }, 400);
        }

        // Create the bill in the database
        const bill = await prisma.bill.create({
            data: {
                unit,
                ruang_meeting,
                kapasitas: parseInt(kapasitas, 10),
                tanggal_rapat: new Date(tanggal_rapat),
                waktu_mulai: waktuMulaiDatetime,
                waktu_selesai: waktuSelesaiDatetime,
                jumlah_peserta: parseInt(jumlah_peserta, 10),
                jenis_snack_siang: jenis_snack_siang ? 'True' : 'False',
                jenis_makan_siang: jenis_makan_siang ? 'True' : 'False',
                jenis_snack_sore: jenis_snack_sore ? 'True' : 'False',
                nominal_konsumsi: parseFloat(nominal_konsumsi),
            },
        });

        // Return success message
        return createResponse({ message: 'Bill created successfully', bill }, 201);

    } catch (error) {
        console.error('Error creating bill:', error);
        return createResponse({ error: 'Internal Server Error' }, 500);
    } finally {
        await prisma.$disconnect();
    }
}

// GET handler
export async function GET(request) {
    try {
        // Fetch all records
        const bills = await prisma.bill.findMany();

        // If no records found, return a 404 response
        if (!bills || bills.length === 0) {
            return createResponse(
                { error: 'No records found' },
                404
            );
        }

        return createResponse(bills);
    } catch (error) {
        console.error('Error fetching bills:', error);
        return createResponse(
            { error: 'Internal Server Error' },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
}