-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2022 at 04:52 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `service_dataruko`
--

-- --------------------------------------------------------

--
-- Table structure for table `dataruko`
--

CREATE TABLE `dataruko` (
  `id_ruko` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `nama_ruko` varchar(30) NOT NULL,
  `harga` int(11) NOT NULL,
  `lokasi` varchar(100) NOT NULL,
  `deskripsi` varchar(300) NOT NULL,
  `pemilik` varchar(30) NOT NULL,
  `nohp` varchar(15) NOT NULL,
  `spesifikasi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dataruko`
--

INSERT INTO `dataruko` (`id_ruko`, `status`, `nama_ruko`, `harga`, `lokasi`, `deskripsi`, `pemilik`, `nohp`, `spesifikasi`) VALUES
(1, 1, 'Jaya Kusuma', 1000000, 'Jl Saturnus Utr 8, Jawa Barat, Bandung, 40286', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai str', 'tatang', '081235678121', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(2, 1, 'Mengabdi', 20000000, 'Jl Saturnus Utr 8, Jawa Barat, Bandung, 40286', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Ujang', '081726153212', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(3, 1, 'Penglaris', 15000000, 'Jl Pramuka I Bl H/1 40121, Bandung, 40121', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'mbah Dukun', '087623412312', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(4, 0, 'Pasti Rame', 30000000, 'Jl Kiaracondong 308 40286, Bandung, 40286', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Faris Alfarizi', '083241312372', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(5, 1, 'Kujang', 9000000, 'Jl Wastukencana 51, Jawa Barat, Bandung, 40117', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Faris', '081212312123', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(6, 1, 'Mentari ', 11000000, 'Jl Jend Gatot Subroto 303, Jawa Barat, Bandung, 40274', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Suardi', '081235678121', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(7, 1, 'Suka Baju', 25000000, 'Jl Jend Sudirman 280, Bandung,', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Karta', '081212312123', 'Luas Tanah : 80m, Luas Bangunan : 240m'),
(8, 1, 'Hidayat', 150000000, 'cipadung', 'Disewakan Gedung 3 lantai murah cocok untuk kantor di Gatot subroto Kota Bandung , Ruko 3 lantai strategis tengah Kota cocok untuk kantor di, sangat cocok untuk kantor atau tempat Usaha ,lokasi yang strategis di main road, bisa sewa 1 lantai Saja', 'Dikri Hidayat', '083475634756', 'Luas Tanah : 80m, Luas Bangunan : 240m');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dataruko`
--
ALTER TABLE `dataruko`
  ADD PRIMARY KEY (`id_ruko`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dataruko`
--
ALTER TABLE `dataruko`
  MODIFY `id_ruko` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
