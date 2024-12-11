-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 11 Des 2024 pada 13.33
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Bill`
--

CREATE TABLE `Bill` (
  `id` int(11) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `ruang_meeting` varchar(255) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `tanggal_rapat` datetime NOT NULL,
  `waktu_mulai` datetime NOT NULL,
  `waktu_selesai` datetime NOT NULL,
  `jumlah_peserta` int(11) NOT NULL,
  `jenis_snack_siang` varchar(255) NOT NULL,
  `jenis_makan_siang` varchar(255) NOT NULL,
  `jenis_snack_sore` varchar(255) NOT NULL,
  `nominal_konsumsi` float NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `Bill`
--

INSERT INTO `Bill` (`id`, `unit`, `ruang_meeting`, `kapasitas`, `tanggal_rapat`, `waktu_mulai`, `waktu_selesai`, `jumlah_peserta`, `jenis_snack_siang`, `jenis_makan_siang`, `jenis_snack_sore`, `nominal_konsumsi`, `createdAt`, `updatedAt`) VALUES
(1, '1', '1', 10, '2024-12-18 00:00:00', '2024-12-18 10:01:00', '2024-12-18 13:59:00', 12, 'False', 'False', 'False', 122222, '2024-12-11 11:01:29', '2024-12-11 18:02:19'),
(2, '1', '1', 10, '2024-12-27 00:00:00', '2024-12-27 16:12:00', '2024-12-27 12:15:00', 12, 'True', 'True', 'False', 122222, '2024-12-11 12:13:09', '2024-12-11 12:13:09'),
(3, '2', '2', 10, '2024-12-25 00:00:00', '2024-12-25 16:27:00', '2024-12-24 17:27:00', 12, 'True', 'True', 'False', 1000000, '2024-12-11 12:27:44', '2024-12-11 12:27:44'),
(4, '1', '2', 10, '2024-12-25 00:00:00', '2024-12-24 17:28:00', '2024-12-25 14:28:00', 12, 'True', 'True', 'False', 1221220, '2024-12-11 12:29:05', '2024-12-11 12:29:05'),
(5, '1', '2', 10, '2024-12-12 00:00:00', '2024-12-12 12:34:00', '2024-12-12 12:32:00', 12, 'False', 'False', 'True', 122121, '2024-12-11 12:30:51', '2024-12-11 12:30:51');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Bill`
--
ALTER TABLE `Bill`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Bill`
--
ALTER TABLE `Bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
