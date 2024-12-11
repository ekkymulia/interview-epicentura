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
        const missingFields = [];
        [
            'unit',
            'ruang_meeting',
            'kapasitas',
            'tanggal_rapat',
            'waktu_mulai',
            'waktu_selesai',
            'jumlah_peserta',
            'jenis_snack_siang',
            'jenis_makan_siang',
            'jenis_snack_sore',
            'nominal_konsumsi',
        ].forEach((field) => {
            if (!data[field]) missingFields.push(field);
        });

        const bill = await prisma.bill.create({
            data: {
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
            },
        });

        return createResponse(
            { message: 'Bill created successfully', bill },
            201
        );
    } catch (error) {
        console.error(error);
        return createResponse(
            { error: 'Internal Server Error' },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
}

// GET handler
export async function GET(request) {
    try {
        const url = new URL(request.url);
        const billId = url.searchParams.get('id');

        if (!billId) {
            return createResponse({ error: 'Missing id parameter' }, 400);
        }

        const bill = await prisma.bill.findUnique({
            where: { id: parseInt(billId, 10) },
        });

        if (!bill) {
            return createResponse({ error: 'Record Not Found' }, 404);
        }

        return createResponse(bill);
    } catch (error) {
        console.error(error);
        return createResponse(
            { error: 'Internal Server Error' },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
}