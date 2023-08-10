-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Сер 10 2023 р., 15:11
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
-- Структура таблиці `activation_token`
--

CREATE TABLE `activation_token` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(2, 73, 'test2.docx', '2023-08-10T07-54-38-180Z-test2.docx', 18558, '2023-08-10 10:54:38', './uploads/contracts', 0, 0);

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
  `lawyerId` int(11) NOT NULL,
  `pathToFile` varchar(255) NOT NULL,
  `datetimeStart` datetime NOT NULL,
  `datetimeFinish` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `activated` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `username`, `email`, `password`, `activated`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', 'admin@gmail.com', '$2b$12$LQZUcwrqMdF1atLikJR5HOUfMzlcE38UdiNLwhxgS1j4xwXrK2MdS', 1),
(72, 'plautwork@gmail.com', 'plautwork@gmail.com', 'plautwork@gmail.com', 'plautwork@gmail.com', '$2b$12$0jHvw7UK57xmq6Wi64RF7eSye.DH7FTr6dA7vM58oJ8Zk1uOWmQwC', 1),
(73, 'antfloppy@gmail.com', 'antfloppy@gmail.com', 'antfloppy@gmail.com', 'antfloppy@gmail.com', '$2b$12$fzPvnsMgoSNEnfVij69NrOaARsP.pIWJiIiXBTbFMqBb0N3UeOSvi', 1);

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
(1, 1, 1),
(70, 72, 2),
(71, 73, 3);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `activation_token`
--
ALTER TABLE `activation_token`
  ADD PRIMARY KEY (`id`);

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
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
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
-- AUTO_INCREMENT для таблиці `activation_token`
--
ALTER TABLE `activation_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблиці `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT для таблиці `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

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
