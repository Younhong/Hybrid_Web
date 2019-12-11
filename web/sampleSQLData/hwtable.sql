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
-- 테이블 구조 `hwtable`
--

CREATE TABLE `hwtable` (
  `email` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `age` int(3) NOT NULL,
  `city` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `hwtable`
--

INSERT INTO `hwtable` (`email`, `name`, `age`, `city`, `type`) VALUES
('33@ja.edu', 'ddd', 33, 'Tokyo', 'Polar Bear'),
('3@le.dl', 'd', 3, 'd', 'd'),
('3k33k@handong.edu', 'Ldlel', 33, 'London', 'Whale'),
('dkek@handong.edu', 'dekekedke', 33, 'New York', 'Penguin'),
('kdk@handong.edu', 'dkekek', 66, 'London', 'Dolphin'),
('sjgkfkadk@hanmail.ne', 'Lee', 15, 'Seoul', 'Shark'),
('w@ha.ed', 'ddfew', 33, 'Beijjing', 'Panda');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `hwtable`
--
ALTER TABLE `hwtable`
  ADD PRIMARY KEY (`email`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
