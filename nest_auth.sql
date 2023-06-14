-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Чрв 14 2023 р., 14:57
-- Версія сервера: 10.4.17-MariaDB
-- Версія PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `nest_auth`
--

-- --------------------------------------------------------

--
-- Структура таблиці `contracts`
--

CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `originalName` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `size` int(11) NOT NULL,
  `dateUploaded` datetime NOT NULL,
  `pathToFile` varchar(255) NOT NULL,
  `progressStatus` int(11) NOT NULL,
  `paymentStatus` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `contracts`
--

INSERT INTO `contracts` (`id`, `userId`, `originalName`, `name`, `size`, `dateUploaded`, `pathToFile`, `progressStatus`, `paymentStatus`) VALUES
(34, 6, '2023-05-31T13-19-53-952Z-CV.pdf', '2023-05-31T13-19-53-952Z-CV.pdf', 96691, '2023-05-31 16:19:53', './uploads/contracts', 1, 0),
(35, 6, '2023-06-05T13-02-07-562Z-CV Tkachenko Anton.pdf', '2023-06-05T13-02-07-562Z-CV Tkachenko Anton.pdf', 1385149, '2023-06-05 16:02:07', './uploads/contracts', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблиці `contracts_in_progress`
--

CREATE TABLE `contracts_in_progress` (
  `id` int(11) NOT NULL,
  `contractId` int(11) NOT NULL,
  `originalName` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `size` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `lawerId` int(11) NOT NULL,
  `pathToFile` varchar(255) NOT NULL,
  `datetimeStart` datetime NOT NULL,
  `datetimeFinish` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `contracts_in_progress`
--

INSERT INTO `contracts_in_progress` (`id`, `contractId`, `originalName`, `name`, `size`, `userId`, `lawerId`, `pathToFile`, `datetimeStart`, `datetimeFinish`) VALUES
(3, 34, '2023-05-31T13-19-53-952Z-CV.pdf', '2023-05-31T13-19-53-952Z-CV.pdf', 96691, 6, 7, './uploads/contracts', '0000-00-00 00:00:00', NULL),
(4, 35, '2023-06-05T13-02-07-562Z-CV Tkachenko Anton.pdf', '2023-06-05T13-02-07-562Z-CV Tkachenko Anton.pdf', 1385149, 6, 7, './uploads/contracts', '0000-00-00 00:00:00', NULL),
(5, 34, '2023-05-31T13-19-53-952Z-CV.pdf', '2023-05-31T13-19-53-952Z-CV.pdf', 96691, 6, 7, './uploads/contracts', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Структура таблиці `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `contractId` int(11) NOT NULL,
  `originalName` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `size` bigint(20) NOT NULL,
  `pathToFile` varchar(255) NOT NULL,
  `dateUploaded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `permissions` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `roles`
--

INSERT INTO `roles` (`id`, `name`, `permissions`) VALUES
(1, 'admin', ''),
(2, 'lawyer', ''),
(3, 'customer', '');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(5, '', 'demo@rte.com', '$2b$12$Uy3oiS2iqbwxSxTRAwdm.u1YDU0UJhV6uwn7/rCbVIdRmTsCRXzaS'),
(6, '', 'kekr@123.com', '$2b$12$8JX0ie3eeqSoB46bZMhx0uuH4Q2q.CIeY8IltijuJ0ZN7FBql3wu.'),
(7, '', 'retrik@yaya.com', '$2b$12$r39Kp45cie6MQsOHc1PwIOtSm2R8Of0GCDGR4Qr2DSL396q6B26d6');

-- --------------------------------------------------------

--
-- Структура таблиці `users_roles`
--

CREATE TABLE `users_roles` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users_roles`
--

INSERT INTO `users_roles` (`id`, `userId`, `roleId`) VALUES
(5, 5, 2),
(6, 6, 3),
(7, 7, 2);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `contracts_in_progress`
--
ALTER TABLE `contracts_in_progress`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Індекси таблиці `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_776b7cf9330802e5ef5a8fb18dc` (`userId`),
  ADD KEY `FK_4fb14631257670efa14b15a3d86` (`roleId`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT для таблиці `contracts_in_progress`
--
ALTER TABLE `contracts_in_progress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблиці `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблиці `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `FK_4fb14631257670efa14b15a3d86` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_776b7cf9330802e5ef5a8fb18dc` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
