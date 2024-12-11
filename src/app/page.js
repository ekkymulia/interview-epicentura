'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [meeting, setMeeting] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter()

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch('/api/meeting');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMeeting(data);
      } catch (err) {
        console.error('Error fetching meetings:', err);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const handleClick = () => {
    router.push('/meeting');
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
          <button className="bg-cyan-600 hover:bg-cyan-700 w-16 mt=10 h-14 flex items-center justify-center rounded-lg shadow-lg" style={{ marginTop: "1rem" }}>
            <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/home.png" alt="home"/>
          </button>

          <button className="bg-none hover:outline hover:outline-2 hover:outline-cyan-600 w-16 mt=10 h-14 flex items-center justify-center rounded-lg" style={{ marginTop: "1rem" }}>
            <img width="32" height="32" src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" alt="person-male--v1"/>
          </button>
        </aside>

        {/* Main Section */}
        <section className="col-start-2 col-span-11 mt-12">
          <div className="flex items-center mb-6">
            <button className="bg-cyan-600 hover:bg-cyan-700 w-16 h-14 flex items-center justify-center rounded-lg shadow-lg" style={{ marginTop: "1rem" }}>
              <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/FFFFFF/back.png" alt="back"/>
            </button>
            <div className="ml-4 mt-10">
              <h2 className="text-3xl font-semibold mb-1">Ruang Meeting</h2>
              <h4 className="text-slate-400 inline">Ruang Meeting</h4>
            </div>
            <div className="ml-auto flex items-center">
              <button 
                className="bg-cyan-600 hover:bg-cyan-700 w-auto flex items-center justify-center px-4 py-3 rounded-lg shadow-lg"
                onClick={handleClick}
              >
                <img width="24" height="24" src="https://img.icons8.com/android/50/FFFFFF/plus.png" alt="plus" className="mr-2" />
                <span className="text-white">Pesan Ruangan</span>
              </button>
            </div>
          </div>
          <div className="bg-white pt-8 p-6 rounded-lg shadow-lg mt-6"> {/* Added mt-6 for spacing between button and table */}
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
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
                  {meeting.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2 text-center">{item.unit}</td>
                      <td className="border border-gray-300 p-2 text-center">{item.ruang_meeting}</td>
                      <td className="border border-gray-300 p-2 text-center">{item.kapasitas}</td>
                      <td className="border border-gray-300 p-2 text-center">{new Date(item.tanggal_rapat).toLocaleDateString()}</td>
                      <td className="border border-gray-300 p-2 text-center">
                        {new Date(item.waktu_mulai).toLocaleTimeString()} - {new Date(item.waktu_selesai).toLocaleTimeString()}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">{item.jumlah_peserta}</td>
                      <td className="border border-gray-300 p-2 text-center">
                        {(() => {
                          let result = [];
                          if (item.jenis_snack_siang == "True") {
                            result.push('Snack Siang');
                          }
                          if (item.jenis_makan_siang == "True") {
                            result.push('Makan Siang');
                          }
                          if (item.jenis_snack_sore == "True") {
                            result.push('Snack Sore');
                          }
                          if (result.length === 0) {
                            result.push('Tidak ada');
                          }
                          return result.join(', ');
                        })()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}