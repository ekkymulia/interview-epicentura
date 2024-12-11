'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Meeting() {
  const [unit, setUnit] = useState("");
  const router = useRouter()
  const [ruangMeeting, setRuangMeeting] = useState("");
  const [kapasitas, setKapasitas] = useState("10");
  const [tanggalRapat, setTanggalRapat] = useState("");
  const [waktuMulai, setWaktuMulai] = useState("");
  const [waktuSelesai, setWaktuSelesai] = useState("");
  const [jumlahPeserta, setJumlahPeserta] = useState("");
  const [jenisSnackSiang, setJenisSnackSiang] = useState(false);
  const [jenisMakanSiang, setJenisMakanSiang] = useState(false);
  const [jenisSnackSore, setJenisSnackSore] = useState(false);
  const [nominalKonsumsi, setNominalKonsumsi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      unit,
      ruang_meeting: ruangMeeting,
      kapasitas,
      tanggal_rapat: tanggalRapat,
      waktu_mulai: waktuMulai,
      waktu_selesai: waktuSelesai,
      jumlah_peserta: jumlahPeserta,
      jenis_snack_siang: jenisSnackSiang,
      jenis_makan_siang: jenisMakanSiang,
      jenis_snack_sore: jenisSnackSore,
      nominal_konsumsi: nominalKonsumsi,
    };

    try {
      const response = await fetch("/api/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success response
        router.push("/")
      } else {
        // const errorData = await response.json();
        // Handle error response
        // console.log(errorData)
        alert('Gagal membuat meeting')
      }
    } catch (error) {
      // Handle catch block errors
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-[#296377] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-full h-10" />
          <span className="text-lg font-semibold">iMeeting</span>
        </div>
        <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/50/FFFFFF/bell.png" alt="bell" />
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3A4IbquATq_HtuvJ0LHXshpv-z8HVzeMWZfBZMqp-m5_VEC5i" alt="User" className="w-8 h-8 rounded-full" />
              <span className="text-sm text-white font-semibold">John Doe</span>
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-4 p-4 relative">
        {/* Sidebar */}
        <aside className="absolute left-0 bottom-0 top-[4rem] bg-white w-28 h-screen p-4 flex flex-col justify-start items-center">
          <button className="bg-cyan-600 hover:bg-cyan-700 w-16 h-14 flex items-center justify-center rounded-lg shadow-lg mt-4">
            <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/home.png" alt="home"/>
          </button>
          <button className="bg-none hover:outline hover:outline-2 hover:outline-cyan-600 w-16 h-14 flex items-center justify-center rounded-lg mt-4">
            <img width="32" height="32" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v1"/>
          </button>
        </aside>

        <section className="col-start-2 col-span-11 mt-14">
          <div className="flex items-center mb-6">
            <button className="bg-cyan-600 hover:bg-cyan-700 w-16 h-14 flex items-center justify-center rounded-lg">
              <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/FFFFFF/back.png" alt="back"/>
            </button>
            <div className="ml-4 mt-5">
              <h2 className="text-3xl font-semibold mb-1">Ruang Meeting</h2>
              <h4 className="text-slate-400 inline">Ruang Meeting</h4>
              <span className="px-3 inline"> &gt; </span>
              <h4 className="text-slate-400 inline">Pesan Ruangan</h4>
            </div>
          </div>

          {/* Meeting Form */}
          <div className="bg-white shadow-xl rounded-xl p-12 mt-6">
            <h4 className="text-xl font-bold mb-6">Informasi Ruang Meeting</h4>

            {/* Form Fields */}
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col w-1/3 ">
                <span className="text-xl font-semibold mb-2">Unit</span>
                <select 
                  onChange={(e) => setUnit(e.target.value)} 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Pilihan Unit</option>
                  <option value="1">Unit 1</option>
                  <option value="2">Unit 2</option>
                </select>
              </div>

              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Ruang Meeting</span>
                <select 
                  onChange={(e) => setRuangMeeting(e.target.value)} 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Pilihan Ruang Meeting</option>
                  <option value="1">Unit 2</option>
                  <option value="2">Unit 3</option>
                </select>
              </div>
            </div>

            {/* Capacity and Date */}
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Kapasitas</span>
                <input 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  name="kapasitas" 
                  value={kapasitas} 
                  disabled 
                />
              </div>
            </div>
            <hr className="my-4"/>
            <h4 className="text-xl font-bold mb-6">Informasi Rapat</h4>
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Tanggal Rapat</span>
                <input 
                  type="date" 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={tanggalRapat} 
                  onChange={(e) => setTanggalRapat(e.target.value)} 
                />
              </div>
              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Waktu Mulai</span>
                <input 
                  type="time" 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={waktuMulai} 
                  onChange={(e) => setWaktuMulai(e.target.value)} 
                />
              </div>
              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Waktu Selesai</span>
                <input 
                  type="time" 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={waktuSelesai} 
                  onChange={(e) => setWaktuSelesai(e.target.value)} 
                />
              </div>
            </div>

            {/* Meeting Details */}
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col w-1/3">
                <span className="text-xl font-semibold mb-2">Jumlah Peserta</span>
                <input 
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={jumlahPeserta} 
                  onChange={(e) => setJumlahPeserta(e.target.value)} 
                  type="text" 
                />
              </div>
            </div>

            {/* Consumption Type */}
            <div className="flex flex-col mb-6">
              <span className="text-xl font-semibold mb-2">Jenis Konsumsi</span>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={jenisSnackSiang}
                    onChange={(e) => setJenisSnackSiang(e.target.checked)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Snack Siang</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={jenisMakanSiang}
                    onChange={(e) => setJenisMakanSiang(e.target.checked)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Makan Siang</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={jenisSnackSore}
                    onChange={(e) => setJenisSnackSore(e.target.checked)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Snack Sore</span>
                </label>
              </div>
            </div>

            {/* Nominal Consumption */}
            <div className="flex flex-col mb-6">
              <span className="text-xl font-semibold mb-2">Nominal Konsumsi</span>
              <div className="flex items-center mt-4">
                <div className="bg-slate-400 text-white py-2 px-4 rounded-lg">
                  Rp
                </div>

                <input
                  className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full max-w-xs"
                  value={nominalKonsumsi}
                  onChange={(e) => setNominalKonsumsi(e.target.value)}
                  type="text"
                  placeholder="Masukkan nominal"
                />
              </div>
            </div>
            <hr className="my-6"/>
            <div className="flex justify-end space-x-4">
              <button className="mt-6 bg-transparent text-red-500 hover:bg-transparent hover:outline hover:outline-2 hover:outline-red-500 py-2 px-4 rounded-lg">
                Batal
              </button>
              <button onClick={handleSubmit} className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}