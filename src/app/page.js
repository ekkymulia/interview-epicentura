'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [meeting, setMeeting] = useState([]);

  return (
    <div className="min-h-screen bg-slate-200">
      <header className="flex justify-between bg-blue-500 p-4 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <span className="font-bold text-blue-500">Logo</span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="grid grid-cols-5 gap-4 p-4">
        <aside className="col-span-1 bg-blue-500 p-4 rounded-lg text-white">
          <button className="btn btn-success w-full py-2 text-lg font-semibold">
            Home
          </button>
        </aside>

        <section className="col-span-4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Ruang Meeting</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Unit</th>
                <th className="border border-gray-300 p-2">Ruang Meeting</th>
                <th className="border border-gray-300 p-2">Kapasitas</th>
                <th className="border border-gray-300 p-2">Tanggal Rapat</th>
                <th className="border border-gray-300 p-2">Waktu</th>
                <th className="border border-gray-300 p-2">Jumlah Peserta</th>
                <th className="border border-gray-300 p-2">Jenis Konsumsi</th>
              </tr>
            </thead>
            <tbody>

              {
                meeting.map((item) => (
                  
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">{item.unit}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.ruang_meeting}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.kapasitas}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.tanggal_rapat}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.waktu_mulai} - {item.waktu_selesai}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.jumlah_peserta}</td>
                    <td className="border border-gray-300 p-2 text-center">{item.jenis_snack_siang ? 'Snack Siang' : item.jenis_makan_siang ? 'Makan Siang' : item.jenis_snack_sore ? 'Snack Sore' : 'Tidak ada' }</td>
                  </tr>
                  ))
              }
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}