'use client'
import Image from "next/image";
import { useState } from "react";

export default function Meeting() {
  const [unit, setUnit] = useState("");
  const [RuangMeeting, setRuangMeeting] = useState("");
  const [Kapasitas, setKapasitas] = useState("10");
  const [TanggalRapat, setTanggalRapat] = useState("");
  const [WaktuMulai, setWaktuMulai] = useState("");
  const [WaktuSelesai, setWaktuSelesai] = useState("");
  const [JumlahPeserta, setJumlahPeserta] = useState("");
  const [JenisSnackSiang, setJenisSnackSiang] = useState(false);
  const [JenisMakanSiang, setJenisMakanSiang] = useState(false);
  const [JenisSnackSore, setJenisSnackSore] = useState(false);
  const [NominalKonsumsi, setNominalKonsumsi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload
    const payload = {
      unit,
      RuangMeeting,
      Kapasitas,
      TanggalRapat,
      WaktuMulai,
      WaktuSelesai,
      JumlahPeserta,
      JenisKonsumsi: {
        SnackSiang: JenisSnackSiang,
        MakanSiang: JenisMakanSiang,
        SnackSore: JenisSnackSore,
      },
      NominalKonsumsi,
    };

    console.log(payload)

    try {
      const response = await fetch("/api/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Meeting successfully scheduled!");
      } else {
        const errorData = await response.json();
        setMessage(`Failed to schedule meeting: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="bg-slate-200 h-full w-full">
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

      <div className="grid grid-cols-5">
        <div className="bg-blue-500 col-span-1">
            <button className="btn btn-success p-3">Home</button>

        </div>
        <div className="bg-blue-500 col-span-3">
            
        <h2 className="text-2xl">Ruang Meeting</h2>

        <div className="bg-white shadow-xl p-4">
          <h4 className="text-xl">Informasi Ruang Meeting</h4>

          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Unit</span>
              <select onChange={(e) => setUnit(e.target.value)}>
                <option value={""}>Pilihan Unit</option>
                <option value={"1"}>Unit 1</option>
                <option value={"2"}>Unit 2</option>
              </select>
            </div>

            <div className="flex flex-col">
              <span className="text-xl">Ruang Meeting</span>
              <select onChange={(e) => setRuangMeeting(e.target.value)}>
                <option value={""}>Pilihan Ruang Meeting</option>
                <option value={"1"}>Unit 2</option>
                <option value={"2"}>Unit 3</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl">Kapasitas</span>
            <input className="form-control" name="kapasitas" value={Kapasitas}  disabled />
          </div>


          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Tanggal Rapat</span>
              <input className="form-control" name="kapasitas" value={TanggalRapat} onChange={(e) => setTanggalRapat(e.target.value)}  type="date" />
            </div>  

            <div className="flex flex-col">
              <span className="text-xl">Waktu Mulai</span>
              <input type="time" className="form-control"  value={WaktuMulai} onChange={(e) => setWaktuMulai(e.target.value)} name="kapasitas"  />
            </div>


            <div className="flex flex-col">
              <span className="text-xl">Waktu Selesai</span>
              <input type="time" className="form-control" value={WaktuSelesai} onChange={(e) => setWaktuSelesai(e.target.value)} name="kapasitas"  />
            </div>
          </div>


          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Jumlah Peserta</span>
              <input className="form-control" name="kapasitas" value={JumlahPeserta} onChange={(e) => setJumlahPeserta(e.target.value)} type="text" />
            </div>  
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Jenis Konsumsi</span>
              
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-700">Pilih Konsumsi:</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="snack-siang"
                    defaultChecked={ JenisSnackSiang ? true : false }
                    onChange={(e) => setJenisSnackSiang(e.target.checked)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="snack-siang" className="text-sm text-gray-700">
                    Snack Siang
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="makan-siang"
                    defaultChecked={ JenisMakanSiang ? true : false }
                    onChange={(e) => setJenisSnackSiang(e.target.checked)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="makan-siang" className="text-sm text-gray-700">
                    Makan Siang
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="snack-sore"
                    defaultChecked={ JenisSnackSore ? true : false }
                    onChange={(e) => setJenisSnackSiang(e.target.checked)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="snack-sore" className="text-sm text-gray-700">
                    Snack Sore
                  </label>
                </div>
              </div>
            </div>  
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Nominal Konsumsi</span>
              <input className="form-control" name="kapasitas" value={NominalKonsumsi} onChange={(e) => setNominalKonsumsi(e.target.value)} type="text" />
            </div>  
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">Submit</button>

        </div>

        
        </div>
      </div>
      
    </div>
  );
}

