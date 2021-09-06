-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 06, 2021 at 06:32 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cadastro_herois`
--

-- --------------------------------------------------------

--
-- Table structure for table `herois`
--

CREATE TABLE `herois` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `poderes` text NOT NULL,
  `fraquezas` text NOT NULL,
  `raca` varchar(255) NOT NULL,
  `filiacao` text NOT NULL,
  `origem` varchar(255) NOT NULL,
  `personalidade` text NOT NULL,
  `ocupacao` text NOT NULL,
  `historia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `herois`
--

INSERT INTO `herois` (`id`, `nome`, `poderes`, `fraquezas`, `raca`, `filiacao`, `origem`, `personalidade`, `ocupacao`, `historia`) VALUES
(1, 'Nome 1', 'poderes 1', 'fraquezas 1', 'raca 1', 'filiacao 1', 'origem 1', 'personalidade 1', 'ocupacao 1', 'historia 1'),
(2, 'Nome 2', 'poderes 2', 'fraquezas 2', 'raca 2', 'filiacao 2', 'origem 2', 'personalidade 2', 'ocupacao 2', 'historia 2'),
(3, 'Nome 3', 'poderes 3', 'fraquezas 3', 'raca 3', 'filiacao 3', 'origem 3', 'personalidade 3', 'ocupacao 3', 'historia 3'),
(4, 'Nome 4', 'poderes 4', 'fraquezas 4', 'raca 4', 'filiacao 4', 'origem 4', 'personalidade 4', 'ocupacao 4', 'historia 4'),
(5, 'Nome 5', 'poderes 5', 'fraquezas 5', 'raca 5', 'filiacao 5', 'origem 5', 'personalidade 5', 'ocupacao 5', 'historia 5'),
(6, 'Nome 6', 'poderes 6', 'fraquezas 6', 'raca 6', 'filiacao 6', 'origem 6', 'personalidade 6', 'ocupacao 6', 'historia 6'),
(8, 'Nome 7', 'poderes 7', 'fraquezas 7', 'raca 7', 'filiacao 7', 'origem 7', 'personalidade 7', 'ocupacao 7', 'historia 7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `herois`
--
ALTER TABLE `herois`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `herois`
--
ALTER TABLE `herois`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
