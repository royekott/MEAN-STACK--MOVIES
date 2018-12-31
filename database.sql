-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 17, 2018 at 08:19 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE IF NOT EXISTS `playlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'Surfing', 'assets/artwork/images/surfUp.jpg', '[{\"name\":\"Coldplay - Clocks\",\"url\":\"assets\\/artwork\\/music\\/Coldplay - Clocks.mp3\"},{\"name\":\"Kavinsky - Nightcall\",\"url\":\"assets\\/artwork\\/music\\/Kavinsky - Nightcall.mp3\"},{\"name\":\"Radiohead - No Surprises\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - No Surprises.mp3\"},{\"name\":\"Zombie Hyperdrive - Red Eyes\",\"url\":\"assets\\/artwork\\/music\\/Zombie Hyperdrive - Red Eyes.mp3\"}]'),
(2, 'Evening  Songs', 'assets/artwork/images/sunset.jpg', '[{\"name\":\"Coldplay - In My Place\",\"url\":\"assets\\/artwork\\/music\\/Coldplay - In My Place.mp3\"},{\"name\":\"Radiohead - Fake Plastic Trees\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - Fake Plastic Trees.mp3\"},{\"name\":\"Radiohead - No Surprises\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - No Surprises.mp3\"},{\"name\":\"I try - Macy Gray\",\"url\":\"assets\\/artwork\\/music\\/I try - Macy Gray.mp3\"}]'),
(3, 'So it Goes', 'assets/artwork/images/soItGoes.jpg', '[{\"name\":\"blink - 182 - All The Small Things\",\"url\":\"assets\\/artwork\\/music\\/blink - 182 - All The Small Things.mp3\"},{\"name\":\"Kavinsky - Nightcall\",\"url\":\"assets\\/artwork\\/music\\/Kavinsky - Nightcall.mp3\"},{\"name\":\"Nirvana - Smells Like Teen Spirit\",\"url\":\"assets\\/artwork\\/music\\/Nirvana - Smells Like Teen Spirit.mp3\"},{\"name\":\"Zombie Hyperdrive - Red Eyes\",\"url\":\"assets\\/artwork\\/music\\/Zombie Hyperdrive - Red Eyes.mp3\"}]'),
(4, 'Clean with joy', 'assets/artwork/images/pink.jpg', '[{\"name\":\"Nirvana - Smells Like Teen Spirit\",\"url\":\"assets\\/artwork\\/music\\/Nirvana - Smells Like Teen Spirit.mp3\"},{\"name\":\"The Offspring - Why Dont You Get A Job\",\"url\":\"assets\\/artwork\\/music\\/The Offspring - Why Dont You Get A Job.mp3\"},{\"name\":\"Kavinsky - Nightcall\",\"url\":\"assets\\/artwork\\/music\\/Kavinsky - Nightcall.mp3\"},{\"name\":\"blink - 182 - All The Small Things\",\"url\":\"assets\\/artwork\\/music\\/blink - 182 - All The Small Things.mp3\"}]'),
(5, 'Pump it up', 'assets/artwork/images/pump.jpg', '[{\"name\":\"Kendrick Lamar - Bitch Dont Kill My Vibe\",\"url\":\"assets\\/artwork\\/music\\/Kendrick Lamar - Bitch Dont Kill My Vibe.mp3\"},{\"name\":\"Childish Gambino - Redbone\",\"url\":\"assets\\/artwork\\/music\\/Childish Gambino - Redbone.mp3\"},{\"name\":\"Childish Gambino - This Is America\",\"url\":\"assets\\/artwork\\/music\\/Childish Gambino - This Is America.mp3\"},{\"name\":\"Drake - Gods Plan\",\"url\":\"assets\\/artwork\\/music\\/Drake - Gods Plan.mp3\"}]'),
(6, 'Shooting ', 'assets/artwork/images/guns.jpg', '[{\"name\":\"Childish Gambino - Redbone\",\"url\":\"assets\\/artwork\\/music\\/Childish Gambino - Redbone.mp3\"},{\"name\":\"Radiohead - No Surprises\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - No Surprises.mp3\"},{\"name\":\"Zombie Hyperdrive - Red Eyes\",\"url\":\"assets\\/artwork\\/music\\/Zombie Hyperdrive - Red Eyes.mp3\"},{\"name\":\"Kendrick Lamar - Bitch Dont Kill My Vibe\",\"url\":\"assets\\/artwork\\/music\\/Kendrick Lamar - Bitch Dont Kill My Vibe.mp3\"}]'),
(7, 'Coldplay', 'assets/artwork/images/coldplay.jpg', '[{\"name\":\"Coldplay - Clocks\",\"url\":\"assets\\/artwork\\/music\\/Coldplay - Clocks.mp3\"},{\"name\":\"Coldplay - In My Place\",\"url\":\"assets\\/artwork\\/music\\/Coldplay - In My Place.mp3\"},{\"name\":\"Radiohead - Fake Plastic Trees\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - Fake Plastic Trees.mp3\"},{\"name\":\"Radiohead - No Surprises\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - No Surprises.mp3\"}]'),
(8, 'Work Out', 'assets/artwork/images/black.jpg', '[{\"name\":\"Childish Gambino - Redbone\",\"url\":\"assets\\/artwork\\/music\\/Childish Gambino - Redbone.mp3\"},{\"name\":\"blink - 182 - All The Small Things\",\"url\":\"assets\\/artwork\\/music\\/blink - 182 - All The Small Things.mp3\"},{\"name\":\"Childish Gambino - This Is America\",\"url\":\"assets\\/artwork\\/music\\/Childish Gambino - This Is America.mp3\"},{\"name\":\"Drake - Gods Plan\",\"url\":\"assets\\/artwork\\/music\\/Drake - Gods Plan.mp3\"},{\"name\":\"I try - Macy Gray\",\"url\":\"assets\\/artwork\\/music\\/I try - Macy Gray.mp3\"},{\"name\":\"Kendrick Lamar - Bitch Dont Kill My Vibe\",\"url\":\"assets\\/artwork\\/music\\/Kendrick Lamar - Bitch Dont Kill My Vibe.mp3\"},{\"name\":\"Nirvana - Smells Like Teen Spirit\",\"url\":\"assets\\/artwork\\/music\\/Nirvana - Smells Like Teen Spirit.mp3\"},{\"name\":\"Radiohead - Fake Plastic Trees\",\"url\":\"assets\\/artwork\\/music\\/Radiohead - Fake Plastic Trees.mp3\"}]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
