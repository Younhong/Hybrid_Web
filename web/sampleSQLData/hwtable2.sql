-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 19-11-30 01:51
-- 서버 버전: 10.3.16-MariaDB
-- PHP 버전: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `hwdata`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `hwtable2`
--

CREATE TABLE `hwtable2` (
  `city` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `hwtable2`
--

INSERT INTO `hwtable2` (`city`, `country`) VALUES
('', ''),
('Beijjing', 'China'),
('Busan', 'Korea'),
('d', 'd'),
('ei', 'ek'),
('Incheon', 'Korea'),
('London', 'UK'),
('New York', 'USA'),
('Seoul', 'Korea'),
('Tokyo', 'Japan');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `hwtable2`
--
ALTER TABLE `hwtable2`
  ADD PRIMARY KEY (`city`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
