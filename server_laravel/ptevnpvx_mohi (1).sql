-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 08, 2020 at 08:44 PM
-- Server version: 10.3.13-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ptevnpvx_mohi`
--

-- --------------------------------------------------------

--
-- Table structure for table `actions`
--

CREATE TABLE `actions` (
  `id` int(10) UNSIGNED NOT NULL,
  `actions_UserId` int(10) UNSIGNED NOT NULL,
  `actions_PostId` int(10) UNSIGNED NOT NULL,
  `actions_action` enum('like','haha','love','angry','sad','wow') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `actions`
--

INSERT INTO `actions` (`id`, `actions_UserId`, `actions_PostId`, `actions_action`, `created_at`, `updated_at`) VALUES
(53, 1, 45, 'haha', '2020-11-21 06:12:44', '2020-11-30 10:33:13'),
(54, 3, 45, 'love', '2020-11-21 06:14:31', '2020-11-21 06:15:34'),
(55, 1, 46, 'haha', '2020-11-21 07:37:48', '2020-11-30 06:51:00'),
(56, 1, 78, 'like', '2020-11-21 07:38:17', '2020-11-21 07:38:17'),
(57, 1, 88, 'angry', '2020-11-21 22:10:57', '2020-11-21 22:10:57'),
(58, 1, 93, 'like', '2020-11-23 11:56:16', '2020-11-23 11:56:16'),
(59, 1, 82, 'like', '2020-11-23 11:56:55', '2020-11-23 11:56:55'),
(60, 1, 94, 'like', '2020-11-23 11:57:08', '2020-11-23 11:57:08'),
(61, 1, 47, 'like', '2020-11-23 11:59:59', '2020-11-23 11:59:59'),
(62, 1, 77, 'haha', '2020-11-26 15:09:43', '2020-11-30 06:51:05'),
(63, 1, 81, 'like', '2020-11-26 15:10:02', '2020-11-26 15:10:02'),
(64, 1, 59, 'wow', '2020-11-27 06:35:23', '2020-11-30 06:50:54'),
(68, 1, 186, 'like', '2020-11-27 12:49:31', '2020-11-27 12:49:31'),
(69, 1, 185, 'like', '2020-11-27 12:50:04', '2020-11-27 12:50:04'),
(70, 13, 201, 'haha', '2020-11-28 05:33:28', '2020-11-28 05:40:23'),
(71, 1, 200, 'like', '2020-11-28 07:45:03', '2020-11-28 07:45:03'),
(72, 1, 97, 'like', '2020-11-28 07:45:20', '2020-11-28 07:45:20'),
(73, 1, 89, 'like', '2020-11-28 07:45:31', '2020-11-28 07:45:31'),
(74, 1, 80, 'like', '2020-11-28 07:45:35', '2020-11-28 07:45:35'),
(75, 1, 212, 'like', '2020-11-29 08:20:22', '2020-11-29 08:20:22'),
(76, 1, 201, 'angry', '2020-11-30 06:50:35', '2020-11-30 06:50:47'),
(77, 1, 79, 'wow', '2020-11-30 06:51:33', '2020-11-30 06:51:33'),
(78, 1, 245, 'like', '2020-11-30 12:09:18', '2020-11-30 12:09:18'),
(79, 1, 239, 'like', '2020-11-30 12:11:18', '2020-11-30 12:11:18'),
(80, 1, 238, 'like', '2020-11-30 12:11:22', '2020-11-30 12:11:22'),
(81, 1, 237, 'like', '2020-11-30 12:11:24', '2020-11-30 12:11:24'),
(82, 1, 236, 'like', '2020-11-30 12:11:31', '2020-11-30 12:11:31'),
(83, 13, 252, 'like', '2020-12-02 06:39:53', '2020-12-02 06:39:53'),
(84, 1, 208, 'like', '2020-12-03 07:31:28', '2020-12-03 07:31:28'),
(85, 1, 252, 'haha', '2020-12-04 18:18:28', '2020-12-05 12:30:49'),
(86, 56, 320, 'wow', '2020-12-06 02:34:41', '2020-12-06 02:34:41'),
(87, 56, 252, 'haha', '2020-12-06 04:38:24', '2020-12-06 04:38:24'),
(88, 1, 157, 'like', '2020-12-06 05:50:36', '2020-12-06 05:50:36'),
(89, 13, 320, 'sad', '2020-12-06 05:51:38', '2020-12-06 05:51:38'),
(90, 13, 323, 'haha', '2020-12-07 03:05:02', '2020-12-07 03:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `id` int(11) NOT NULL,
  `activity_UserId` int(11) UNSIGNED NOT NULL,
  `activity_Action` varchar(250) NOT NULL,
  `activity_PostFakeId` varchar(250) DEFAULT NULL,
  `activity_ReceiveUserId` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `activity_UserId`, `activity_Action`, `activity_PostFakeId`, `activity_ReceiveUserId`, `created_at`, `updated_at`) VALUES
(2, 1, 'haha', '16054500845653324', NULL, '2020-11-30 10:42:45', '2020-11-30 10:35:44'),
(7, 1, 'update_avatar', '16070799612579352', NULL, '2020-12-04 11:06:01', '2020-12-04 11:06:01'),
(17, 1, 'received_request_add_friend', NULL, 20, '2020-12-04 11:49:45', '2020-12-04 11:49:45'),
(20, 1, 'push_post', '16071009968323196', NULL, '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(24, 1, 'add_friend', NULL, 40, '2020-12-04 18:18:19', '2020-12-04 18:18:19'),
(25, 1, 'haha', '16068911826358378', NULL, '2020-12-05 12:30:49', '2020-12-05 12:30:49'),
(26, 1, 'add_friend', NULL, 18, '2020-12-04 18:20:32', '2020-12-04 18:20:32'),
(27, 1, 'update_cover', '16071669003701828', NULL, '2020-12-05 11:15:00', '2020-12-05 11:15:00'),
(28, 1, 'update_cover', '16071675273137596', NULL, '2020-12-05 11:25:27', '2020-12-05 11:25:27'),
(29, 1, 'update_cover', '16071675595470893', NULL, '2020-12-05 11:25:59', '2020-12-05 11:25:59'),
(30, 1, 'update_cover', '16071675988969971', NULL, '2020-12-05 11:26:38', '2020-12-05 11:26:38'),
(31, 1, 'update_cover', '16071679381055678', NULL, '2020-12-05 11:32:18', '2020-12-05 11:32:18'),
(32, 1, 'update_cover', '16071679567829020', NULL, '2020-12-05 11:32:36', '2020-12-05 11:32:36'),
(33, 1, 'update_cover', '16071680286512912', NULL, '2020-12-05 11:33:48', '2020-12-05 11:33:48'),
(34, 1, 'update_cover', '16071680793804757', NULL, '2020-12-05 11:34:39', '2020-12-05 11:34:39'),
(35, 1, 'update_cover', '16071681927107953', NULL, '2020-12-05 11:36:32', '2020-12-05 11:36:32'),
(36, 1, 'update_cover', '16071682092567456', NULL, '2020-12-05 11:36:49', '2020-12-05 11:36:49'),
(37, 1, 'update_cover', '16071683688939085', NULL, '2020-12-05 11:39:28', '2020-12-05 11:39:28'),
(38, 1, 'update_cover', '16071684866756877', NULL, '2020-12-05 11:41:26', '2020-12-05 11:41:26'),
(39, 1, 'update_cover', '16071684981455457', NULL, '2020-12-05 11:41:38', '2020-12-05 11:41:38'),
(40, 1, 'update_cover', '16071685287154764', NULL, '2020-12-05 11:42:08', '2020-12-05 11:42:08'),
(41, 1, 'update_cover', '16071685406698573', NULL, '2020-12-05 11:42:20', '2020-12-05 11:42:20'),
(42, 1, 'update_cover', '16071686757912071', NULL, '2020-12-05 11:44:35', '2020-12-05 11:44:35'),
(43, 1, 'update_cover', '16071686892728070', NULL, '2020-12-05 11:44:49', '2020-12-05 11:44:49'),
(44, 1, 'update_cover', '16071688253592191', NULL, '2020-12-05 11:47:05', '2020-12-05 11:47:05'),
(45, 1, 'update_cover', '16071688826044331', NULL, '2020-12-05 11:48:02', '2020-12-05 11:48:02'),
(46, 1, 'update_cover', '16071689075778112', NULL, '2020-12-05 11:48:27', '2020-12-05 11:48:27'),
(47, 1, 'update_cover', '16071690459384145', NULL, '2020-12-05 11:50:45', '2020-12-05 11:50:45'),
(48, 1, 'update_cover', '16071691269278031', NULL, '2020-12-05 11:52:06', '2020-12-05 11:52:06'),
(49, 1, 'update_cover', '16071692047431500', NULL, '2020-12-05 11:53:24', '2020-12-05 11:53:24'),
(50, 1, 'update_cover', '16071692699122515', NULL, '2020-12-05 11:54:29', '2020-12-05 11:54:29'),
(51, 1, 'update_cover', '16071692878338656', NULL, '2020-12-05 11:54:48', '2020-12-05 11:54:48'),
(52, 1, 'update_cover', '16071693786475692', NULL, '2020-12-05 11:56:18', '2020-12-05 11:56:18'),
(53, 1, 'update_cover', '16071695069242964', NULL, '2020-12-05 11:58:26', '2020-12-05 11:58:26'),
(54, 1, 'update_cover', '16071695231351887', NULL, '2020-12-05 11:58:43', '2020-12-05 11:58:43'),
(55, 1, 'update_cover', '16071695359519416', NULL, '2020-12-05 11:58:55', '2020-12-05 11:58:55'),
(56, 1, 'update_cover', '16071695474702694', NULL, '2020-12-05 11:59:07', '2020-12-05 11:59:07'),
(57, 1, 'update_cover', '16071696796889251', NULL, '2020-12-05 12:01:19', '2020-12-05 12:01:19'),
(58, 1, 'update_cover', '16071697001929744', NULL, '2020-12-05 12:01:40', '2020-12-05 12:01:40'),
(59, 1, 'update_cover', '16071701196743835', NULL, '2020-12-05 12:08:39', '2020-12-05 12:08:39'),
(60, 1, 'update_cover', '16071703387487495', NULL, '2020-12-05 12:12:18', '2020-12-05 12:12:18'),
(61, 1, 'update_cover', '16071707909363043', NULL, '2020-12-05 12:19:50', '2020-12-05 12:19:50'),
(62, 1, 'update_cover', '16071713658996975', NULL, '2020-12-05 12:29:25', '2020-12-05 12:29:25'),
(63, 1, 'update_cover', '16071714099254335', NULL, '2020-12-05 12:30:09', '2020-12-05 12:30:09'),
(64, 1, 'push_post', '16071714349888596', NULL, '2020-12-05 12:30:34', '2020-12-05 12:30:34'),
(65, 1, 'push_post', '16071714736231196', NULL, '2020-12-05 12:31:13', '2020-12-05 12:31:13'),
(66, 1, 'push_post', '16071715195743567', NULL, '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(67, 1, 'push_post', '16071715375696495', NULL, '2020-12-05 12:32:17', '2020-12-05 12:32:17'),
(68, 1, 'push_post', '16071715705145126', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(69, 1, 'update_cover', '16071787947465089', NULL, '2020-12-05 14:33:14', '2020-12-05 14:33:14'),
(70, 56, 'update_cover', '16072218413721031', NULL, '2020-12-06 02:30:41', '2020-12-06 02:30:41'),
(71, 56, 'add_friend', NULL, 13, '2020-12-06 04:36:55', '2020-12-06 04:36:55'),
(72, 13, 'received_request_add_friend', NULL, 56, '2020-12-06 04:37:58', '2020-12-06 04:37:58'),
(73, 56, 'haha', '16068911826358378', NULL, '2020-12-06 04:38:24', '2020-12-06 04:38:24'),
(74, 13, 'update_cover', '16072295385312009', NULL, '2020-12-06 04:38:58', '2020-12-06 04:38:58'),
(75, 13, 'received_request_add_friend', NULL, 56, '2020-12-06 04:46:23', '2020-12-06 04:46:23'),
(76, 1, 'like', '160545008456533255', NULL, '2020-12-06 05:50:36', '2020-12-06 05:50:36'),
(77, 13, 'sad', '16072218413721031', NULL, '2020-12-06 05:51:38', '2020-12-06 05:51:38'),
(78, 13, 'add_friend', NULL, 56, '2020-12-06 05:55:00', '2020-12-06 05:55:00'),
(79, 56, 'received_request_add_friend', NULL, 13, '2020-12-06 05:58:34', '2020-12-06 05:58:34'),
(80, 1, 'push_post', '16073101137510965', NULL, '2020-12-07 03:01:53', '2020-12-07 03:01:53'),
(81, 56, 'push_post', '16073102366641798', NULL, '2020-12-07 03:03:56', '2020-12-07 03:03:56'),
(82, 13, 'haha', '16073102366641798', NULL, '2020-12-07 03:05:02', '2020-12-07 03:05:02'),
(83, 13, 'push_post', '16073111264566077', NULL, '2020-12-07 03:18:46', '2020-12-07 03:18:46'),
(84, 1, 'push_post', '16073224872437382', NULL, '2020-12-07 06:28:07', '2020-12-07 06:28:07'),
(85, 1, 'push_post', '16073225159706189', NULL, '2020-12-07 06:28:35', '2020-12-07 06:28:35'),
(86, 1, 'update_cover', '16073227257949776', NULL, '2020-12-07 06:32:05', '2020-12-07 06:32:05'),
(87, 1, 'update_cover', '16073231289021631', NULL, '2020-12-07 06:38:48', '2020-12-07 06:38:48'),
(88, 1, 'update_cover', '16073232316627516', NULL, '2020-12-07 06:40:31', '2020-12-07 06:40:31'),
(89, 1, 'update_cover', '16073232602537213', NULL, '2020-12-07 06:41:00', '2020-12-07 06:41:00'),
(90, 1, 'update_cover', '16073233654897460', NULL, '2020-12-07 06:42:45', '2020-12-07 06:42:45'),
(91, 1, 'update_cover', '16073235156505193', NULL, '2020-12-07 06:45:15', '2020-12-07 06:45:15'),
(92, 1, 'update_cover', '16073235921892609', NULL, '2020-12-07 06:46:32', '2020-12-07 06:46:32'),
(93, 1, 'update_cover', '16073246035260898', NULL, '2020-12-07 07:03:23', '2020-12-07 07:03:23'),
(94, 1, 'update_cover', '16073246414687005', NULL, '2020-12-07 07:04:01', '2020-12-07 07:04:01'),
(95, 1, 'update_cover', '16073246824301987', NULL, '2020-12-07 07:04:42', '2020-12-07 07:04:42'),
(96, 1, 'add_friend', NULL, 4, '2020-12-07 07:05:03', '2020-12-07 07:05:03'),
(97, 1, 'push_post', '16073251595848409', NULL, '2020-12-07 07:12:39', '2020-12-07 07:12:39'),
(98, 1, 'update_cover', '16073401914874715', NULL, '2020-12-07 11:23:11', '2020-12-07 11:23:11'),
(99, 1, 'update_cover', '16073657678939071', NULL, '2020-12-07 18:29:27', '2020-12-07 18:29:27'),
(100, 1, 'update_cover', '16073657892534548', NULL, '2020-12-07 18:29:49', '2020-12-07 18:29:49');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment_UserId` int(10) UNSIGNED NOT NULL,
  `comment_PostId` int(10) UNSIGNED NOT NULL,
  `comment_Content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_ParentId` int(11) NOT NULL DEFAULT 0,
  `comment_Type` enum('parent','child') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'parent',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment_UserId`, `comment_PostId`, `comment_Content`, `comment_ParentId`, `comment_Type`, `created_at`, `updated_at`) VALUES
(1, 25, 20, 'bbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-17 01:09:33', '2020-11-26 12:03:22'),
(3, 3, 50, 'aaaaaaaaaaaaa', 2, 'child', '2020-11-17 01:34:34', NULL),
(4, 8, 46, 'aaaaaaaaaaaaa', 2, 'child', '2020-11-17 02:14:36', NULL),
(5, 7, 20, 'aaaaaaaaaaaaa', 1, 'child', '2020-11-17 06:17:17', NULL),
(6, 33, 50, 'aaaaaaaaaaaaa', 2, 'child', '2020-11-17 03:15:40', NULL),
(38, 1, 45, 'anh', 0, 'parent', '2020-11-22 13:13:24', '2020-11-22 13:13:24'),
(39, 1, 45, 'a', 0, 'parent', '2020-11-22 13:32:20', '2020-11-22 13:32:20'),
(40, 1, 46, 'a', 0, 'parent', '2020-11-22 13:32:47', '2020-11-22 13:32:47'),
(41, 1, 45, 'a', 0, 'parent', '2020-11-22 13:33:25', '2020-11-22 13:33:25'),
(42, 1, 45, 'aa', 0, 'parent', '2020-11-22 13:33:29', '2020-11-22 13:33:29'),
(43, 1, 45, 'aa', 0, 'parent', '2020-11-22 13:34:29', '2020-11-22 13:34:29'),
(44, 1, 45, 'aa', 0, 'parent', '2020-11-22 13:34:31', '2020-11-22 13:34:31'),
(45, 1, 45, 'a', 0, 'parent', '2020-11-22 13:34:49', '2020-11-22 13:34:49'),
(46, 1, 45, 'a', 0, 'parent', '2020-11-22 13:37:55', '2020-11-22 13:37:55'),
(47, 1, 45, 'a', 0, 'parent', '2020-11-22 13:38:51', '2020-11-22 13:38:51'),
(48, 1, 45, 'a', 0, 'parent', '2020-11-22 13:39:37', '2020-11-22 13:39:37'),
(49, 1, 45, 'aaaaa', 0, 'parent', '2020-11-22 13:40:09', '2020-11-22 13:40:09'),
(50, 1, 45, 'a', 0, 'parent', '2020-11-22 13:41:17', '2020-11-22 13:41:17'),
(51, 1, 45, 'a', 0, 'parent', '2020-11-22 13:42:04', '2020-11-22 13:42:04'),
(52, 1, 46, 'a', 0, 'parent', '2020-11-22 13:42:13', '2020-11-22 13:42:13'),
(53, 1, 47, 'a', 0, 'parent', '2020-11-22 13:42:58', '2020-11-22 13:42:58'),
(54, 1, 45, 'a000', 0, 'parent', '2020-11-22 13:44:25', '2020-11-22 13:44:25'),
(55, 1, 46, 'a0', 0, 'parent', '2020-11-22 13:45:18', '2020-11-22 13:45:18'),
(56, 1, 46, 'a00', 0, 'parent', '2020-11-22 13:45:31', '2020-11-22 13:45:31'),
(57, 1, 46, 'a00aaaaaaaaa', 0, 'parent', '2020-11-22 13:45:35', '2020-11-22 13:45:35'),
(58, 1, 46, 'a00aaaaaaaaaa', 0, 'parent', '2020-11-22 13:45:37', '2020-11-22 13:45:37'),
(59, 1, 46, 'a00aaaaaaaaaa', 0, 'parent', '2020-11-22 13:46:01', '2020-11-22 13:46:01'),
(60, 1, 46, 'a00aaaaaaaaaaa', 0, 'parent', '2020-11-22 13:46:04', '2020-11-22 13:46:04'),
(61, 1, 46, 'a00aaaaaaaaaaa', 0, 'parent', '2020-11-22 13:47:51', '2020-11-22 13:47:51'),
(62, 1, 20, 'b', 0, 'parent', '2020-11-22 13:49:05', '2020-11-22 13:49:05'),
(63, 1, 20, 'bb', 0, 'parent', '2020-11-22 13:49:12', '2020-11-22 13:49:12'),
(64, 1, 20, 'bbb', 0, 'parent', '2020-11-22 13:49:18', '2020-11-22 13:49:18'),
(65, 1, 45, '1', 0, 'parent', '2020-11-22 13:49:59', '2020-11-22 13:49:59'),
(66, 1, 20, 'a', 0, 'parent', '2020-11-22 13:50:40', '2020-11-22 13:50:40'),
(67, 1, 47, 'a', 0, 'parent', '2020-11-22 13:51:07', '2020-11-22 13:51:07'),
(68, 1, 47, 'aa', 0, 'parent', '2020-11-22 13:51:10', '2020-11-22 13:51:10'),
(69, 1, 47, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 0, 'parent', '2020-11-22 13:51:13', '2020-11-22 13:51:13'),
(70, 1, 45, 'em đặp lắm', 0, 'parent', '2020-11-22 14:03:14', '2020-11-22 14:03:14'),
(71, 1, 45, 'a', 0, 'parent', '2020-11-22 14:06:26', '2020-11-22 14:06:26'),
(72, 1, 45, 'aaaaaaa', 0, 'parent', '2020-11-22 14:06:31', '2020-11-22 14:06:31'),
(73, 1, 45, '7', 0, 'parent', '2020-11-22 14:06:59', '2020-11-22 14:06:59'),
(74, 1, 45, '7', 0, 'parent', '2020-11-22 14:07:15', '2020-11-22 14:07:15'),
(75, 1, 45, '78', 0, 'parent', '2020-11-22 14:07:19', '2020-11-22 14:07:19'),
(76, 1, 45, '78', 0, 'parent', '2020-11-22 14:07:23', '2020-11-22 14:07:23'),
(77, 1, 45, '78', 0, 'parent', '2020-11-22 14:07:26', '2020-11-22 14:07:26'),
(78, 1, 45, '78', 0, 'parent', '2020-11-22 14:07:28', '2020-11-22 14:07:28'),
(79, 1, 45, 'a', 0, 'parent', '2020-11-22 14:08:10', '2020-11-22 14:08:10'),
(80, 1, 45, 'a', 0, 'parent', '2020-11-22 14:08:15', '2020-11-22 14:08:15'),
(81, 1, 45, 'a', 0, 'parent', '2020-11-22 14:09:19', '2020-11-22 14:09:19'),
(82, 1, 45, 'a', 0, 'parent', '2020-11-22 14:20:26', '2020-11-22 14:20:26'),
(83, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 15:54:54', '2020-11-22 15:54:54'),
(84, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 15:55:10', '2020-11-22 15:55:10'),
(85, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 15:55:25', '2020-11-22 15:55:25'),
(86, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 15:58:26', '2020-11-22 15:58:26'),
(87, 3, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 15:59:25', '2020-11-22 15:59:25'),
(88, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 16:00:46', '2020-11-22 16:00:46'),
(89, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 16:03:30', '2020-11-22 16:03:30'),
(90, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 16:03:44', '2020-11-22 16:03:44'),
(91, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 16:04:52', '2020-11-22 16:04:52'),
(92, 1, 50, 'aaaaaaa', 91, 'child', '2020-11-22 16:07:03', '2020-11-22 16:07:03'),
(93, 1, 45, 'a', 0, 'parent', '2020-11-22 16:10:52', '2020-11-22 16:10:52'),
(94, 1, 45, 'a', 0, 'parent', '2020-11-22 16:11:27', '2020-11-22 16:11:27'),
(95, 1, 46, 'a', 0, 'parent', '2020-11-22 16:12:53', '2020-11-22 16:12:53'),
(96, 1, 50, 'aaaaaaa', 0, 'parent', '2020-11-22 16:16:22', '2020-11-22 16:16:22'),
(97, 1, 50, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:19:15', '2020-11-22 16:19:15'),
(98, 1, 46, 'b', 0, 'parent', '2020-11-22 16:20:18', '2020-11-22 16:20:18'),
(99, 1, 46, 'b', 0, 'parent', '2020-11-22 16:23:20', '2020-11-22 16:23:20'),
(100, 1, 46, 'b', 0, 'parent', '2020-11-22 16:23:35', '2020-11-22 16:23:35'),
(101, 1, 46, 'b', 0, 'parent', '2020-11-22 16:24:00', '2020-11-22 16:24:00'),
(102, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:25:19', '2020-11-22 16:25:19'),
(103, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:26:21', '2020-11-22 16:26:21'),
(104, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:28:45', '2020-11-22 16:28:45'),
(105, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:29:17', '2020-11-22 16:29:17'),
(106, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:31:52', '2020-11-22 16:31:52'),
(107, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:32:16', '2020-11-22 16:32:16'),
(108, 1, 75, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-22 16:32:36', '2020-11-22 16:32:36'),
(109, 1, 91, 'a', 0, 'parent', '2020-11-22 16:39:18', '2020-11-22 16:39:18'),
(110, 1, 91, 'aaaa', 0, 'parent', '2020-11-22 16:39:25', '2020-11-22 16:39:25'),
(111, 1, 45, 'a', 0, 'parent', '2020-11-23 09:10:11', '2020-11-23 09:10:11'),
(112, 1, 45, 'a', 0, 'parent', '2020-11-23 10:41:12', '2020-11-23 10:41:12'),
(113, 1, 45, 'em đẹp lắm @@', 0, 'parent', '2020-11-23 12:09:25', '2020-11-23 12:09:25'),
(114, 1, 45, 'em đẹp lắm @@', 0, 'parent', '2020-11-23 12:09:44', '2020-11-23 12:09:44'),
(115, 1, 45, 'em đẹp lắm', 0, 'parent', '2020-11-23 12:12:26', '2020-11-23 12:12:26'),
(116, 1, 46, 'a', 0, 'parent', '2020-11-23 12:12:41', '2020-11-23 12:12:41'),
(117, 1, 47, 'a', 0, 'parent', '2020-11-23 12:15:46', '2020-11-23 12:15:46'),
(118, 1, 45, 'em đẹp lắm', 0, 'parent', '2020-11-23 12:17:56', '2020-11-23 12:17:56'),
(119, 1, 45, 'a', 0, 'parent', '2020-11-24 05:21:07', '2020-11-24 05:21:07'),
(120, 1, 45, 'a', 0, 'parent', '2020-11-24 05:21:50', '2020-11-24 05:21:50'),
(121, 1, 45, 'sadsadasd', 0, 'parent', '2020-11-24 05:22:06', '2020-11-24 05:22:06'),
(122, 1, 45, 'sadsadsadasd', 0, 'parent', '2020-11-24 05:23:55', '2020-11-24 05:23:55'),
(123, 1, 45, 'a', 0, 'parent', '2020-11-24 05:25:03', '2020-11-24 05:25:03'),
(124, 1, 45, 'a', 0, 'parent', '2020-11-25 15:00:58', '2020-11-25 15:00:58'),
(125, 1, 45, 'a', 0, 'parent', '2020-11-26 05:40:28', '2020-11-26 05:40:28'),
(126, 1, 45, 'a', 0, 'parent', '2020-11-26 05:41:53', '2020-11-26 05:41:53'),
(127, 1, 45, 't', 0, 'parent', '2020-11-26 05:41:57', '2020-11-26 05:41:57'),
(128, 1, 97, 'a', 0, 'parent', '2020-11-26 05:42:14', '2020-11-26 05:42:14'),
(129, 1, 47, 'lanlan11', 0, 'parent', '2020-11-26 10:30:37', '2020-11-26 10:30:37'),
(130, 1, 89, 'a', 0, 'parent', '2020-11-26 10:39:31', '2020-11-26 10:39:31'),
(131, 1, 89, 'a', 0, 'parent', '2020-11-26 10:39:54', '2020-11-26 10:39:54'),
(132, 1, 24, 'bbbbbbbbbbbbbbbbbbbbb', 0, 'parent', '2020-11-26 10:44:48', '2020-11-26 10:44:48'),
(133, 1, 81, 'a', 0, 'parent', '2020-11-26 15:10:08', '2020-11-26 15:10:08'),
(134, 1, 46, 'a', 0, 'parent', '2020-11-26 15:42:31', '2020-11-26 15:42:31'),
(135, 1, 59, 'chào em haha', 0, 'parent', '2020-11-27 06:35:49', '2020-11-27 06:35:49'),
(173, 1, 59, 'a', 0, 'parent', '2020-11-27 13:11:57', '2020-11-27 13:11:57'),
(175, 1, 186, 'a.', 0, 'parent', '2020-11-27 13:35:52', '2020-11-27 13:35:52'),
(177, 1, 193, 'a', 0, 'parent', '2020-11-27 13:40:36', '2020-11-27 13:40:36'),
(178, 1, 194, 'a', 0, 'parent', '2020-11-27 13:40:48', '2020-11-27 13:40:48'),
(179, 13, 201, 'alo', 0, 'parent', '2020-11-28 05:40:40', '2020-11-28 05:40:40'),
(180, 1, 59, 'a', 0, 'parent', '2020-11-28 07:45:14', '2020-11-28 07:45:14'),
(181, 1, 208, 'a', 0, 'parent', '2020-12-03 07:31:43', '2020-12-03 07:31:43'),
(182, 1, 253, 'a', 0, 'parent', '2020-12-04 07:26:44', '2020-12-04 07:26:44'),
(183, 1, 253, 'b', 0, 'parent', '2020-12-04 07:26:58', '2020-12-04 07:26:58'),
(184, 1, 59, 'a', 0, 'parent', '2020-12-04 07:40:05', '2020-12-04 07:40:05'),
(185, 1, 255, 'a', 0, 'parent', '2020-12-04 07:40:39', '2020-12-04 07:40:39'),
(186, 1, 255, 'a', 0, 'parent', '2020-12-04 08:06:19', '2020-12-04 08:06:19'),
(187, 1, 254, 'a', 0, 'parent', '2020-12-04 08:07:01', '2020-12-04 08:07:01'),
(188, 1, 59, 'a', 0, 'parent', '2020-12-04 08:07:10', '2020-12-04 08:07:10'),
(189, 1, 92, 'a', 0, 'parent', '2020-12-04 08:07:17', '2020-12-04 08:07:17'),
(190, 1, 50, 'a', 0, 'parent', '2020-12-04 08:07:21', '2020-12-04 08:07:21'),
(191, 1, 252, 'a', 0, 'parent', '2020-12-04 18:18:25', '2020-12-04 18:18:25'),
(192, 13, 320, 'Chất lượng quá bạn ơi', 0, 'parent', '2020-12-06 05:52:04', '2020-12-06 05:52:04');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `follow_users`
--

CREATE TABLE `follow_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `follow_users_UserId` int(10) UNSIGNED NOT NULL,
  `follow_users_ReceivedUser` int(10) UNSIGNED NOT NULL,
  `follow_users_Status` enum('default','following','added','specialUser','unfollow') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `follow_users`
--

INSERT INTO `follow_users` (`id`, `follow_users_UserId`, `follow_users_ReceivedUser`, `follow_users_Status`, `created_at`, `updated_at`) VALUES
(102, 1, 3, 'added', '2020-11-30 07:02:38', NULL),
(104, 1, 13, 'added', NULL, NULL),
(108, 3, 29, 'added', NULL, NULL),
(109, 20, 3, 'added', NULL, NULL),
(110, 32, 3, 'added', NULL, NULL),
(111, 3, 10, 'added', '2020-11-29 17:00:00', NULL),
(114, 3, 8, 'added', NULL, NULL),
(116, 39, 3, 'added', NULL, NULL),
(117, 1, 39, 'added', '2020-12-01 09:35:06', '2020-12-01 09:35:06'),
(128, 43, 1, 'added', '2020-12-01 11:08:19', '2020-12-04 07:04:50'),
(139, 13, 10, 'following', '2020-12-02 06:40:14', '2020-12-02 06:40:14'),
(142, 20, 1, 'added', '2020-12-04 08:29:57', '2020-12-04 11:49:45'),
(145, 1, 10, 'following', '2020-12-04 08:30:52', '2020-12-04 08:30:52'),
(146, 1, 40, 'following', '2020-12-04 11:48:01', '2020-12-04 11:48:01'),
(148, 1, 40, 'following', '2020-12-04 18:18:19', '2020-12-04 18:18:19'),
(149, 1, 18, 'following', '2020-12-04 18:20:32', '2020-12-04 18:20:32'),
(151, 13, 56, 'added', '2020-12-06 05:55:00', '2020-12-06 05:58:34'),
(152, 1, 4, 'following', '2020-12-07 07:05:03', '2020-12-07 07:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `group_Name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_Description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_FakeId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_Avatar` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'uploads/avatar/groups/avatar-default.jpg',
  `group_Cover` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'uploads/cover/groups/cover-default.jpg',
  `group_Privacy` enum('public','private') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'public',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_Name`, `group_Description`, `group_FakeId`, `group_Avatar`, `group_Cover`, `group_Privacy`, `created_at`, `updated_at`) VALUES
(1, 'abbaaaasss', 'aaasaaasdas', 'abc-1604930870', 'tiendat.jpg', '123.png', 'private', '2020-11-09 07:07:50', '2020-11-11 13:47:42'),
(2, 'abc', '', 'abc-1604930913', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADVUlEQVR4nO3VvWuddRzG4fs0x1iLyZAoGXJs62JstQ4dRYu0VF0KFl+oFIqD+K+Im6hjKYiTb6T4gpu2urk4iMMJokcT10jTxe24CaEgkmJP73Bd6/Mb7uHD9xlMp9PA3W6YJOeunlcrd7UDsx4A/4VQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCPV/sHJoJZ+/sJ4La6/Mesq+IVQqDGc9oNkbJ17PU6tP5r7hoUx2Jnnnh/eyeXPrn++jhVHePf12lg8uZf3nz/LxxiczXNvNRb0N4z83cvnHK3nz+7cyun81rz12adf3Y0uP5tON9fx6Y5JLxy/m6OKRGS3t56Lu0XAwzOPLx3Ny5WQW5xczP3dPHji4vOvNt1vf5drW9Wz/tZ0nHjyRtaW1THZ+m9Hibi7qHj179Gyef/i5fDj+KC9/cSFbN/+45c3cgbkkyWAwuNPz9h0XdY/unZtPkizML+Ts4TMZLaxmcmOy680zo1PZ3NnMmSOnkyTj7fGdnrlvuKh79PXv1zLe3sjFY6/m1OjpfPnLV7e8+Wbzel565MUcXngo7//0gd/+bRhMp9Ocu3p+Oush8G9cVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCp8DcB/1uln+g4JQAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 'public', '2020-11-09 07:08:33', '2020-11-09 07:08:33'),
(3, 'abc', '', 'abc-1604930987', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADVUlEQVR4nO3VvWuddRzG4fs0x1iLyZAoGXJs62JstQ4dRYu0VF0KFl+oFIqD+K+Im6hjKYiTb6T4gpu2urk4iMMJokcT10jTxe24CaEgkmJP73Bd6/Mb7uHD9xlMp9PA3W6YJOeunlcrd7UDsx4A/4VQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCPV/sHJoJZ+/sJ4La6/Mesq+IVQqDGc9oNkbJ17PU6tP5r7hoUx2Jnnnh/eyeXPrn++jhVHePf12lg8uZf3nz/LxxiczXNvNRb0N4z83cvnHK3nz+7cyun81rz12adf3Y0uP5tON9fx6Y5JLxy/m6OKRGS3t56Lu0XAwzOPLx3Ny5WQW5xczP3dPHji4vOvNt1vf5drW9Wz/tZ0nHjyRtaW1THZ+m9Hibi7qHj179Gyef/i5fDj+KC9/cSFbN/+45c3cgbkkyWAwuNPz9h0XdY/unZtPkizML+Ts4TMZLaxmcmOy680zo1PZ3NnMmSOnkyTj7fGdnrlvuKh79PXv1zLe3sjFY6/m1OjpfPnLV7e8+Wbzel565MUcXngo7//0gd/+bRhMp9Ocu3p+Oush8G9cVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCpIFQqCJUKQqWCUKkgVCoIlQpCpYJQqSBUKgiVCkKlglCp8DcB/1uln+g4JQAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 'public', '2020-11-09 07:09:47', '2020-11-09 07:09:47'),
(4, 'dattttt', '', 'dattttt-1604932839', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEElEQVR4nO3UMauWdRzH4d+xox0PGCWVnSjSGqrNQTiF6NhLqLYoegm1CVIEQVBzL6Cht5EgmC61REtwUBBqcDiGOAhPwxOYi8QpfPw8XNfy577/y5ebD/fGYrEYeNxtzszMpS218lg7tOoB8G8IlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQv2/nPx85vzdmSM7q16yloRKglD/i1cuzLx9c+bMTzNHX33w7rVvZt7amzl7a+b0DzPbb65k4roQ6kEdO7MM9c+fZ258vXz+p/0fZ377dOaX92e2X5859cVqdq6JzVUPyDq2uzz3Ls7cvjpz5MWZU58t320cnnn63Mwz78wcfnbm0NbMky+tbusa8Ec9qI2/P93i3oPnzMwLH83sfDxz/cuZy8dn7vz66PetGaEe1O1ry/PkxZnn3pvZ+fD+3RPby3Pz+MyJD2a233j0+9aMUA9q/8rM9a9mntqdefmTmT++v3/3+3cz+9eWET//7szNb1e3c01sLBaLmUtbi1UPgYfxRyVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJfwELLjq7h2UjuwAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 'public', '2020-11-09 07:40:39', '2020-11-09 07:40:39'),
(5, 'dattttt', 'aaaa', 'dattttt-1605126865', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEElEQVR4nO3UMauWdRzH4d+xox0PGCWVnSjSGqrNQTiF6NhLqLYoegm1CVIEQVBzL6Cht5EgmC61REtwUBBqcDiGOAhPwxOYi8QpfPw8XNfy577/y5ebD/fGYrEYeNxtzszMpS218lg7tOoB8G8IlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQv2/nPx85vzdmSM7q16yloRKglD/i1cuzLx9c+bMTzNHX33w7rVvZt7amzl7a+b0DzPbb65k4roQ6kEdO7MM9c+fZ258vXz+p/0fZ377dOaX92e2X5859cVqdq6JzVUPyDq2uzz3Ls7cvjpz5MWZU58t320cnnn63Mwz78wcfnbm0NbMky+tbusa8Ec9qI2/P93i3oPnzMwLH83sfDxz/cuZy8dn7vz66PetGaEe1O1ry/PkxZnn3pvZ+fD+3RPby3Pz+MyJD2a233j0+9aMUA9q/8rM9a9mntqdefmTmT++v3/3+3cz+9eWET//7szNb1e3c01sLBaLmUtbi1UPgYfxRyVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJfwELLjq7h2UjuwAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 'public', '2020-11-11 13:34:25', '2020-11-11 13:34:25'),
(6, 'dattttt', 'aaaa', 'dattttt-1605126913', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEElEQVR4nO3UMauWdRzH4d+xox0PGCWVnSjSGqrNQTiF6NhLqLYoegm1CVIEQVBzL6Cht5EgmC61REtwUBBqcDiGOAhPwxOYi8QpfPw8XNfy577/y5ebD/fGYrEYeNxtzszMpS218lg7tOoB8G8IlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQv2/nPx85vzdmSM7q16yloRKglD/i1cuzLx9c+bMTzNHX33w7rVvZt7amzl7a+b0DzPbb65k4roQ6kEdO7MM9c+fZ258vXz+p/0fZ377dOaX92e2X5859cVqdq6JzVUPyDq2uzz3Ls7cvjpz5MWZU58t320cnnn63Mwz78wcfnbm0NbMky+tbusa8Ec9qI2/P93i3oPnzMwLH83sfDxz/cuZy8dn7vz66PetGaEe1O1ry/PkxZnn3pvZ+fD+3RPby3Pz+MyJD2a233j0+9aMUA9q/8rM9a9mntqdefmTmT++v3/3+3cz+9eWET//7szNb1e3c01sLBaLmUtbi1UPgYfxRyVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJfwELLjq7h2UjuwAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 'public', '2020-11-11 13:35:13', '2020-11-11 13:35:13'),
(7, 'Phước', 'tesst', '105656232233', '\'uploads/avatar/groups/avatar-default.jpg\'', 'uploads/cover/groups/cover-default.jpg', 'public', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `group_users`
--

CREATE TABLE `group_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `group_users_UserId` int(10) UNSIGNED NOT NULL,
  `group_users_GroupId` int(10) UNSIGNED NOT NULL,
  `group_users_Role` enum('adminstrators','member','censor') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'member',
  `group_users_Status` enum('accept','wait','refuse','request','') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'accept:đã tham gia,wait: chờ tham gia,refuse: từ chối tham gia,request: gửi lời mời tham gia',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `group_users`
--

INSERT INTO `group_users` (`id`, `group_users_UserId`, `group_users_GroupId`, `group_users_Role`, `group_users_Status`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 'adminstrators', 'accept', '2020-11-09 07:09:47', '2020-11-09 07:09:47'),
(2, 1, 4, 'member', 'accept', '2020-11-09 07:40:39', '2020-11-09 07:40:39'),
(3, 3, 3, 'member', 'accept', '2020-11-10 01:42:36', '2020-11-10 02:11:45'),
(5, 3, 6, 'adminstrators', 'accept', '2020-11-11 13:35:13', '2020-11-11 13:35:13'),
(6, 1, 7, 'adminstrators', 'accept', NULL, NULL),
(7, 3, 4, 'member', 'accept', '2020-11-10 01:42:36', '2020-11-10 02:11:45');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(1, 'default', '{\"uuid\":\"ed513be8-08a1-490e-b389-7db928c9653b\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:1:\\\" \\\";s:4:\\\"code\\\";i:796752;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604669025, 1604669025),
(2, 'default', '{\"uuid\":\"d0286ed7-ad70-43bf-8d40-b299a8585b8d\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:583967;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604671314, 1604671314),
(3, 'default', '{\"uuid\":\"aedaaf18-5acd-49f1-b3b3-97085a3472da\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:890776;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604824550, 1604824550),
(4, 'default', '{\"uuid\":\"4aeb17b6-b3e4-4c4a-bf13-f5f23696b33c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:23:\\\"phuocnv1a606a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:892075;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604902691, 1604902691),
(5, 'default', '{\"uuid\":\"40604589-c7d6-4c67-a78e-4b74554da393\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:24:\\\"phuocnv1a6a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:639519;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604909578, 1604909578),
(6, 'default', '{\"uuid\":\"ef4223ba-e48f-4f50-b7a4-4e2fdf14cf89\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:25:\\\"phuocnv1a6aa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:724787;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604909698, 1604909698),
(7, 'default', '{\"uuid\":\"4eb1fcd1-5e0e-4381-b833-045dfc46a2ce\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:25:\\\"phuocnv1a6aa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:735458;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604909729, 1604909729),
(8, 'default', '{\"uuid\":\"a020c452-879f-4ce1-9c03-bd15e6d6c147\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:26:\\\"phuocnv1a6aaa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:604373;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604909829, 1604909829),
(9, 'default', '{\"uuid\":\"ba239d24-5a3b-45ca-ae2d-313a5d1deaab\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:27:\\\"phuocnv1aa6aaa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:576021;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604909922, 1604909922),
(10, 'default', '{\"uuid\":\"b78e33db-c420-4e7e-9838-c4d64d7484bd\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:28:\\\"phuocnv1aaa6aaa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:685799;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604928841, 1604928841),
(11, 'default', '{\"uuid\":\"a291679f-6b4b-4cb3-b04d-7097fccd0619\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:9:\\\"V\\u0169 L\\u1eadp\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:732564;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604928878, 1604928878),
(12, 'default', '{\"uuid\":\"fe6967ab-1ce7-49a3-9696-e49e3c6c8e85\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:17:\\\"phuocnv@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:653315;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1604928964, 1604928964),
(13, 'default', '{\"uuid\":\"cab71c8e-31b8-494a-bcbf-9c3cd2410b8a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:696123;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605008506, 1605008506),
(14, 'default', '{\"uuid\":\"00459358-1672-4d29-a235-6f3a5c3f5961\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:654190;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009088, 1605009088),
(15, 'default', '{\"uuid\":\"32ef076c-4343-4e65-a0bb-c745e8423ed0\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:890239;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009119, 1605009119),
(16, 'default', '{\"uuid\":\"09e4ca24-2e09-49cf-884d-27755f3b884c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:574031;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009232, 1605009232),
(17, 'default', '{\"uuid\":\"a29747ce-fd25-4d0a-a210-15253185bb16\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:864282;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009312, 1605009312),
(18, 'default', '{\"uuid\":\"3f67046f-8df0-4e62-b5ae-3b362597939a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:567449;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009335, 1605009335),
(19, 'default', '{\"uuid\":\"6282e25e-95f1-43d4-989d-aa725362a7f0\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:607711;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009490, 1605009490),
(20, 'default', '{\"uuid\":\"8beef6bb-9e23-4a45-ba99-b4b9dcbf3333\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:789582;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009538, 1605009538),
(21, 'default', '{\"uuid\":\"733b3e84-240c-4996-86a9-ff74e26e341d\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:860629;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009565, 1605009565),
(22, 'default', '{\"uuid\":\"862b15da-7cea-4e94-941d-3c5a9742e119\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:696301;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009569, 1605009569),
(23, 'default', '{\"uuid\":\"8d343bf6-ded6-4c14-ae7e-88e1a343901b\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:584787;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009585, 1605009585),
(24, 'default', '{\"uuid\":\"38e52206-4ddc-416c-b4d8-b32183e37ed1\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:764115;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009689, 1605009689),
(25, 'default', '{\"uuid\":\"4f8b0ed4-17c3-4ae1-857c-b0bddf151cf0\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:871632;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009769, 1605009769),
(26, 'default', '{\"uuid\":\"28044506-bff0-468f-8c20-19a15baa030f\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:611069;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009839, 1605009839),
(27, 'default', '{\"uuid\":\"c1621c86-f232-44b0-a893-5ae34f1fdd36\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:523003;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605009916, 1605009916),
(28, 'default', '{\"uuid\":\"cd0e5148-12bd-4fc3-99de-3379ae1da034\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:582051;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010012, 1605010012),
(29, 'default', '{\"uuid\":\"6cf6b8e6-2308-4638-90f0-662a48241883\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:787111;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010022, 1605010022),
(30, 'default', '{\"uuid\":\"db2fdda6-f412-4c99-bd3d-de01a8617ee8\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:613806;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010037, 1605010037),
(31, 'default', '{\"uuid\":\"e057b97e-b11c-479b-ab80-60334b01b27c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:669622;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010054, 1605010054),
(32, 'default', '{\"uuid\":\"506c1652-bd22-4915-a5b1-997257a7fd35\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:779265;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010083, 1605010083),
(33, 'default', '{\"uuid\":\"aee5f758-37da-4c6b-a570-8b59b07fab05\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:715775;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010097, 1605010097),
(34, 'default', '{\"uuid\":\"0dfb5c1c-c760-4d47-a32f-d88f53f6f1a8\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:557767;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010112, 1605010112),
(35, 'default', '{\"uuid\":\"a935fdf3-aecd-4a71-bc5c-52c3bd0b1667\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv1066@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:707132;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010162, 1605010162),
(36, 'default', '{\"uuid\":\"0c1ff5ac-a12a-4870-bdb4-bd6acd23ef05\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv1066@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:532803;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010183, 1605010183),
(37, 'default', '{\"uuid\":\"cb17ee3e-bd9b-4cbf-ab94-524eb73b9db9\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv10266@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:799595;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010226, 1605010226),
(38, 'default', '{\"uuid\":\"1a5729a3-bfa0-4c80-995c-5e25ba50eb3a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:23:\\\"phuocnv102a66@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:844312;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010268, 1605010268),
(39, 'default', '{\"uuid\":\"aace86b4-f813-4216-89b7-0f4f96607501\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:24:\\\"phuocnv102a366@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:790928;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010280, 1605010280),
(40, 'default', '{\"uuid\":\"ed177039-aae7-4b67-9e39-21db5be7b3b3\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:575326;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010290, 1605010290),
(41, 'default', '{\"uuid\":\"fa6c6bc0-99be-4e33-8794-1aa181647e0e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:565588;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010529, 1605010529),
(42, 'default', '{\"uuid\":\"1e7e5124-d0e5-4f23-af4b-acc86f9c6e2f\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:565175;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010687, 1605010687),
(43, 'default', '{\"uuid\":\"4388a178-125c-4808-8630-30ddda109f93\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:648016;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010720, 1605010720),
(44, 'default', '{\"uuid\":\"e9622b4b-704b-4c21-ac11-de23176dcee5\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:25:\\\"phuocnv102aa366@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:14:\\\"Nguy\\u1ec5n L\\u1eadp\\\";s:4:\\\"code\\\";i:677054;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010741, 1605010741),
(45, 'default', '{\"uuid\":\"fe38dfb4-aa12-4850-a4cc-13f6bd1ee259\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:792114;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010790, 1605010790),
(46, 'default', '{\"uuid\":\"77fadec1-44d5-48f3-9b01-4c67b2707330\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:708258;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010797, 1605010797),
(47, 'default', '{\"uuid\":\"5a78cd9d-c74a-4418-af31-926e57c83615\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:559749;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605010913, 1605010913),
(48, 'default', '{\"uuid\":\"8c281cc0-5f8a-417b-a22c-b73bc5a99e38\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:867892;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605011100, 1605011100),
(49, 'default', '{\"uuid\":\"f77278af-32e7-457c-b5ef-03066a772c09\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:514652;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605011492, 1605011492),
(50, 'default', '{\"uuid\":\"5cc1a4a6-b885-45b6-a7c7-d97b613cc4fa\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:662860;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605011755, 1605011755),
(51, 'default', '{\"uuid\":\"61b3eec9-7039-4f2f-8321-b24f4e892be7\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:687197;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605011811, 1605011811),
(52, 'default', '{\"uuid\":\"1e912a5c-08da-475c-b226-bfeb80d9721b\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:675437;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605017363, 1605017363),
(53, 'default', '{\"uuid\":\"1c9cb0ae-066b-431e-8b83-a7b4fd1be772\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:767505;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605017390, 1605017390),
(54, 'default', '{\"uuid\":\"ed9b2d62-0065-4c4c-8d7e-e7efac8ab088\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:795935;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605018176, 1605018176),
(55, 'default', '{\"uuid\":\"3b72bde7-56a8-470b-b876-3f38cb884d0b\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:559209;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605020468, 1605020468),
(56, 'default', '{\"uuid\":\"ab8b1797-692a-443a-86eb-ed144325f21f\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:711464;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605020643, 1605020643),
(57, 'default', '{\"uuid\":\"068c9ad2-7b54-45b7-a960-292d1e2c848e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:502330;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605020910, 1605020910),
(58, 'default', '{\"uuid\":\"db71d3b5-aa54-4085-b3c8-39cfa1dfa089\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:789535;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605021002, 1605021002),
(59, 'default', '{\"uuid\":\"e9984ce0-8526-4ae8-9fd4-06196afc83b6\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:527349;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605021043, 1605021043),
(60, 'default', '{\"uuid\":\"5eba9ed0-1d9b-41f0-af53-c0ff67f7d308\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:649442;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605022038, 1605022038),
(61, 'default', '{\"uuid\":\"72cf2778-7d6b-45a2-90e9-cec9c3c6fcc3\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv107@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:875394;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605022349, 1605022349),
(62, 'default', '{\"uuid\":\"05ba2e08-2a22-4dec-88d4-b2c5ce20ae87\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv1062@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:622259;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605022841, 1605022841);
INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(63, 'default', '{\"uuid\":\"8c206eb7-6916-441f-a905-62c1a155050e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv10621@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:880155;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605022932, 1605022932),
(64, 'default', '{\"uuid\":\"c37ddecd-0d28-4656-a691-a6884e3eed43\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:23:\\\"phuocnv1aa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:801737;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605023253, 1605023253),
(65, 'default', '{\"uuid\":\"0c00aff3-8f19-4ed7-9844-725968091cdf\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1062s@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:834963;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605023384, 1605023384),
(66, 'default', '{\"uuid\":\"f3cca509-0240-44be-8a7f-4e041b93c48b\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv1036@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:601342;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605023434, 1605023434),
(67, 'default', '{\"uuid\":\"fedaa19e-f213-4c16-abbc-06fbcb37383c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv10a6@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:802404;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605023976, 1605023976),
(68, 'default', '{\"uuid\":\"03095549-98b4-4e5b-9237-59fb6737c1d1\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv10262@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:3:\\\"a a\\\";s:4:\\\"code\\\";i:824829;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605024015, 1605024015),
(69, 'default', '{\"uuid\":\"7821d655-4960-400d-80d2-8dd68b5d1a63\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:17:\\\"ppmedia@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:534884;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605024189, 1605024189),
(70, 'default', '{\"uuid\":\"4647ea9d-2a8b-48cf-b712-db88e73d2ec1\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:624920;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605024365, 1605024365),
(71, 'default', '{\"uuid\":\"97c5213e-0a4c-42ca-8f4e-81556dd7e128\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:24:\\\"phuocnv1aaa06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:585711;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605024470, 1605024470),
(72, 'default', '{\"uuid\":\"aaebff32-0e90-4381-acef-55dc137ed4f7\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:25:\\\"phuocnv1aaa0s6a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:613132;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605024526, 1605024526),
(73, 'default', '{\"uuid\":\"e3f4f013-5b6b-465d-8ac8-c75859fc966d\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv106a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:843071;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605025617, 1605025617),
(74, 'default', '{\"uuid\":\"d5b6f9d9-4086-4278-8fe0-b804ed25a803\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:24:\\\"phuocnv1a0sa6a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:692514;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605025822, 1605025822),
(75, 'default', '{\"uuid\":\"058861f5-3ec6-4df9-9bb0-86f1f4d96308\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:650549;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605027546, 1605027546),
(76, 'default', '{\"uuid\":\"269753ee-281a-45ab-ba2d-d06897bc3104\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:838404;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605027583, 1605027583),
(77, 'default', '{\"uuid\":\"295a7106-8a15-4f6a-9506-30dc6d880000\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";N;s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:896876;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605027730, 1605027730),
(78, 'default', '{\"uuid\":\"33a991f6-2763-4577-9b55-267fab6ab5a3\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:654075;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605028216, 1605028216),
(79, 'default', '{\"uuid\":\"0ca07071-e178-4801-85d9-8021294cbdf7\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:659028;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605029861, 1605029861),
(80, 'default', '{\"uuid\":\"2db55326-ea84-4b58-90d5-8df7b60a150c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:602936;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605029988, 1605029988),
(81, 'default', '{\"uuid\":\"221f946b-cb76-4bdd-84fc-76aa5f1bad45\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:610959;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605030468, 1605030468),
(82, 'default', '{\"uuid\":\"1f5f2339-0fec-406c-8e54-2388fb1e530e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:629212;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605030662, 1605030662),
(83, 'default', '{\"uuid\":\"0864fa40-dfd9-4e3c-a558-558f42a2d1b3\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:860858;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605031636, 1605031636),
(84, 'default', '{\"uuid\":\"7a371a23-afce-4340-8d85-d5643c35fc0a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:782066;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605031648, 1605031648),
(85, 'default', '{\"uuid\":\"1c0cfe3b-d981-43e5-9667-5beebadd697e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:682810;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605031811, 1605031811),
(86, 'default', '{\"uuid\":\"553d6c3c-9e66-4fbf-bc2d-1e7f50654967\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:885380;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605031855, 1605031855),
(87, 'default', '{\"uuid\":\"c12a11f2-52da-47ad-9432-62398569483e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:890624;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605032083, 1605032084),
(88, 'default', '{\"uuid\":\"5ad15eab-fad8-46e3-83cc-1c9c9c422f24\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:594224;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605032453, 1605032453),
(89, 'default', '{\"uuid\":\"e453994a-07c4-46ac-8aa1-4534421bf1f6\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:531551;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605032890, 1605032890),
(90, 'default', '{\"uuid\":\"f3f81a66-c13b-42fb-8f6d-8a9d5039acb9\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:853650;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605032980, 1605032980),
(91, 'default', '{\"uuid\":\"bfdc3874-552b-4b03-9f0a-11a206b6b169\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:22:\\\"phuocnv1a06a@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:728574;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605033125, 1605033125),
(92, 'default', '{\"uuid\":\"4232ccf3-0025-4d2a-b6b0-d875e342354a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:527176;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605033338, 1605033338),
(93, 'default', '{\"uuid\":\"48a3f3d5-2799-469f-a0ee-1f1252ebd7a8\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:742561;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605079598, 1605079598),
(94, 'default', '{\"uuid\":\"1649827e-5542-429b-9893-79a0a15db3ae\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:558102;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605079752, 1605079752),
(95, 'default', '{\"uuid\":\"56f5959b-4050-4676-b77f-cd185c5eed8a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:892789;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605080722, 1605080722),
(96, 'default', '{\"uuid\":\"0023ff25-295b-4a32-b819-44f4dec308df\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:811511;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605080862, 1605080862),
(97, 'default', '{\"uuid\":\"5711bc05-0ab3-4199-9740-4643efc3f8e5\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:698653;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605080970, 1605080970),
(98, 'default', '{\"uuid\":\"8878d441-34f0-47c0-8076-ffe901b9f3cf\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:762761;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605081149, 1605081149),
(99, 'default', '{\"uuid\":\"e6861f52-8aee-45df-8469-eef4a9ac1e5f\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:854928;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605081245, 1605081245),
(100, 'default', '{\"uuid\":\"8773e5cf-24a2-4063-9049-0d7b7d7f86e2\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:546535;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605082344, 1605082344),
(101, 'default', '{\"uuid\":\"08240d14-9155-4212-867e-30ba7e15fb81\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:859487;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605082856, 1605082856),
(102, 'default', '{\"uuid\":\"bef0f0fe-1e22-4751-a968-01af35f6f9d2\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:796162;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605082975, 1605082975),
(103, 'default', '{\"uuid\":\"f89422d4-b284-4a6d-abc2-3da5fb8fe116\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:719094;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605083079, 1605083079),
(104, 'default', '{\"uuid\":\"fe21a09b-bd12-48a9-ac4c-059394c3ee80\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:21:\\\"phuocnv1206@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:686864;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605083407, 1605083407),
(105, 'default', '{\"uuid\":\"b3756849-d9cd-487a-afd0-2c3ed05f4ca7\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:627152;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605083551, 1605083551),
(106, 'default', '{\"uuid\":\"a388652c-044a-4537-b55f-96fdb89da300\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:561875;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605089949, 1605089949),
(107, 'default', '{\"uuid\":\"f62901ed-fe34-4451-855c-ca58bd944bf4\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:565944;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605112309, 1605112309),
(108, 'default', '{\"uuid\":\"e4ef5a17-edd4-412e-b333-4a3ab3236421\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:648657;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605129919, 1605129919),
(109, 'default', '{\"uuid\":\"a4efeecc-8bfc-4ad5-b053-1214c7725c47\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:626141;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605664847, 1605664847),
(110, 'default', '{\"uuid\":\"bfb5487d-17be-43a0-af25-ba90f4727bf2\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:570187;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605665045, 1605665045),
(111, 'default', '{\"uuid\":\"bdcd0267-67a9-41d3-8f0f-012916d630b6\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:600453;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605665132, 1605665132),
(112, 'default', '{\"uuid\":\"377cc830-1d89-4021-b547-e8bf9ca88850\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:744381;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605665280, 1605665280),
(113, 'default', '{\"uuid\":\"0246b598-0006-4d5e-82a2-55708133f9c5\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:661774;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605665973, 1605665973),
(114, 'default', '{\"uuid\":\"f0e52b2c-bfbc-4b3a-ae9d-4f5714874b0a\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:572718;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666032, 1605666032),
(115, 'default', '{\"uuid\":\"532a7432-29e8-4353-befa-1d3151929052\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv106@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:844049;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666082, 1605666082),
(116, 'default', '{\"uuid\":\"4046a69d-c58e-44ba-8477-5191cb5c3f0c\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv101@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:672914;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666161, 1605666161),
(117, 'default', '{\"uuid\":\"770e4c77-5e70-4c1c-9965-373d325f9325\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv101@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:662096;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666244, 1605666244),
(118, 'default', '{\"uuid\":\"2246db46-f495-448a-b4c4-b6ebde0ee4cd\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv101@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:613354;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666392, 1605666392),
(119, 'default', '{\"uuid\":\"34e07a8e-d6cc-4d40-b31e-8d653873b1ec\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv101@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:771943;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666536, 1605666536),
(120, 'default', '{\"uuid\":\"415208a5-359e-4ae0-acd8-2100b3c5d551\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv101@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:0:\\\"\\\";s:4:\\\"code\\\";i:500739;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1605666585, 1605666585),
(121, 'default', '{\"uuid\":\"c54c3a6e-19c1-4b3b-bf1c-ed44b8dfcf09\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:20:\\\"phuocnv136@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:596503;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1606743581, 1606743581),
(122, 'default', '{\"uuid\":\"23d4a7c2-2c18-418f-a731-cbcb5b2f719e\",\"displayName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"delay\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"App\\\\Jobs\\\\WellcomeToMohiJob\",\"command\":\"O:26:\\\"App\\\\Jobs\\\\WellcomeToMohiJob\\\":10:{s:8:\\\"\\u0000*\\u0000email\\\";s:29:\\\"phuocnv101231232136@gmail.com\\\";s:7:\\\"\\u0000*\\u0000data\\\";a:2:{s:4:\\\"name\\\";s:22:\\\"Nguy\\u1ec5n V\\u0103n Ph\\u01b0\\u1edbc\\\";s:4:\\\"code\\\";i:509829;}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1606743644, 1606743644);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `messages_From` int(10) UNSIGNED NOT NULL,
  `messages_To` int(10) UNSIGNED NOT NULL,
  `messages_Message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `messages_ImageUrl` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `messages_ImageType` enum('image','video') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `messages_ReadAt` datetime DEFAULT NULL,
  `messages_RemoveMessage` enum('remove') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `messages_From`, `messages_To`, `messages_Message`, `messages_ImageUrl`, `messages_ImageType`, `messages_ReadAt`, `messages_RemoveMessage`, `created_at`, `updated_at`) VALUES
(23, 10, 3, '1', NULL, 'image', '2020-11-12 00:00:00', 'remove', '2020-11-14 17:45:47', '2020-11-27 13:48:32'),
(24, 10, 1, '2', NULL, 'image', NULL, NULL, '2020-11-14 17:46:03', '2020-11-14 17:46:03'),
(25, 3, 10, '3', NULL, 'image', '2020-11-13 00:00:00', NULL, '2020-11-14 17:46:15', '2020-11-14 17:46:15'),
(26, 1, 5, '2', NULL, 'image', '2020-11-14 00:00:00', NULL, '2020-11-15 17:46:25', '2020-11-14 17:46:25'),
(27, 10, 3, '5', NULL, 'image', '2020-11-16 00:00:00', NULL, '2020-11-14 17:46:37', '2020-11-14 17:46:37'),
(28, 5, 3, '6', NULL, 'image', '2020-11-17 00:00:00', NULL, '2020-11-27 17:46:46', '2020-11-14 17:46:46'),
(29, 5, 1, '3', NULL, 'image', '2020-11-13 00:00:00', NULL, '2020-11-14 17:47:11', '2020-11-14 17:47:11'),
(30, 5, 1, '1', NULL, 'image', '2020-11-15 00:00:00', NULL, '2020-11-18 04:32:11', '2020-11-14 17:47:11'),
(31, 6, 3, 'hello', NULL, 'image', '2020-11-18 00:00:00', NULL, '2020-11-29 17:00:00', '2020-11-14 17:46:46'),
(33, 6, 1, 'tin nhắn mới nhất', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-19 04:32:11', '2020-11-18 17:47:11'),
(52, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(53, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(54, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(55, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(56, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(57, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(58, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(59, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(60, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(61, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(62, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(63, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(64, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(65, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(66, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(67, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(68, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(69, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(70, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(71, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(72, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(73, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(74, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(75, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(76, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(77, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(78, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(79, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(80, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(81, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(82, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(83, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(84, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(85, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(86, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(87, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(88, 6, 1, 'tin nhắn mới nhất', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-22 04:32:11', '2020-11-18 17:47:11'),
(89, 6, 1, 'tin nhắn mới nhất2', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-22 13:32:11', '2020-11-18 17:47:11'),
(90, 5, 1, 'mới nhất', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-22 11:32:11', '2020-11-18 17:47:11'),
(91, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(92, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(93, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(94, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(95, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(96, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(97, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(98, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(99, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(100, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(101, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(102, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(103, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(104, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(105, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(106, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(107, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(108, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(109, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(110, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(111, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(112, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(113, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(114, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(115, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(116, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(117, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(118, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(119, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(120, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(121, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(122, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(123, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(124, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(125, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(126, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(127, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(128, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(129, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(130, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(131, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(132, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(133, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(134, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(135, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(136, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(137, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(138, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(139, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(140, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(141, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(142, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(143, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(144, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11'),
(145, 5, 1, '6', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-12 04:32:11', '2020-11-18 17:47:11'),
(146, 5, 1, '4', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-14 04:32:11', '2020-11-18 17:47:11'),
(147, 5, 1, '5', NULL, 'image', '2020-11-19 00:00:00', NULL, '2020-11-13 04:32:11', '2020-11-18 17:47:11');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_07_03_052849_create_groups_table', 1),
(5, '2020_07_03_052850_create_pages_table', 1),
(6, '2020_07_03_052851_create_posts_table', 1),
(7, '2020_07_03_052852_create_comments_table', 1),
(8, '2020_07_03_052918_create_notifications_table', 1),
(9, '2020_07_03_052942_create_info_users_table', 1),
(10, '2020_07_03_052955_create_follow_users_table', 1),
(11, '2020_07_03_053011_create_page_users_table', 1),
(12, '2020_07_03_053049_create_group_users_table', 1),
(13, '2020_07_03_053149_create_messages_table', 1),
(14, '2020_07_03_053951_create_post_images_table', 1),
(15, '2020_07_03_054101_create_actions_table', 1),
(16, '2020_07_13_140511_create_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `notification_SendUserId` int(10) UNSIGNED NOT NULL,
  `notification_ReceivedUserId` int(10) UNSIGNED NOT NULL,
  `notification_AdminPostId` int(11) NOT NULL,
  `notification_Content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notification_PostIdFake` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notification_Action` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notification_IsRead` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `notification_SendUserId`, `notification_ReceivedUserId`, `notification_AdminPostId`, `notification_Content`, `notification_PostIdFake`, `notification_Action`, `notification_IsRead`, `created_at`, `updated_at`) VALUES
(5, 4, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '1605451953578822', 'like', NULL, '2020-11-18 09:26:46', '2020-11-18 09:26:46'),
(6, 4, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:07:07', '2020-11-18 10:07:07'),
(7, 4, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:09:17', '2020-11-18 10:09:17'),
(8, 4, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:10:01', '2020-11-18 10:10:01'),
(9, 4, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:10:32', '2020-11-18 10:10:32'),
(10, 4, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:10:47', '2020-11-18 10:10:47'),
(11, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:11:06', '2020-11-18 10:11:06'),
(12, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:11:06', '2020-11-18 10:11:06'),
(13, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:11:09', '2020-11-18 10:11:09'),
(14, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-18 10:11:09', '2020-11-18 10:11:09'),
(16, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'haha', NULL, '2020-11-20 20:13:57', '2020-11-30 10:33:13'),
(17, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16051219346262', 'haha', NULL, '2020-11-20 20:25:11', '2020-11-20 20:25:11'),
(18, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16051219346262', 'wow', NULL, '2020-11-20 20:25:19', '2020-11-20 20:25:19'),
(19, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16051219346262', 'sad', NULL, '2020-11-20 20:26:02', '2020-11-20 20:26:02'),
(20, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500845653324', 'haha', NULL, '2020-11-20 20:26:17', '2020-11-30 06:51:00'),
(21, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '160545148592572', 'like', NULL, '2020-11-20 21:22:42', '2020-11-20 21:22:42'),
(22, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'like', NULL, '2020-11-20 21:23:03', '2020-11-20 21:23:03'),
(23, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'like', NULL, '2020-11-20 21:23:07', '2020-11-20 21:23:07'),
(24, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'wow', NULL, '2020-11-20 21:23:07', '2020-11-20 21:23:07'),
(25, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'like', NULL, '2020-11-20 21:24:04', '2020-11-20 21:24:04'),
(26, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'wow', NULL, '2020-11-20 21:24:07', '2020-11-20 21:24:07'),
(27, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'angry', NULL, '2020-11-20 21:24:08', '2020-11-20 21:24:08'),
(28, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'like', NULL, '2020-11-20 21:24:08', '2020-11-20 21:24:08'),
(29, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500845653324', 'like', NULL, '2020-11-20 21:24:11', '2020-11-20 21:24:11'),
(30, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16051219346262', 'like', NULL, '2020-11-20 21:24:13', '2020-11-20 21:24:13'),
(31, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '160545148592572', 'like', NULL, '2020-11-20 21:24:15', '2020-11-20 21:24:15'),
(32, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '1605451485925712', 'like', NULL, '2020-11-20 21:24:17', '2020-11-20 21:24:17'),
(55, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'love', NULL, '2020-11-21 01:57:06', '2020-11-21 01:57:06'),
(56, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-21 04:53:51', '2020-11-21 04:53:51'),
(57, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-21 04:53:51', '2020-11-21 04:53:51'),
(61, 3, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '16054500347161955', 'love', NULL, '2020-11-21 06:21:19', '2020-11-21 06:21:19'),
(62, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16054514859257129', 'angry', NULL, '2020-11-21 22:10:57', '2020-11-21 22:10:57'),
(63, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 15:55:25', '2020-11-22 15:55:25'),
(64, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 15:55:25', '2020-11-22 15:55:25'),
(66, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 15:58:26', '2020-11-22 15:58:26'),
(67, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 15:58:26', '2020-11-22 15:58:26'),
(69, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:00:46', '2020-11-22 16:00:46'),
(70, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:00:46', '2020-11-22 16:00:46'),
(72, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:00:46', '2020-11-22 16:00:46'),
(73, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:30', '2020-11-22 16:03:30'),
(74, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:30', '2020-11-22 16:03:30'),
(76, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:30', '2020-11-22 16:03:30'),
(77, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:44', '2020-11-22 16:03:44'),
(78, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:44', '2020-11-22 16:03:44'),
(80, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:03:44', '2020-11-22 16:03:44'),
(81, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:04:53', '2020-11-22 16:04:53'),
(82, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:04:53', '2020-11-22 16:04:53'),
(84, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:04:53', '2020-11-22 16:04:53'),
(85, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:07:03', '2020-11-22 16:07:03'),
(86, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:07:03', '2020-11-22 16:07:03'),
(88, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:07:03', '2020-11-22 16:07:03'),
(89, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:16:22', '2020-11-22 16:16:22'),
(90, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:16:22', '2020-11-22 16:16:22'),
(92, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:16:22', '2020-11-22 16:16:22'),
(93, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:19:15', '2020-11-22 16:19:15'),
(94, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:19:15', '2020-11-22 16:19:15'),
(96, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-11-22 16:19:15', '2020-11-22 16:19:15'),
(97, 1, 10, 10, 'đã bình luận bài viết của ', '16054500845653324', 'comment', NULL, '2020-11-22 16:23:35', '2020-11-22 16:23:35'),
(98, 1, 3, 3, 'đã bình luận bài viết của ', '160512193462632', 'comment', NULL, '2020-11-22 16:32:36', '2020-11-22 16:32:36'),
(99, 1, 50, 4, 'đã bình luận bài viết của ', '1232', 'comment', NULL, '2020-11-22 16:39:18', '2020-11-22 16:39:18'),
(100, 1, 4, 4, 'đã bình luận bài viết của ', '1232', 'comment', NULL, '2020-11-22 16:39:18', '2020-11-22 16:39:18'),
(102, 1, 50, 4, 'đã bình luận bài viết của ', '1232', 'comment', NULL, '2020-11-22 16:39:25', '2020-11-22 16:39:25'),
(103, 1, 4, 4, 'đã bình luận bài viết của ', '1232', 'comment', NULL, '2020-11-22 16:39:25', '2020-11-22 16:39:25'),
(105, 1, 10, 10, 'đã bình luận bài viết của ', '16054500347161955', 'comment', NULL, '2020-11-23 09:10:11', '2020-11-23 09:10:11'),
(106, 1, 10, 10, 'đã bình luận bài viết của ', '16054500347161955', 'comment', NULL, '2020-11-23 10:41:12', '2020-11-23 10:41:12'),
(107, 1, 6, 6, 'đã bày tỏ cảm xúc bài viết của', '123221342', 'like', NULL, '2020-11-23 11:56:16', '2020-11-23 11:56:16'),
(108, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '1605451485925722', 'like', NULL, '2020-11-23 11:56:55', '2020-11-23 11:56:55'),
(109, 1, 7, 7, 'đã bày tỏ cảm xúc bài viết của', '1232213422', 'like', NULL, '2020-11-23 11:57:08', '2020-11-23 11:57:08'),
(110, 1, 3, 3, 'đã bình luận bài viết của ', '160545148592572', 'comment', NULL, '2020-11-23 12:15:46', '2020-11-23 12:15:46'),
(111, 1, 10, 10, 'đã bình luận bài viết của ', '16054500347161955', 'comment', NULL, '2020-11-24 05:21:07', '2020-11-24 05:21:07'),
(118, 1, 3, 3, 'đã bình luận bài viết của ', '16062053882126102', 'comment', NULL, '2020-11-26 05:42:14', '2020-11-26 05:42:14'),
(120, 1, 50, 3, 'đã bình luận bài viết của ', '160545195357882222', 'comment', NULL, '2020-11-26 10:39:31', '2020-11-26 10:39:31'),
(121, 1, 4, 3, 'đã bình luận bài viết của ', '160545195357882222', 'comment', NULL, '2020-11-26 10:39:31', '2020-11-26 10:39:31'),
(123, 1, 50, 3, 'đã bình luận bài viết của ', '160545195357882222', 'comment', NULL, '2020-11-26 10:39:54', '2020-11-26 10:39:54'),
(124, 1, 4, 3, 'đã bình luận bài viết của ', '160545195357882222', 'comment', NULL, '2020-11-26 10:39:54', '2020-11-26 10:39:54'),
(126, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '160545008456533222', 'haha', NULL, '2020-11-26 15:09:44', '2020-11-30 06:51:05'),
(127, 1, 10, 10, 'đã bày tỏ cảm xúc bài viết của', '160545008456533248', 'like', NULL, '2020-11-26 15:10:03', '2020-11-26 15:10:03'),
(128, 1, 10, 10, 'đã bình luận bài viết của ', '160545008456533248', 'comment', NULL, '2020-11-26 15:10:08', '2020-11-26 15:10:08'),
(129, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '1605451953578834', 'wow', NULL, '2020-11-27 06:35:23', '2020-11-30 06:50:54'),
(130, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-27 06:35:49', '2020-11-27 06:35:49'),
(131, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-27 06:35:49', '2020-11-27 06:35:49'),
(132, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-27 13:11:57', '2020-11-27 13:11:57'),
(133, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-27 13:11:57', '2020-11-27 13:11:57'),
(134, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-28 07:45:14', '2020-11-28 07:45:14'),
(135, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-11-28 07:45:14', '2020-11-28 07:45:14'),
(136, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16062053882126102', 'like', NULL, '2020-11-28 07:45:20', '2020-11-28 07:45:20'),
(137, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '160545195357882222', 'like', NULL, '2020-11-28 07:45:31', '2020-11-28 07:45:31'),
(138, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '1605451953578835', 'like', NULL, '2020-11-28 07:45:35', '2020-11-28 07:45:35'),
(139, 1, 13, 13, 'đã bày tỏ cảm xúc bài viết của', '16065416022129632', 'angry', NULL, '2020-11-30 06:50:35', '2020-11-30 06:50:47'),
(140, 1, 3, 3, 'đã bày tỏ cảm xúc bài viết của', '16054519535788222', 'wow', NULL, '2020-11-30 06:51:33', '2020-11-30 06:51:33'),
(141, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-12-04 07:40:05', '2020-12-04 07:40:05'),
(142, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-12-04 07:40:05', '2020-12-04 07:40:05'),
(143, 1, 3, 3, 'đã bình luận bài viết của ', '16070649181015400', 'comment', NULL, '2020-12-04 07:40:39', '2020-12-04 07:40:39'),
(144, 1, 3, 3, 'đã bình luận bài viết của ', '16070648897439073', 'comment', NULL, '2020-12-04 08:07:01', '2020-12-04 08:07:01'),
(145, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-12-04 08:07:10', '2020-12-04 08:07:10'),
(146, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578834', 'comment', NULL, '2020-12-04 08:07:10', '2020-12-04 08:07:10'),
(147, 1, 50, 5, 'đã bình luận bài viết của ', '123221', 'comment', NULL, '2020-12-04 08:07:17', '2020-12-04 08:07:17'),
(148, 1, 4, 5, 'đã bình luận bài viết của ', '123221', 'comment', NULL, '2020-12-04 08:07:17', '2020-12-04 08:07:17'),
(149, 1, 50, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-12-04 08:07:21', '2020-12-04 08:07:21'),
(150, 1, 4, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-12-04 08:07:21', '2020-12-04 08:07:21'),
(151, 1, 3, 3, 'đã bình luận bài viết của ', '1605451953578822', 'comment', NULL, '2020-12-04 08:07:22', '2020-12-04 08:07:22'),
(152, 1, 13, 13, 'đã bình luận bài viết của ', '16068911826358378', 'comment', NULL, '2020-12-04 18:18:25', '2020-12-04 18:18:25'),
(153, 1, 13, 13, 'đã bày tỏ cảm xúc bài viết của', '16068911826358378', 'haha', NULL, '2020-12-04 18:18:28', '2020-12-05 12:30:49'),
(155, 1, 23, 23, 'đã bày tỏ cảm xúc bài viết của', '160545008456533255', 'like', NULL, '2020-12-06 05:50:36', '2020-12-06 05:50:36'),
(156, 13, 56, 56, 'đã bày tỏ cảm xúc bài viết của', '16072218413721031', 'sad', NULL, '2020-12-06 05:51:38', '2020-12-06 05:51:38'),
(157, 13, 56, 56, 'đã bình luận bài viết của ', '16072218413721031', 'comment', NULL, '2020-12-06 05:52:04', '2020-12-06 05:52:04'),
(158, 13, 56, 56, 'đã bày tỏ cảm xúc bài viết của', '16073102366641798', 'haha', NULL, '2020-12-07 03:05:02', '2020-12-07 03:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `page_Name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_FakeId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_Description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_Avatar` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'uploads/avatar/pages/avatar-default.jpg',
  `page_Cover` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'uploads/cover/pages/cover-default.jpg',
  `page_Phone` int(11) DEFAULT NULL,
  `page_Email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_Address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_Type` enum('Doanh nghiệp hoặc Thương Hiệu','Cộng đồng hoặc Người của công chúng') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Doanh nghiệp hoặc Thương Hiệu',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `page_Name`, `page_FakeId`, `page_Description`, `page_Avatar`, `page_Cover`, `page_Phone`, `page_Email`, `page_Address`, `page_Type`, `created_at`, `updated_at`) VALUES
(26, 'đạt trần', 'dat-tran-16049301572993', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJ0lEQVR4nO3WMejncxzH8ffxtxkwoOikf2S4yUKdiUFu0EW6/0JRBtlkuiKLTVksNplEnZSuM0hRWFydkvw7gy6bKCeW8/8Zfkq3SP0u33v+ejyWT9/vZ3kNz759D61Wq4Gr3c7MzOztqpWr2jVLD4D/QqgkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRDqlbT34sw738/cePP6+aZbZw7fs+ymLSHUK+Hue9eBHn9u/fzaR+vzyZMzjz2/3K4tItRNPfvqzMm3Zn76cearj9fvXnp85sQLM/c9MnP/sXXERx9ddGadUDdx5OjMQ3sz58/NvPv6zG276/d//Dbz+YczB5dmvvly5uUnZr7+bNmtcULdxB1//3+eeXvm0/dnPnnvn7sL+zMHq5mLP8/sn525+MsyG7eEUDexOlif1+6szz8vLbdly+0sPSDt/Ln1eezpmZ3rZh48cfn977/O3Hlk5oHjMxe+m/nh2/9/45bwRd3E/tmZD96cuf2umYefmvni9OX3p96Yuf6GmWdembnl8CITt8Wh1Wo1s7e7WnoI/BtfVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZLwF4ySTMX0pRM/AAAAAElFTkSuQmCC', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-09 06:55:57', '2020-11-09 06:55:57'),
(27, 'đạt trần', 'dat-tran-16049302306972', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJ0lEQVR4nO3WMejncxzH8ffxtxkwoOikf2S4yUKdiUFu0EW6/0JRBtlkuiKLTVksNplEnZSuM0hRWFydkvw7gy6bKCeW8/8Zfkq3SP0u33v+ejyWT9/vZ3kNz759D61Wq4Gr3c7MzOztqpWr2jVLD4D/QqgkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRDqlbT34sw738/cePP6+aZbZw7fs+ymLSHUK+Hue9eBHn9u/fzaR+vzyZMzjz2/3K4tItRNPfvqzMm3Zn76cearj9fvXnp85sQLM/c9MnP/sXXERx9ddGadUDdx5OjMQ3sz58/NvPv6zG276/d//Dbz+YczB5dmvvly5uUnZr7+bNmtcULdxB1//3+eeXvm0/dnPnnvn7sL+zMHq5mLP8/sn525+MsyG7eEUDexOlif1+6szz8vLbdly+0sPSDt/Ln1eezpmZ3rZh48cfn977/O3Hlk5oHjMxe+m/nh2/9/45bwRd3E/tmZD96cuf2umYefmvni9OX3p96Yuf6GmWdembnl8CITt8Wh1Wo1s7e7WnoI/BtfVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZLwF4ySTMX0pRM/AAAAAElFTkSuQmCC', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-09 06:57:10', '2020-11-09 06:57:10'),
(28, 'đạt trần', 'dat-tran-16049302805844', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJ0lEQVR4nO3WMejncxzH8ffxtxkwoOikf2S4yUKdiUFu0EW6/0JRBtlkuiKLTVksNplEnZSuM0hRWFydkvw7gy6bKCeW8/8Zfkq3SP0u33v+ejyWT9/vZ3kNz759D61Wq4Gr3c7MzOztqpWr2jVLD4D/QqgkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRDqlbT34sw738/cePP6+aZbZw7fs+ymLSHUK+Hue9eBHn9u/fzaR+vzyZMzjz2/3K4tItRNPfvqzMm3Zn76cearj9fvXnp85sQLM/c9MnP/sXXERx9ddGadUDdx5OjMQ3sz58/NvPv6zG276/d//Dbz+YczB5dmvvly5uUnZr7+bNmtcULdxB1//3+eeXvm0/dnPnnvn7sL+zMHq5mLP8/sn525+MsyG7eEUDexOlif1+6szz8vLbdly+0sPSDt/Ln1eezpmZ3rZh48cfn977/O3Hlk5oHjMxe+m/nh2/9/45bwRd3E/tmZD96cuf2umYefmvni9OX3p96Yuf6GmWdembnl8CITt8Wh1Wo1s7e7WnoI/BtfVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZLwF4ySTMX0pRM/AAAAAElFTkSuQmCC', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-09 06:58:00', '2020-11-09 06:58:00'),
(29, 'page mới', 'page-moi-16052644727670', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADOklEQVR4nO3XvYrcZRyG4d+6mxBNgpsPDMTCwkrIEaQQq4B4AopYC56NhYIgSiCFhbVRiKeQRhuRYBET18B+yG7MmmQZC5OtZQsnd7yuYvjD2zwz3Lwzs7JYLAaedWszMzdvXVYrz7QXlj0A/g2hkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVBqCQIlQShkiBUEoRKglBJECoJQiVhbdkDao6vXZxLr309v219Oesn35xja+fn3s5Xs7Fz9fDszuYnc+70O7O2emY2d6/Po8f35sL6+zMz8+vmx7O9d2PJ76LHjXpE506/Pb/vXJs///ppLp77cF48/vrh2SsvvzcbO9dm/9HtubD+7qyfemvubH46Kyur8+rZj5a4ukuoR7S1d2O29r6bje2rMzNz8sSlw7Pt+9/P1u43s7X77czMbGxfna2967P74OYcWzu/lL11Qj2ilZXVJw9PP8LVw7PHB388eTr45/Vgb2ZmFouD/2jd88dv1CM6e+rK7D/8Zc6eujIzM/f3f1jyouebG/WI7u//OBfOfDAvnXhj7m5+Ng8e/rzsSc+1lcViMTdvXV4se0jF03/2d7c+n43tL5Y953/DjUqCUEnw1U+CG5UEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIlQagkCJUEoZIgVBKESoJQSRAqCUIl4W+AWnGy6BybbAAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:47:52', '2020-11-13 03:47:52'),
(30, 'page mới  2', 'page-moi-2-16052647162569', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE0ElEQVR4nO3azWscZQDH8d/sTtI0jS9tUzFC1SRqmxIQIfQglFIVX3ropRJPwVMPghb0TxAvggdvQaxShSKISLX43iCCChIUilq1Wk1rMdU0xLbZ7CY7O48HbePsZtYISZsf+X5ueWZnmQ3feWaenY1CCAJWuliSeoanqRUrWuFqHwCwGIQKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC4QKC/HVPoCVoi2Wju/ruPz39oMlVZKg/QOterAn1g3rIk2Wg46OJXp+dE5Tlfz9z82k2v7KjG7qiLR/oFU7Nhe1cW2k87NBo+Ophr+a07fnUknSI32xBre26LYNBcWRNHY+1ds/JjpwrKpauGIff8Uj1By7e2MN9beod/38RaerI9JQf6vuuSXW3jfL+mNm4ZI62wt6oLuoZ3e16do10eXxTe2RdvcWdH93UUNHKnp4a6y9W1oy+/Z1FtXXWdRAV1H73qvUv/WqFYUQ1DM8verP3foZ9b+MjCWZkP7v/osxdKSsz87UlvQ9XXGP2sTIWKKdh0ra9uK0Hnu/rFJ1/ny+99ZY3ddFTfaWRsdr2nWopC0vTOupkYrSkJ0PkjTo6U9ndedL07r71ZK+PJuNcsfm4tJ9GHOEmqNUDXrio4p+vRBUSaQPfqnp5WPVzGt23px/55SGoCePVnTqQlA1lQ6fSDQ6nmZe89rxqg5+XdXFOelsKei5L+Yy27vWNT8RVhNCzfHNRKpKkh37+HR24I4N+f++k1NBv9XdUf00lQ31k9O1ptvXFAn1EkLNMVVpvG2fqFs8Xd+WH9KZi2nD2L9vHSRpvC7k+u2YR6g5FprM4rqxJM0Pa3YRa6Bqk/2RRag5NrU3llo/ttCsewkNLi1CzbGts6D1bdmx+7qzi6fvJxsv71gehJqjtRjpwENr1bexoGtapT23x3q0f/7L+TSEhsUQlg9Pppq468ai3hlsX3DbWyeShlU9lg8zao6RsUTnZha+tP8wWdMzn89e4SNa3Qg1x8RM0J43ynr9u6p+L6WaTYJ+/vPvH5QMHi43/CgFy4tn/f+of1b/7slEj39IjSsFMyosECosECosECosECossOqHBWZUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWPgLSf4bzXoV3EcAAAAASUVORK5CYII=', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:51:56', '2020-11-13 03:51:56'),
(31, 'page mới  3', 'page-moi-3-16052647922407', 'Trần Tiến đạt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHaUlEQVR4nO3bbYwUdwHH8d/szt7tcdxxEKDcSQgCBau1JdiWpCEt1KfW2hdNfHhhfGNiSnyINQ2JpokvRWM1atoXhmpr0mgCvjBN6EOwoRa0JrUpQQIH1OPaYnmmB9zDsju744sVLfV2dm634fY3/X5e7s3N7Ox+9/+f2ZkN4jgW0OlCSQq3T1ArOlputp8AkAahwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwgKhwkI420+gHYGkypd6p/3bPX8uadep6lWPrV+Q01eWh9qwMK/lvYGKOen05VjHp2L96VRVv38j0uFLcdvbP12KNfT05FWP5QPpC0vzuu9DodbNz2moGKiYlyar0vHJWAcu1PT8yar+cDzSRNR4m+sX5PTFZaE2LMxpRW9O/YX6Os6XYx28UNOeMzU99UakE6X0++EgiONY4fYJy71KCvWR4bK+t78iSRosBtp2a5fuHmz+ufzNSEUP7SvrUkIsabb/8ecmdehi/WW9c1FOT9zWrWW9zSewsXKsh/9R1q/+efUT+Fh/oMc+0a0Ni/JN11Guxnr8WKQt+8q6XGu+Hw4yO/XfdV39DV3TF+iVTxdTRSpJX1tR0Kuf6dF1xaCt7W/8T1APrSlo18ZiqkglaaCrHuSj67r++9g9g3m9/KmeVJFKUlc+0DdWFbTnk0X1Ws+Z/5PZUNcO5PTh3kA77yhqSc/MdnPF3JyevaOovjbe5DsX53XvYF5bbyooF8w8+s2rCnpgZag1fYF23N6tOeHM17Fufl7bbume8f91osxO/VJ9Gh3oan1kfPRoRQ++Vm5p+1EtVi2uj26timqxyjW1FOm7rd81pVff8T4GyOyIKqmtSCVp88pQN/S3to4wF7QV6ZV1tBupJD2w0n/+99+DFKJarMdHIu14K9LIRKycpI/Oy+mbq8LEY9cwF+g7qwva/PfGo2paz7wdadtIpAMXairXpBvn5fT9GwqpjzslaWS8pp8eruilM1WdL0tDxUBfXR7qW9eHiYcXGxen30anyvTUL9XPgO/bW9ILp6af+h5Z26UHVxca/v9YOdbg05OqTPPvabYvSQ/vL+vHw5X/ezwfSLs3FXX7wuYhvXi6qntfKk17Fv/d1aF+sjb5WHTRHyf0Tvuft1mT6alfkn55tNIwUknasq+s1y81/vtAV6C72hiRXjxdnTZSSarG9YibGa/E+vJfp49Ukn5+JNLxyeRj0MXd7R9CzKbMh/re7yPfK5b02OvTh3TFuvmtv0y/OJK87j1naxorJ09oT45GOpfQcyzpmRPVxgtIGigQascanajpWIqjmueavMk3D7T2MkW1+hWvZoYTRnRJerbJ85OkQxeT1zHH/Gwk06EON3nzrjg6HqtUbRz06r7WXqYjl2JNNW9M5y8nf5j2jzXfj/NNRmV3mQ717OX0y7452fiN7m98rpVodCLdB6WcsFhUi1Ndt09aRxZkOtSLUfpRZjxh2f4Wv8s8+z6McuMp7jn4IMh0qDNRSpiiWz2+S1pn+nVke0pPK9OhFmewd3MSvoFqdVrN+nR8LWU61P4ZfCWTdLk16bAA10amQ13emy7UfCAt7Wm87NtThDrbMh3qR/pySnNfyE3zcgpzjRccGSfU2ZbpUOcWAm1Y2HwXPz+UfIn0NfNb5LIg06FK9Tvsk/Tkm98Gt/fs+3D6jrZkPtTPDYXa0iDWQNKvb+1O/AXAyamaXj7HiDrbzK8Ap7P15i59djCvJ45VNHwxVhRLN84L9O3rC7plQfK0/7s3GU07wQciVKl+8/BMbyAuV+Omdz/h2sj81N+OHw1X9C++muoImQ71qdFItbi10PaeqWrrIUbTTpHpUHe8Fenrr5RnHOvfzlV1/19K0/78BLMj06EumxPot6ORNu0u6eCF5tVFtVg/O1zRpt0l698XZVGmf9z3w4Nl/eBAffrOB9LdS/K6f2lety3Ia0kx0NxQGqvU77B/4WRVT45GHJN2qEyf9b/7ppRqLO08UdXOFD/rQOfJ9NSP7CBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWCBUWLC+hBpLCrdPzPbTwDXAiAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoLhAoL/waYZvlQABLtKwAAAABJRU5ErkJggg==', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:53:12', '2020-11-13 03:53:12'),
(32, 'page mới  4', 'page-moi-4-16052648371516', 'Trần Tiến đạt', 'data:image/png;base64,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', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:53:57', '2020-11-13 03:53:57'),
(33, 'page mới  5', 'page-moi-5-16052648643294', 'Trần Tiến đạt', 'data:image/png;base64,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', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:54:24', '2020-11-13 03:54:24'),
(34, 'dat', 'dat-16052650526493', 'Trần Tiến đạt', 'data:image/png;base64,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', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:57:32', '2020-11-13 03:57:32'),
(35, 'DAT', 'dat-16052651588544', 'Trần Tiến đạt', 'data:image/png;base64,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Gq9NqAU16nFhp+IC6WrrCMo4opJBLdiqeSbp9fQk4ooj7H3NEfhtDNaqRcKgyrnvXhUt8XvwjOY2jVOj6qutnD65vl/AEZVOL19V2KlR/qW4LHCxz4OtFTxhpRxa/V7saHT2EZU1H1QXgO/Y2FWqelKJzgLp+eT0Wr/mg9oVa8BTmnOJF1IZ5W9UkbKkbq/Dj6is6aBGPS78riOmfd+hAbVdq6uDvrJ8h1Y1hD1uvOLgIyprOqjvrWlDi09vKjljmnj71ojStRJG09M5ufav2aAefDqGryqe+TTd+4NjyousJS36AKaOqGzUeHpWTTX3ZCrgMvDO6sX4ho3z7TOmqfyNeC9E6rT6vnnLwubTfbivuW17Lj3r29EeUCuH3+XCvuYI3rmt1mJUU00FdVs0iD+uXqw9Z1r05s248iBK94seTo1NaO+EVdE9nMQPljQqX9/V2uDIoD7xTb/HAF5ZGEbP+nb8fcNy2yG9np5Urk1dmHoapUN1uktXt+aa1s0NQdubFivpialRfYaBoNtAzOfB0oAX68IBbIoEsaMxpLVqaTZZ08KB//ZjTPGk6pcb67UHaZUK6kcjKSRyeYQV34PiEZW/vT5ckfLYJS6oH6xrr/rPfO3KXeUnUYD+6Pl6ehKfJvXPFVAxaVk4Hk/haxo1vBOD+sQ3/aX6Vd8QDt6MK1+vu0AamOpHVpJubb22PoBn6511RCWD+hi/uTaEn382qHXPnkVh5Wa2SLcfqat7OKH9/VudLc6aA2ZQZ5ExTXy79xZ+elUvpID+B5zKm8pbou0azOZxWnNG4UCsfMe/lwODOsOFVAZbz1zDezbOTG30uPFyk94qpJ57yQfO5a8U3ea/PeBz1KovBrUgY5r4dd8Q1v37qu35zP0t+gukKzXaf/jn6PeDnfRIteaDmjFNvNUfx8qTl/GzzwZLqt10P9i8Zc35dZnl8kkyrXziX5GTjqis2aBeSGXwkyt3seyfl/H9S3fQn9E/JG26JX4PNmue5nw2kbZ1OJtdurW3k46oFDePatdE3sTJ0XH0xJM4di9Z9nlLOwukj9jcEm1X93AC39N4nApMrded6yDhahAf1LxlYdK0kDYtpE0T8WwedydzuJ3J4UY6i3OpND5NZnAxlYH+MWjq7Czpq/T86UzH4ymk8iZCGoe7FY+oTNr4/thyMizLgvHh+coPO4lKULN9VJKFQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBLh/6ZAGnlpgu2RAAAAAElFTkSuQmCC', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 03:59:18', '2020-11-13 03:59:18'),
(36, 'dat', 'dat-16052653099395', 'Trần Tiến đạt', 'data:image/png;base64,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Gq9NqAU16nFhp+IC6WrrCMo4opJBLdiqeSbp9fQk4ooj7H3NEfhtDNaqRcKgyrnvXhUt8XvwjOY2jVOj6qutnD65vl/AEZVOL19V2KlR/qW4LHCxz4OtFTxhpRxa/V7saHT2EZU1H1QXgO/Y2FWqelKJzgLp+eT0Wr/mg9oVa8BTmnOJF1IZ5W9UkbKkbq/Dj6is6aBGPS78riOmfd+hAbVdq6uDvrJ8h1Y1hD1uvOLgIyprOqjvrWlDi09vKjljmnj71ojStRJG09M5ufav2aAefDqGryqe+TTd+4NjyousJS36AKaOqGzUeHpWTTX3ZCrgMvDO6sX4ho3z7TOmqfyNeC9E6rT6vnnLwubTfbivuW17Lj3r29EeUCuH3+XCvuYI3rmt1mJUU00FdVs0iD+uXqw9Z1r05s248iBK94seTo1NaO+EVdE9nMQPljQqX9/V2uDIoD7xTb/HAF5ZGEbP+nb8fcNy2yG9np5Urk1dmHoapUN1uktXt+aa1s0NQdubFivpialRfYaBoNtAzOfB0oAX68IBbIoEsaMxpLVqaTZZ08KB//ZjTPGk6pcb67UHaZUK6kcjKSRyeYQV34PiEZW/vT5ckfLYJS6oH6xrr/rPfO3KXeUnUYD+6Pl6ehKfJvXPFVAxaVk4Hk/haxo1vBOD+sQ3/aX6Vd8QDt6MK1+vu0AamOpHVpJubb22PoBn6511RCWD+hi/uTaEn382qHXPnkVh5Wa2SLcfqat7OKH9/VudLc6aA2ZQZ5ExTXy79xZ+elUvpID+B5zKm8pbou0azOZxWnNG4UCsfMe/lwODOsOFVAZbz1zDezbOTG30uPFyk94qpJ57yQfO5a8U3ea/PeBz1KovBrUgY5r4dd8Q1v37qu35zP0t+gukKzXaf/jn6PeDnfRIteaDmjFNvNUfx8qTl/GzzwZLqt10P9i8Zc35dZnl8kkyrXziX5GTjqis2aBeSGXwkyt3seyfl/H9S3fQn9E/JG26JX4PNmue5nw2kbZ1OJtdurW3k46oFDePatdE3sTJ0XH0xJM4di9Z9nlLOwukj9jcEm1X93AC39N4nApMrded6yDhahAf1LxlYdK0kDYtpE0T8WwedydzuJ3J4UY6i3OpND5NZnAxlYH+MWjq7Czpq/T86UzH4ymk8iZCGoe7FY+oTNr4/thyMizLgvHh+coPO4lKULN9VJKFQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBKBQSURGFQSgUElERhUEoFBJREYVBLh/6ZAGnlpgu2RAAAAAElFTkSuQmCC', 'https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg', 378416794, 'kindkid12@gmail.com', '12 tô ký', 'Doanh nghiệp hoặc Thương Hiệu', '2020-11-13 04:01:49', '2020-11-13 04:01:49');

-- --------------------------------------------------------

--
-- Table structure for table `page_users`
--

CREATE TABLE `page_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `page_users_UserId` int(10) UNSIGNED NOT NULL,
  `page_users_PageId` int(10) UNSIGNED NOT NULL,
  `page_users_Role` enum('adminstrators','like','liked','censor','unlike') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unlike',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_users`
--

INSERT INTO `page_users` (`id`, `page_users_UserId`, `page_users_PageId`, `page_users_Role`, `created_at`, `updated_at`) VALUES
(17, 1, 26, 'adminstrators', '2020-11-09 06:55:57', '2020-11-09 06:55:57'),
(18, 1, 27, 'adminstrators', '2020-11-09 06:57:10', '2020-11-09 06:57:10'),
(19, 1, 28, 'adminstrators', '2020-11-09 06:58:00', '2020-11-09 06:58:00'),
(21, 17, 26, 'like', NULL, NULL),
(22, 3, 29, 'adminstrators', '2020-11-13 03:47:52', '2020-11-13 03:47:52'),
(23, 3, 30, 'adminstrators', '2020-11-13 03:51:56', '2020-11-13 03:51:56'),
(24, 3, 31, 'adminstrators', '2020-11-13 03:53:12', '2020-11-13 03:53:12'),
(25, 3, 32, 'adminstrators', '2020-11-13 03:53:57', '2020-11-13 03:53:57'),
(26, 3, 33, 'adminstrators', '2020-11-13 03:54:24', '2020-11-13 03:54:24'),
(27, 3, 34, 'adminstrators', '2020-11-13 03:57:32', '2020-11-13 03:57:32'),
(28, 3, 35, 'like', '2020-11-13 03:59:18', '2020-11-13 03:59:18'),
(29, 3, 36, 'unlike', '2020-11-13 04:01:49', '2020-11-13 04:01:49'),
(30, 3, 26, 'like', '2020-11-13 03:59:18', '2020-11-13 03:59:18'),
(31, 30, 28, 'like', '2020-11-09 06:58:00', '2020-11-09 06:58:00'),
(34, 3, 26, 'like', '2020-11-19 19:56:08', '2020-11-19 19:56:08');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_IdFake` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_UserId` int(10) UNSIGNED DEFAULT NULL,
  `post_PageId` int(10) UNSIGNED DEFAULT NULL,
  `post_GroupId` int(10) UNSIGNED DEFAULT NULL,
  `post_userReceiveId` int(10) UNSIGNED DEFAULT NULL,
  `post_PostIdShare` int(10) DEFAULT NULL,
  `post_Type` enum('post','avatar','cover') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `post_Content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_Privacy` enum('public','onlyme','friend') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'public',
  `post_FollowUserId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_UserIdHide` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_IdFake`, `post_UserId`, `post_PageId`, `post_GroupId`, `post_userReceiveId`, `post_PostIdShare`, `post_Type`, `post_Content`, `post_Privacy`, `post_FollowUserId`, `post_UserIdHide`, `created_at`, `updated_at`) VALUES
(1, '16051219346263', 3, 26, NULL, NULL, NULL, 'post', 'đây là trnag ', 'onlyme', '3', '', NULL, NULL),
(3, '123123', 3, NULL, NULL, NULL, NULL, 'post', 'đây là profile', 'public', '3', '', NULL, NULL),
(4, '16051219346261', 3, 26, NULL, NULL, NULL, 'post', 'đây là trang 22222', 'public', '3', '', '2020-11-11 12:12:14', '2020-11-11 12:12:14'),
(20, '16051219346262', 3, NULL, 4, NULL, NULL, 'post', 'đây là groupp ', 'public', '3', '01,', '2020-11-19 17:00:00', '2020-11-26 09:15:57'),
(24, '1605179400734035', 1, NULL, 3, NULL, NULL, 'post', 'đây là bài viết trong nhóm 333333333333', 'public', '1', '', '2020-11-05 04:10:00', '2020-11-12 04:24:09'),
(30, '16051891911458453', 1, NULL, NULL, 3, NULL, 'post', 'bài viết trang cá nhân đã sửa', 'onlyme', '1.3', '', '2020-11-12 06:49:11', '2020-11-12 07:02:38'),
(40, '16051891911458452', 1, NULL, NULL, 3, NULL, 'post', 'bài viết trang cá nhân 2', 'public', NULL, '', '2020-11-13 06:50:11', '2020-11-13 07:02:40'),
(41, '16051891911458423', 1, NULL, NULL, NULL, NULL, 'post', 'bài viết trang cá nhân 9', 'public', NULL, '', '2020-11-18 17:59:00', '2020-11-13 07:02:39'),
(42, '16051891911458411', 1, NULL, NULL, 5, NULL, 'post', 'bài viết trang cá nhân 3', 'public', NULL, '', '2020-11-12 17:00:00', '2020-11-13 07:02:00'),
(43, '16051891911458422', 1, 35, NULL, NULL, NULL, 'post', 'bài viết trên trang ', 'public', NULL, '', '2020-11-13 17:00:00', '2020-11-13 07:05:39'),
(44, '16054499595801752', 1, NULL, NULL, 5, NULL, 'post', 'bài viết trang có tag cuối', 'public', NULL, '', '2020-11-19 07:19:19', '2020-11-15 07:19:19'),
(45, '16054500347161955', 10, NULL, NULL, 5, NULL, 'post', 'bài viết trang có tag', 'public', '1', '01,', '2020-11-25 07:20:34', '2020-11-26 07:56:39'),
(46, '16054500845653324', 10, NULL, NULL, 10, NULL, 'post', 'Đại gia ngành thép khẳng định làm nông nghiệp \"đến nơi đến chốn\", mục tiêu cuối năm nay sẽ đạt sản lượng 700.000 trứng gà mỗi ngày.\r\n\r\nTập đoàn Hòa Phát (HPG) vừa kỷ niệm 5 năm thành lập Công ty Phát triển nông nghiệp Hòa Phát. Theo lãnh đạo doanh nghiệp này, bò Úc của Hòa Phát đang đứng đầu thị phần cả nước, trứng gà sạch dẫn đầu về sản lượng khu vực phía Bắc với 550.000 quả mỗi ngày.\r\n\r\nHòa Phát dự kiến cung cấp ra thị trường 150.000 con bò Australia, khoảng 250.000 heo thương phẩm và đạt sản lượng 700.000 trứng mỗi ngày vào cuối năm 2020.\r\n\r\n\"5 năm làm nông nghiệp, Hòa Phát chúng ta đã làm được rất nhiều việc. Hiện tại cứ 2 con bò Australia ở Việt Nam thì có một của Hòa Phát. Đây là minh chứng của việc Hòa Phát luôn làm đến nơi đến chốn ở bất cứ ngành nghề nào\", ông Trần Đình Long, Chủ tịch Hòa Phát, nói lại lễ kỷ niệm.\r\n\r\nNăm 2019, doanh thu mảng nông nghiệp đóng góp hơn 8.000 tỷ đồng, gấp 5,5 lần so với năm 2016. Lợi nhuận sau thuế đạt 558 tỷ đồng. 9 tháng đầu năm nay, mảng này bị ảnh hưởng bởi Covid-19 nhưng vẫn mang về gần 8.000 tỷ đồng doanh thu và 1.296 tỷ đồng lợi nhuận sau thuế, gấp gần 3 lần thực hiện cả năm 2019.', 'public', '1', '', '2020-11-21 07:21:24', '2020-11-22 16:23:35'),
(47, '160545148592572', 3, 27, NULL, NULL, NULL, 'post', 'Trang đã sửa', 'public', '1', '01,', '2020-11-19 07:44:45', '2020-11-26 11:07:27'),
(50, '1605451953578822', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '50,4,1,3', '', '2020-11-19 05:32:33', '2020-11-22 15:59:25'),
(59, '1605451953578834', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới 2222', 'public', '50,4', '', '2020-11-26 06:32:33', '2020-12-04 08:34:43'),
(75, '160512193462632', 4, NULL, NULL, 3, NULL, 'post', 'đây là groupp ', 'public', ',1', '', '2020-11-11 17:00:00', '2020-11-22 16:32:36'),
(76, '1605179400734036', 1, NULL, 3, NULL, NULL, 'post', 'đây là bài viết trong nhóm 333333333333', 'public', NULL, '', '2020-11-05 04:10:00', '2020-11-12 04:24:09'),
(77, '160545008456533222', 10, NULL, NULL, 10, NULL, 'post', 'bài viết trang cá nhân đã sửa gắn thẻ', 'public', NULL, '', '2020-11-19 07:21:24', '2020-11-15 07:28:45'),
(78, '1605451485925712', 3, 27, NULL, NULL, NULL, 'post', 'Trang đã sửa', 'public', NULL, '01,', '2020-11-19 07:44:45', '2020-11-26 11:08:03'),
(79, '16054519535788222', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '50,4,1', '', '2020-11-19 05:32:33', '2020-11-18 10:11:06'),
(80, '1605451953578835', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '', '01,', '2020-11-19 06:32:33', '2020-11-26 12:45:39'),
(81, '160545008456533248', 10, NULL, NULL, 10, NULL, 'post', 'bài viết trang cá nhân đã sửa gắn thẻ', 'public', ',1', '', '2020-11-19 07:21:24', '2020-11-26 15:10:08'),
(82, '1605451485925722', 3, 27, NULL, NULL, NULL, 'post', 'Trang đã sửa', 'public', '', '01,', '2020-11-19 07:44:45', '2020-11-26 11:17:38'),
(83, '16054519535788223', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '', '', '2020-11-19 05:32:33', '2020-11-24 03:51:52'),
(84, '16054519535788341', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '50,4', '01,', '2020-11-19 06:32:33', '2020-11-26 12:46:05'),
(85, '1605121934626325', 3, NULL, 4, NULL, NULL, 'post', 'đây là groupp ', 'public', NULL, '', '2020-11-11 17:00:00', '2020-11-14 17:00:00'),
(86, '16051794007340361', 1, NULL, 3, NULL, NULL, 'post', 'đây là bài viết trong nhóm 333333333333', 'public', NULL, '', '2020-11-05 04:10:00', '2020-11-12 04:24:09'),
(87, '1605450084565332227', 10, NULL, NULL, 10, NULL, 'post', 'bài viết trang cá nhân đã sửa gắn thẻ', 'public', NULL, '', '2020-11-19 07:21:24', '2020-11-15 07:28:45'),
(88, '16054514859257129', 3, 27, NULL, NULL, NULL, 'post', 'Trang đã sửa', 'public', NULL, '01,', '2020-11-19 07:44:45', '2020-11-26 11:17:59'),
(89, '160545195357882222', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '50,4,1', '01,', '2020-11-19 13:32:33', '2020-11-26 11:00:07'),
(90, '16054519535788359', 3, NULL, NULL, 3, NULL, 'post', 'đây là bài viết mới', 'public', '50,4,1', '01,', '2020-11-19 06:32:33', '2020-11-26 12:47:17'),
(91, '1232', 4, NULL, NULL, 4, NULL, 'post', 'đây là bài viết mới của id4', 'public', '50,4,1', '', '2020-11-19 06:32:33', '2020-11-18 10:11:06'),
(92, '123221', 5, NULL, NULL, 5, NULL, 'post', 'đây là bài viết mới của id4', 'public', '50,4,1', '', '2020-11-19 06:32:33', '2020-11-18 10:11:06'),
(93, '123221342', 6, NULL, NULL, 6, NULL, 'post', 'đây là bài viết mới của id4', 'public', '50,4,1', '', '2020-11-19 06:32:33', '2020-11-18 10:11:06'),
(94, '1232213422', 7, NULL, NULL, 7, NULL, 'post', 'đây là bài viết mới của id7', 'public', '50,4,1', '', '2020-11-19 06:32:33', '2020-11-18 10:11:06'),
(95, '16062053226890752', 1, NULL, NULL, 1, NULL, 'post', 'đây là bài viết post không hình  của nguyễn văn phước', 'public', NULL, '', '2020-11-24 08:08:42', '2020-11-24 08:08:42'),
(96, '16062053808539539', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:09:40', '2020-11-24 08:09:40'),
(97, '16062053882126102', 3, NULL, NULL, 3, NULL, 'post', 'bài viết trang có tag', 'public', '1,2,11,', '01,', '2020-11-24 08:09:48', '2020-11-26 07:56:54'),
(98, '16062054482734435', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:10:48', '2020-11-24 08:10:48'),
(99, '16062054615249564', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:11:01', '2020-11-24 08:11:01'),
(100, '16062055605081626', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:12:40', '2020-11-24 08:12:40'),
(101, '16062056074214424', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:13:27', '2020-11-24 08:13:27'),
(102, '16062056613326426', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:14:21', '2020-11-24 08:14:21'),
(103, '16062056883880295', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:14:48', '2020-11-24 08:14:48'),
(104, '16062058997284519', 1, NULL, NULL, 1, NULL, 'post', 'bài viết có ảnh và video story và post', 'public', NULL, '', '2020-11-24 08:18:19', '2020-11-24 08:18:19'),
(105, '16062059933410305', 1, NULL, NULL, 1, NULL, 'post', 'bài viết có ảnh và video story và post', 'onlyme', NULL, '', '2020-11-24 08:19:53', '2020-11-24 08:19:53'),
(106, '16062064348185320', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 08:27:14', '2020-11-24 08:27:14'),
(107, '16062064663037046', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 08:27:46', '2020-11-24 08:27:46'),
(108, '16062065608062644', 1, NULL, NULL, 1, NULL, 'post', 'a😎 😎 😎 😎 😎 😎', 'public', NULL, '', '2020-11-24 08:29:20', '2020-11-24 08:29:20'),
(109, '16062071336191602', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:38:53', '2020-11-24 08:38:53'),
(110, '16062073398774708', 1, NULL, NULL, 1, NULL, 'post', 'nguyễn văn Phước', 'public', NULL, '', '2020-11-24 08:42:19', '2020-11-24 08:42:19'),
(111, '16062073771368013', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 08:42:57', '2020-11-24 08:42:57'),
(112, '16062075613573557', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 08:46:01', '2020-11-24 08:46:01'),
(113, '16062075923309470', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 08:46:32', '2020-11-24 08:46:32'),
(114, '16062076999991187', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:48:19', '2020-11-24 08:48:19'),
(115, '16062077401005941', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:49:00', '2020-11-24 08:49:00'),
(116, '16062078579891716', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 08:50:57', '2020-11-24 08:50:57'),
(117, '16062090246311564', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 09:10:24', '2020-11-24 09:10:24'),
(118, '16062091026093835', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 09:11:42', '2020-11-24 09:11:42'),
(119, '16062091921029269', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:13:12', '2020-11-24 09:13:12'),
(120, '16062092163153305', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:13:36', '2020-11-24 09:13:36'),
(121, '16062092763054936', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:14:36', '2020-11-24 09:14:36'),
(122, '16062093054984326', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:15:05', '2020-11-24 09:15:05'),
(123, '16062093303968374', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:15:30', '2020-11-24 09:15:30'),
(124, '16062093495164830', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:15:49', '2020-11-24 09:15:49'),
(125, '16062106558133977', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:37:35', '2020-11-24 09:37:35'),
(126, '16062106688896615', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaa', 'public', NULL, '', '2020-11-24 09:37:48', '2020-11-24 09:37:48'),
(127, '16062108494866745', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:40:49', '2020-11-24 09:40:49'),
(128, '16062108575453497', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:40:57', '2020-11-24 09:40:57'),
(129, '16062112996645040', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:48:19', '2020-11-24 09:48:19'),
(130, '16062113148843825', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:48:34', '2020-11-24 09:48:34'),
(131, '16062114977354440', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 09:51:37', '2020-11-24 09:51:37'),
(132, '16062115736414304', 1, NULL, NULL, 1, NULL, 'post', 's', 'public', NULL, '', '2020-11-24 09:52:53', '2020-11-24 09:52:53'),
(133, '16062118951722458', 1, NULL, NULL, 1, NULL, 'post', 'sdasdsadadsadsadad', 'onlyme', NULL, '', '2020-11-24 09:58:15', '2020-11-24 09:58:15'),
(134, '16062120832808003', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:01:23', '2020-11-24 10:01:23'),
(135, '16062122243498769', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:03:44', '2020-11-24 10:03:44'),
(136, '16062122403222484', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:04:00', '2020-11-24 10:04:00'),
(137, '16062123265418332', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaa', 'public', NULL, '', '2020-11-24 10:05:26', '2020-11-24 10:05:26'),
(138, '16062123836722082', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:06:23', '2020-11-24 10:06:23'),
(139, '16062125218249011', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:08:41', '2020-11-24 10:08:41'),
(140, '16062125639557145', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:09:23', '2020-11-24 10:09:23'),
(141, '16062125961604786', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:09:56', '2020-11-24 10:09:56'),
(142, '16062126319470540', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:10:31', '2020-11-24 10:10:31'),
(143, '16062127505623964', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:12:30', '2020-11-24 10:12:30'),
(144, '16062127804638778', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:13:00', '2020-11-24 10:13:00'),
(145, '16062127945742952', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:13:14', '2020-11-24 10:13:14'),
(146, '16062128313239988', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-24 10:13:51', '2020-11-24 10:13:51'),
(147, '16062128951005426', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-24 10:14:55', '2020-11-24 10:14:55'),
(148, '16063162833275774', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-25 14:58:03', '2020-11-25 14:58:03'),
(149, '16063657448742403', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:42:24', '2020-11-26 04:42:24'),
(150, '16063659541878226', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:45:54', '2020-11-26 04:45:54'),
(151, '16063660149519805', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:46:54', '2020-11-26 04:46:54'),
(152, '16063662156849103', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:50:15', '2020-11-26 04:50:15'),
(153, '16063662602414701', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:51:00', '2020-11-26 04:51:00'),
(154, '16063662838660095', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:51:23', '2020-11-26 04:51:23'),
(155, '16063663762646863', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 04:52:56', '2020-11-26 04:52:56'),
(156, '16063669339760791', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-26 05:02:13', '2020-11-26 05:02:13'),
(157, '160545008456533255', 23, NULL, NULL, 23, NULL, 'post', 'bài viết trang cá nhân sắp được chia sẻ', 'public', NULL, '', '2020-11-19 07:21:24', '2020-11-15 07:28:45'),
(158, '16064589834417260', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 06:36:23', '2020-11-27 06:36:23'),
(159, '16064677175312109', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:01:57', '2020-11-27 09:01:57'),
(160, '16064679153325394', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:05:15', '2020-11-27 09:05:15'),
(161, '16064688625721219', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:21:02', '2020-11-27 09:21:02'),
(162, '16064689499017743', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:22:29', '2020-11-27 09:22:29'),
(163, '16064690595755716', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:24:19', '2020-11-27 09:24:19'),
(164, '16064691376566117', 1, NULL, NULL, 1, NULL, 'post', 'hôm nay trời đẹp quá🤣 🤣 🤣', 'public', NULL, '', '2020-11-27 09:25:37', '2020-11-27 09:25:37'),
(165, '16064695496902856', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-27 09:32:29', '2020-11-27 09:32:29'),
(166, '16064696026552379', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:33:22', '2020-11-27 09:33:22'),
(167, '16064696173598947', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:33:37', '2020-11-27 09:33:37'),
(168, '16064696461477680', 1, NULL, NULL, 1, NULL, 'post', 'lanlan11', 'public', NULL, '', '2020-11-27 09:34:06', '2020-11-27 09:34:06'),
(169, '16064697351175808', 1, NULL, NULL, 1, NULL, 'post', 'a', 'friend', NULL, '', '2020-11-27 09:35:35', '2020-11-27 09:35:35'),
(170, '16064697477382413', 1, NULL, NULL, 1, NULL, 'post', 'l', 'onlyme', NULL, '', '2020-11-27 09:35:47', '2020-11-27 09:35:47'),
(171, '16064698602763813', 1, NULL, NULL, 1, NULL, 'post', 'a', 'onlyme', NULL, '', '2020-11-27 09:37:40', '2020-11-27 09:37:40'),
(172, '16064699042550408', 1, NULL, NULL, 1, NULL, 'post', 'tets', 'public', NULL, '', '2020-11-27 09:38:24', '2020-11-27 09:38:24'),
(173, '16064700395728986', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:40:39', '2020-11-27 09:40:39'),
(174, '16064701574862899', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 09:42:37', '2020-11-27 09:42:37'),
(175, '16064715036539487', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 10:05:03', '2020-11-27 10:05:03'),
(176, '16064715256476383', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 10:05:25', '2020-11-27 10:05:25'),
(177, '16064716703144211', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:07:50', '2020-11-27 10:07:50'),
(178, '16064717079713122', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 10:08:27', '2020-11-27 10:08:27'),
(179, '16064717588262158', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:09:18', '2020-11-27 10:09:18'),
(180, '16064718021203135', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:10:02', '2020-11-27 10:10:02'),
(181, '16064718171409458', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(182, '16064718461974826', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(183, '16064719985905002', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 10:13:18', '2020-11-27 10:13:18'),
(184, '16064741452123985', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 10:49:05', '2020-11-27 10:49:05'),
(185, '16064741533937328', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 10:49:13', '2020-11-27 10:49:13'),
(186, '16064747334345689', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', ',1', '', '2020-11-27 10:58:53', '2020-11-27 13:35:52'),
(190, '16064843355792288', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-11-27 13:38:55', '2020-11-27 13:38:55'),
(191, '16064843754607390', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 13:39:35', '2020-11-27 13:39:35'),
(192, '16064843986845788', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 13:39:58', '2020-11-27 13:39:58'),
(193, '16064844173519924', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', ',1', '', '2020-11-27 13:40:17', '2020-11-27 13:40:36'),
(194, '16064844407167466', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', ',1', '', '2020-11-27 13:40:40', '2020-11-27 13:40:48'),
(195, '16064844576290044', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 13:40:57', '2020-11-27 13:40:57'),
(196, '16064844806568761', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 13:41:20', '2020-11-27 13:41:20'),
(197, '16064847659635297', 1, NULL, NULL, 1, NULL, 'post', 'a🤣 🤣', 'public', NULL, '', '2020-11-27 13:46:05', '2020-11-27 13:46:05'),
(198, '16064848141319884', 1, NULL, NULL, 1, NULL, 'post', 'TP HCMTrong khi người dân cung cấp tài liệu chứng minh đất nằm ngoài ranh Khu đô thị mới Thủ Thiêm thì Thanh tra Chính phủ cho rằng không đủ cơ sở.\nChiều 27/11, Thanh tra Chính phủ đã có 3 giờ đối thoại với đại diện 50 hộ dân ở 5 khu phố, thuộc 3 phường An Khánh, Bình An và Bình Khánh của quận 2 về ranh quy hoạch Khu đô thị mới Thủ Thiêm. Đây là lần thứ 4, Thanh tra Chính phủ và UBND TP HCM đối thoại với người dân Thủ Thiêm tính từ năm 2016, không kể những lần tiếp xúc của đại biểu Quốc hội và HĐND thành phố với cử tri quận 2.Buổi đối thoại do Phó tổng Thanh tra Chính phủ Đặng Công Huẩn chủ trì. Phía UBND TP HCM có Phó chủ tịch Võ Văn Hoan và các sở ban ngành thành phố. Một số bộ như Xây dựng, Tài nguyên - Môi trường... cử đại diện tham dự.😎 😎 😎 😎 😎 😎 😎 😎', 'public', NULL, '', '2020-11-27 13:46:54', '2020-11-27 13:46:54'),
(199, '16065117361965504', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-27 21:15:36', '2020-11-27 21:15:36'),
(200, '16065118084345697', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-27 21:16:48', '2020-11-27 21:16:48'),
(201, '16065416022129632', 13, NULL, NULL, 13, NULL, 'post', 'wwwwwwwwwwww', 'public', ',13', '', '2020-11-28 05:33:22', '2020-11-28 05:40:40'),
(203, '16065566228347455', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 09:43:42', '2020-11-28 09:43:42'),
(204, '16065568545967735', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 09:47:34', '2020-11-28 09:47:34'),
(206, '16065680342465173', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 12:53:54', '2020-11-28 12:53:54'),
(207, '16065689865065947', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 13:09:46', '2020-11-28 13:09:46'),
(208, '16065690952528137', 1, NULL, NULL, 3, NULL, 'post', 'a', 'public', ',1', '', '2020-11-28 13:11:35', '2020-12-03 07:31:43'),
(209, '16065691462176068', 1, NULL, NULL, 3, NULL, 'post', 'a', 'public', NULL, '01,', '2020-11-28 13:12:26', '2020-12-03 07:30:08'),
(210, '16065691681565617', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 13:12:48', '2020-11-28 13:12:48'),
(211, '16065699196563272', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-28 13:25:19', '2020-11-28 13:25:19'),
(212, '16065704223545201', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-28 13:33:42', '2020-11-28 13:33:42'),
(213, '16066411753849168', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-29 09:12:55', '2020-11-29 09:12:55'),
(214, '16066412553075067', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-29 09:14:15', '2020-11-29 09:14:15'),
(215, '16067149653383250', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 05:42:45', '2020-11-30 05:42:45'),
(216, '16067149818017763', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-30 05:43:01', '2020-11-30 05:43:01'),
(217, '16067155975590014', 1, NULL, NULL, 1, NULL, 'post', 'b', 'public', NULL, '', '2020-11-30 05:53:17', '2020-11-30 05:53:17'),
(218, '16067164585595284', 1, NULL, NULL, 1, NULL, 'post', 'ab', 'public', NULL, '', '2020-11-30 06:07:38', '2020-11-30 06:07:38'),
(219, '16067164649483644', 1, NULL, NULL, 1, NULL, 'post', 'ab', 'public', NULL, '', '2020-11-30 06:07:44', '2020-11-30 06:07:44'),
(220, '16067165052180562', 1, NULL, NULL, 1, NULL, 'post', 'ab', 'public', NULL, '', '2020-11-30 06:08:25', '2020-11-30 06:08:25'),
(221, '16067165708895748', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:09:30', '2020-11-30 06:09:30'),
(222, '16067166373926632', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:10:37', '2020-11-30 06:10:37'),
(223, '16067166567762761', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:10:56', '2020-11-30 06:10:56'),
(224, '16067166716134632', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:11:11', '2020-11-30 06:11:11'),
(225, '16067166792740855', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:11:19', '2020-11-30 06:11:19'),
(226, '16067167694048568', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:12:49', '2020-11-30 06:12:49'),
(227, '16067167913176835', 1, NULL, NULL, 1, NULL, 'post', 'b', 'public', NULL, '', '2020-11-30 06:13:11', '2020-11-30 06:13:11'),
(228, '16067168034191976', 1, NULL, NULL, 1, NULL, 'post', 'àasfsafsafsafsaf', 'public', NULL, '', '2020-11-30 06:13:23', '2020-11-30 06:13:23'),
(229, '16067168872199055', 1, NULL, NULL, 1, NULL, 'post', 'bài viết mới nhất', 'public', NULL, '', '2020-11-30 06:14:47', '2020-11-30 06:14:47'),
(230, '16067172556179715', 1, NULL, NULL, 1, NULL, 'post', 'a1', 'public', NULL, '', '2020-11-30 06:20:55', '2020-11-30 06:20:55'),
(231, '16067173077189873', 1, NULL, NULL, 1, NULL, 'post', 'a2', 'public', NULL, '', '2020-11-30 06:21:47', '2020-11-30 06:21:47'),
(232, '16067173855034237', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:23:05', '2020-11-30 06:23:05'),
(233, '16067176859473520', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:28:05', '2020-11-30 06:28:05'),
(234, '16067177792499073', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:29:39', '2020-11-30 06:29:39'),
(235, '16067180026568022', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:33:22', '2020-11-30 06:33:22'),
(236, '16067180123732200', 1, NULL, NULL, 1, NULL, 'post', 'bàdsadsadsadasd', 'public', NULL, '', '2020-11-30 06:33:32', '2020-11-30 06:33:32'),
(237, '16067180377739365', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaa', 'public', NULL, '', '2020-11-30 06:33:57', '2020-11-30 06:33:57'),
(238, '16067181506798195', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:35:50', '2020-11-30 06:35:50'),
(239, '16067183302875431', 1, NULL, NULL, 1, NULL, 'post', 'em đẹp gái', 'public', NULL, '', '2020-11-30 06:38:50', '2020-11-30 06:38:50'),
(240, '16067184775723223', 1, NULL, NULL, 1, NULL, 'post', 'đăng đi :v', 'public', NULL, '', '2020-11-30 06:41:17', '2020-11-30 06:41:17'),
(241, '16067184984677430', 1, NULL, NULL, 1, NULL, 'post', 'm có chọn tin đéo đau', 'public', NULL, '', '2020-11-30 06:41:38', '2020-11-30 06:41:38'),
(242, '16067185177339620', 1, NULL, NULL, 1, NULL, 'post', 'nhanh v', 'public', NULL, '', '2020-11-30 06:41:57', '2020-11-30 06:41:57'),
(243, '16067185754676190', 1, NULL, NULL, 1, NULL, 'post', 'mượt mà', 'public', NULL, '', '2020-11-30 06:42:55', '2020-11-30 06:42:55'),
(244, '16067186173350339', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-11-30 06:43:37', '2020-11-30 06:43:37'),
(245, '16067377233890938', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-30 12:02:03', '2020-11-30 12:02:03'),
(246, '16067381944780894', 1, NULL, NULL, 1, NULL, 'post', 'A', 'public', NULL, '', '2020-11-30 12:09:54', '2020-11-30 12:09:54'),
(247, '16067382048737366', 1, NULL, NULL, 1, NULL, 'post', 'AAAAAAAAAA', 'public', NULL, '', '2020-11-30 12:10:04', '2020-11-30 12:10:04'),
(248, '16067382122368599', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-11-30 12:10:12', '2020-11-30 12:10:12'),
(252, '16068911826358378', 13, NULL, NULL, 13, NULL, 'post', 'ddddddddđ', 'public', ',1', '', '2020-12-02 06:39:42', '2020-12-04 18:18:25'),
(253, '16069809279961045', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', ',1', '', '2020-12-03 07:35:27', '2020-12-04 07:26:44'),
(254, '16070648897439073', 3, NULL, NULL, 3, NULL, 'post', 'bài viết trang có tag', 'public', ',1', '01,', '2020-12-04 06:54:49', '2020-12-04 08:34:24'),
(255, '16070649181015400', 3, NULL, NULL, 3, NULL, 'post', 'bài viết trang có tag', 'public', ',1', '01,', '2020-12-04 06:55:18', '2020-12-04 08:34:11'),
(258, '16070793798451213', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 10:56:19', '2020-12-04 10:56:19'),
(259, '16070799612579352', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:06:01', '2020-12-04 11:06:01'),
(260, '16070800402049987', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:07:20', '2020-12-04 11:07:20'),
(261, '16070800998799556', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:08:19', '2020-12-04 11:08:19'),
(262, '16070801846992226', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:09:44', '2020-12-04 11:09:44'),
(263, '16070801983834290', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:09:58', '2020-12-04 11:09:58'),
(264, '16070802509824981', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:10:50', '2020-12-04 11:10:50'),
(265, '16070803726196842', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:12:52', '2020-12-04 11:12:52'),
(266, '16070804828981830', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:14:42', '2020-12-04 11:14:42'),
(267, '16070818319955234', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:37:11', '2020-12-04 11:37:11'),
(268, '16070819949789210', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:39:54', '2020-12-04 11:39:54'),
(269, '16070820114812202', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-04 11:40:11', '2020-12-04 11:40:11'),
(270, '16070821356800522', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 11:42:15', '2020-12-04 11:42:15'),
(271, '16070891204183585', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 13:38:40', '2020-12-04 13:38:40'),
(272, '16070891493000482', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 13:39:09', '2020-12-04 13:39:09'),
(273, '16071009968323196', 1, NULL, NULL, 1, NULL, 'post', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'public', NULL, '', '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(274, '16071021247126700', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 17:15:24', '2020-12-04 17:15:24'),
(275, '16071021542259552', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-12-04 17:15:54', '2020-12-04 17:15:54'),
(276, '16071038753040789', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-04 17:44:35', '2020-12-04 17:44:35'),
(277, '16071669003701828', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:15:00', '2020-12-05 11:15:00'),
(278, '16071675273137596', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:25:27', '2020-12-05 11:25:27'),
(279, '16071675595470893', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:25:59', '2020-12-05 11:25:59'),
(280, '16071675988969971', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:26:38', '2020-12-05 11:26:38'),
(281, '16071679381055678', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:32:18', '2020-12-05 11:32:18'),
(282, '16071679567829020', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:32:36', '2020-12-05 11:32:36'),
(283, '16071680286512912', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:33:48', '2020-12-05 11:33:48'),
(284, '16071680793804757', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:34:39', '2020-12-05 11:34:39'),
(285, '16071681927107953', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:36:32', '2020-12-05 11:36:32'),
(286, '16071682092567456', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:36:49', '2020-12-05 11:36:49'),
(287, '16071683688939085', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:39:28', '2020-12-05 11:39:28'),
(288, '16071684866756877', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:41:26', '2020-12-05 11:41:26'),
(289, '16071684981455457', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:41:38', '2020-12-05 11:41:38'),
(290, '16071685287154764', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:42:08', '2020-12-05 11:42:08'),
(291, '16071685406698573', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:42:20', '2020-12-05 11:42:20'),
(292, '16071686757912071', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:44:35', '2020-12-05 11:44:35'),
(293, '16071686892728070', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:44:49', '2020-12-05 11:44:49'),
(294, '16071688253592191', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:47:05', '2020-12-05 11:47:05'),
(295, '16071688826044331', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:48:02', '2020-12-05 11:48:02'),
(296, '16071689075778112', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:48:27', '2020-12-05 11:48:27'),
(297, '16071690459384145', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:50:45', '2020-12-05 11:50:45'),
(298, '16071691269278031', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:52:06', '2020-12-05 11:52:06'),
(299, '16071692047431500', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:53:24', '2020-12-05 11:53:24'),
(300, '16071692699122515', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:54:29', '2020-12-05 11:54:29'),
(301, '16071692878338656', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:54:47', '2020-12-05 11:54:47'),
(302, '16071693786475692', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:56:18', '2020-12-05 11:56:18'),
(303, '16071695069242964', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:58:26', '2020-12-05 11:58:26'),
(304, '16071695231351887', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:58:43', '2020-12-05 11:58:43'),
(305, '16071695359519416', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:58:55', '2020-12-05 11:58:55'),
(306, '16071695474702694', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 11:59:07', '2020-12-05 11:59:07'),
(307, '16071696796889251', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:01:19', '2020-12-05 12:01:19'),
(308, '16071697001929744', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:01:40', '2020-12-05 12:01:40'),
(309, '16071701196743835', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:08:39', '2020-12-05 12:08:39'),
(310, '16071703387487495', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:12:18', '2020-12-05 12:12:18'),
(311, '16071707909363043', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:19:50', '2020-12-05 12:19:50'),
(312, '16071713658996975', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:29:25', '2020-12-05 12:29:25'),
(313, '16071714099254335', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-05 12:30:09', '2020-12-05 12:30:09'),
(314, '16071714349888596', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-12-05 12:30:34', '2020-12-05 12:30:34'),
(315, '16071714736231196', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-12-05 12:31:13', '2020-12-05 12:31:13'),
(316, '16071715195743567', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(317, '16071715375696495', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-12-05 12:32:17', '2020-12-05 12:32:17'),
(318, '16071715705145126', 1, NULL, NULL, 1, NULL, 'post', NULL, 'public', NULL, '', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(319, '16071787947465089', 1, NULL, NULL, 1, 255, 'cover', NULL, 'public', NULL, '', '2020-12-05 14:33:14', '2020-12-05 14:33:14'),
(320, '16072218413721031', 56, NULL, NULL, 56, NULL, 'avatar', NULL, 'public', ',13', '', '2020-12-06 02:30:41', '2020-12-06 05:52:04'),
(321, '16072295385312009', 13, NULL, NULL, 13, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-06 04:38:58', '2020-12-06 04:38:58'),
(323, '16073102366641798', 56, NULL, NULL, 56, NULL, 'post', 'Đây là ảnh của tôi', 'public', NULL, '', '2020-12-07 03:03:56', '2020-12-07 03:03:56'),
(324, '16073111264566077', 13, NULL, NULL, 13, NULL, 'post', 'hôm nay ăn gì', 'public', NULL, '', '2020-12-07 03:18:46', '2020-12-07 03:18:46'),
(325, '16073224872437382', 1, NULL, NULL, 1, NULL, 'post', 'a', 'public', NULL, '', '2020-12-07 06:28:07', '2020-12-07 06:28:07'),
(326, '16073225159706189', 1, NULL, NULL, 1, NULL, 'post', '@a', 'public', NULL, '', '2020-12-07 06:28:35', '2020-12-07 06:28:35'),
(327, '16073227257949776', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 06:32:05', '2020-12-07 06:32:05'),
(328, '16073231289021631', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 06:38:48', '2020-12-07 06:38:48'),
(329, '16073232316627516', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 06:40:31', '2020-12-07 06:40:31'),
(330, '16073232602537213', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-07 06:41:00', '2020-12-07 06:41:00'),
(331, '16073233654897460', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-07 06:42:45', '2020-12-07 06:42:45'),
(332, '16073235156505193', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 06:45:15', '2020-12-07 06:45:15'),
(333, '16073235921892609', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 06:46:32', '2020-12-07 06:46:32'),
(334, '16073246035260898', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 07:03:23', '2020-12-07 07:03:23'),
(335, '16073246414687005', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 07:04:01', '2020-12-07 07:04:01'),
(336, '16073246824301987', 1, NULL, NULL, 1, NULL, 'avatar', NULL, 'public', NULL, '', '2020-12-07 07:04:42', '2020-12-07 07:04:42'),
(337, '16073251595848409', 1, NULL, NULL, 1, NULL, 'post', '😀 😀 😀', 'public', NULL, '', '2020-12-07 07:12:39', '2020-12-07 07:12:39'),
(338, '16073401914874715', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-07 11:23:11', '2020-12-07 11:23:11'),
(339, '16073657678939071', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-07 18:29:27', '2020-12-07 18:29:27'),
(340, '16073657892534548', 1, NULL, NULL, 1, NULL, 'cover', NULL, 'public', NULL, '', '2020-12-07 18:29:49', '2020-12-07 18:29:49');

-- --------------------------------------------------------

--
-- Table structure for table `post_images`
--

CREATE TABLE `post_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_images_PostId` int(10) UNSIGNED NOT NULL,
  `post_images_Url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_images_Type` enum('image','video') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_images`
--

INSERT INTO `post_images` (`id`, `post_images_PostId`, `post_images_Url`, `post_images_Type`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', NULL, NULL),
(144, 50, 'https://tse3.mm.bing.net/th?id=OIP.wvLdHpyLanZboAkKlBSrOwHaE8&pid=Api&P=0&w=253&h=169', 'image', '2020-11-15 07:41:54', '2020-11-15 07:41:54'),
(145, 50, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300https://keomoi.com/wp-content/uploads/2019/05/gai-xinh-mac-bikini-do-hinh-4.jpg', 'image', '2020-11-15 07:41:54', '2020-11-15 07:41:54'),
(152, 30, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:48:33', '2020-11-15 07:48:33'),
(153, 50, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:48:33', '2020-11-15 07:48:33'),
(155, 50, 'https://4.bp.blogspot.com/-Ysmuv2C8kyY/VZYQuYdUBdI/AAAAAAAAc88/c64FcqFvr_4/s1600/hinh-anh-gai-xinh-han-quoc-Choi-Suel-Gi-tao-dang-sexy-4.jpg', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(157, 24, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:53:30', '2020-11-15 07:53:30'),
(158, 1, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', NULL, NULL),
(159, 50, 'https://tse3.mm.bing.net/th?id=OIP.wvLdHpyLanZboAkKlBSrOwHaE8&pid=Api&P=0&w=253&h=169', 'image', '2020-11-15 07:41:54', '2020-11-15 07:41:54'),
(160, 59, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606471994/czmzunrxzsanaqlxdhqm.ogv', 'video', '2020-11-15 07:41:54', '2020-11-15 07:41:54'),
(161, 59, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:48:33', '2020-11-15 07:48:33'),
(163, 59, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(164, 59, 'https://4.bp.blogspot.com/-Ysmuv2C8kyY/VZYQuYdUBdI/AAAAAAAAc88/c64FcqFvr_4/s1600/hinh-anh-gai-xinh-han-quoc-Choi-Suel-Gi-tao-dang-sexy-4.jpg', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(165, 24, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:53:30', '2020-11-15 07:53:30'),
(166, 24, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 05:32:30', '2020-11-15 05:31:30'),
(173, 46, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(174, 45, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(175, 20, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(176, 20, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(177, 20, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(178, 47, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(179, 47, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(180, 47, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(181, 47, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(182, 78, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(183, 78, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(184, 78, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(185, 78, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(186, 78, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(188, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(189, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(190, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(191, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(192, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(193, 82, 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', 'image', '2020-11-15 07:52:33', '2020-11-15 07:52:33'),
(194, 100, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205557/yym56e2pyrppq6e19ac6.png', 'image', '2020-11-24 08:12:40', '2020-11-24 08:12:40'),
(195, 101, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205557/yym56e2pyrppq6e19ac6.png', 'image', '2020-11-24 08:13:27', '2020-11-24 08:13:27'),
(196, 101, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205602/jgbamyqhzjeazwjcmcad.ogv', 'video', '2020-11-24 08:13:27', '2020-11-24 08:13:27'),
(197, 102, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205557/yym56e2pyrppq6e19ac6.png', 'image', '2020-11-24 08:14:21', '2020-11-24 08:14:21'),
(198, 102, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205602/jgbamyqhzjeazwjcmcad.ogv', 'video', '2020-11-24 08:14:21', '2020-11-24 08:14:21'),
(199, 103, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205557/yym56e2pyrppq6e19ac6.png', 'image', '2020-11-24 08:14:48', '2020-11-24 08:14:48'),
(200, 103, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205602/jgbamyqhzjeazwjcmcad.ogv', 'video', '2020-11-24 08:14:48', '2020-11-24 08:14:48'),
(201, 104, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205876/liac9z4pqcuhsggpkf51.png', 'image', '2020-11-24 08:18:19', '2020-11-24 08:18:19'),
(202, 104, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205877/mmetow3fz2tww8oegw4n.ogv', 'video', '2020-11-24 08:18:19', '2020-11-24 08:18:19'),
(203, 105, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205876/liac9z4pqcuhsggpkf51.png', 'image', '2020-11-24 08:19:53', '2020-11-24 08:19:53'),
(204, 105, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205877/mmetow3fz2tww8oegw4n.ogv', 'video', '2020-11-24 08:19:53', '2020-11-24 08:19:53'),
(205, 115, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606207736/nphw27ulxivhczapdmxv.png', 'image', '2020-11-24 08:49:00', '2020-11-24 08:49:00'),
(206, 117, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606209020/osap06gdvkhvnqoogq8f.png', 'image', '2020-11-24 09:10:24', '2020-11-24 09:10:24'),
(207, 133, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606211883/svpm6lxp8cibfh5p1xlg.png', 'image', '2020-11-24 09:58:15', '2020-11-24 09:58:15'),
(208, 133, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606211883/st15bhab2hjs19pnrcia.ogv', 'video', '2020-11-24 09:58:15', '2020-11-24 09:58:15'),
(209, 134, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212078/ufyjuveqfkt9ef7yysim.png', 'image', '2020-11-24 10:01:23', '2020-11-24 10:01:23'),
(210, 135, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212222/mwcbteriikbygacukvla.png', 'image', '2020-11-24 10:03:44', '2020-11-24 10:03:44'),
(211, 136, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212235/hss84vxdl8lg5td19bsi.png', 'image', '2020-11-24 10:04:00', '2020-11-24 10:04:00'),
(212, 137, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212321/kdubhtlmmudghbjoijcf.png', 'image', '2020-11-24 10:05:26', '2020-11-24 10:05:26'),
(213, 138, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212371/tsbvqg2ojrjyssn83m4m.png', 'image', '2020-11-24 10:06:23', '2020-11-24 10:06:23'),
(214, 139, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212516/vatc4nnabhwpgosk2bqx.png', 'image', '2020-11-24 10:08:41', '2020-11-24 10:08:41'),
(215, 140, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212560/franppwkg9gjfd15csvm.png', 'image', '2020-11-24 10:09:23', '2020-11-24 10:09:23'),
(216, 141, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212593/fndlrtob8hafnlqyx694.png', 'image', '2020-11-24 10:09:56', '2020-11-24 10:09:56'),
(217, 142, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212622/nlgmtfbf96l0qgladfi4.png', 'image', '2020-11-24 10:10:31', '2020-11-24 10:10:31'),
(218, 143, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212744/cu9h4btgwhemjhuuhcwd.png', 'image', '2020-11-24 10:12:30', '2020-11-24 10:12:30'),
(219, 144, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212772/g6htw5lxardwjctm5fuv.png', 'image', '2020-11-24 10:13:00', '2020-11-24 10:13:00'),
(220, 144, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212778/u0us5lng619y4vjh8e9b.png', 'image', '2020-11-24 10:13:00', '2020-11-24 10:13:00'),
(221, 145, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212791/lupte5w6nealigdh4eg0.png', 'image', '2020-11-24 10:13:14', '2020-11-24 10:13:14'),
(222, 146, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212828/y0wbjw3ueud0mfavm929.png', 'image', '2020-11-24 10:13:51', '2020-11-24 10:13:51'),
(223, 147, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212887/iwwy33eufxwi1ajzvarw.png', 'image', '2020-11-24 10:14:55', '2020-11-24 10:14:55'),
(224, 147, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606212887/waxhexm7uice7f5rbuv0.png', 'image', '2020-11-24 10:14:55', '2020-11-24 10:14:55'),
(225, 148, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606316214/oji0prst50b1ispwkhxf.png', 'image', '2020-11-25 14:58:03', '2020-11-25 14:58:03'),
(226, 158, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606458975/fyk76yvvzobqgsubnsaq.png', 'image', '2020-11-27 06:36:23', '2020-11-27 06:36:23'),
(227, 164, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469114/to4xf0oo9hxoenrykbaj.png', 'image', '2020-11-27 09:25:37', '2020-11-27 09:25:37'),
(228, 164, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606469116/pq1rowrmazu2ywkc0swy.ogv', 'video', '2020-11-27 09:25:37', '2020-11-27 09:25:37'),
(229, 165, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469527/tkvpkozbixi1nn04nmnd.png', 'image', '2020-11-27 09:32:29', '2020-11-27 09:32:29'),
(230, 165, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469539/plkdoqxlj6g5oj1ue4ay.png', 'image', '2020-11-27 09:32:29', '2020-11-27 09:32:29'),
(231, 167, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469613/z39xqpvk1dzlrqbjvg9f.jpg', 'image', '2020-11-27 09:33:37', '2020-11-27 09:33:37'),
(232, 168, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469644/r6bnpc2gvrm56j5nl1p3.png', 'image', '2020-11-27 09:34:06', '2020-11-27 09:34:06'),
(233, 177, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471667/qlce1t00vwoffag0zqff.png', 'image', '2020-11-27 10:07:50', '2020-11-27 10:07:50'),
(234, 178, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471700/xpm1vdfw3ukz3sb2pqj8.png', 'image', '2020-11-27 10:08:27', '2020-11-27 10:08:27'),
(235, 178, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606471701/ztaailfqmxqo7js46kd7.ogv', 'video', '2020-11-27 10:08:27', '2020-11-27 10:08:27'),
(236, 179, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471755/g85s86zghnsf1rpk2dvx.png', 'image', '2020-11-27 10:09:18', '2020-11-27 10:09:18'),
(237, 179, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471755/aq4umdqxyil17nbmtbkp.png', 'image', '2020-11-27 10:09:18', '2020-11-27 10:09:18'),
(238, 179, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471755/nakhkuhd8uvrurut2rsg.jpg', 'image', '2020-11-27 10:09:18', '2020-11-27 10:09:18'),
(239, 180, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471799/mhmkjk4xcwj6dqtnxrmz.png', 'image', '2020-11-27 10:10:03', '2020-11-27 10:10:03'),
(240, 180, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471799/uxcewtrb0jefguz361wv.jpg', 'image', '2020-11-27 10:10:03', '2020-11-27 10:10:03'),
(241, 180, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471799/krhwmor0cxwgsrrsid0c.png', 'image', '2020-11-27 10:10:03', '2020-11-27 10:10:03'),
(242, 180, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471799/udgvctjjatxh25yfil6a.png', 'image', '2020-11-27 10:10:03', '2020-11-27 10:10:03'),
(243, 181, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471813/rp2epk4rrjtlenyziadr.jpg', 'image', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(244, 181, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471813/i4lc0sdrz6tqnnkxskve.png', 'image', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(245, 181, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471813/oe7mwvs0ijcwfo78w1qb.png', 'image', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(246, 181, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471813/mdfbiejq6j5zsh9diywh.png', 'image', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(247, 181, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471814/ak6mly9zfl4ksxaue7dl.png', 'image', '2020-11-27 10:10:17', '2020-11-27 10:10:17'),
(248, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/ajtng5ochhiuuo7wbu9b.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(249, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/ia15zzrblz4gkinxgqjy.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(250, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/pntqy7g9fkrvx7d0vspd.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(251, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/pwl32ovqywyzpfwwagl3.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(252, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/cltdtf2wqimmrbrdqbgb.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(253, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471842/gajp6s4ogkymrojzxwyj.jpg', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(254, 182, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471844/cmoymrv9tnstzuqbqsp9.webp', 'image', '2020-11-27 10:10:46', '2020-11-27 10:10:46'),
(255, 183, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606471976/enhofbldigeobcw54hrs.jpg', 'image', '2020-11-27 10:13:18', '2020-11-27 10:13:18'),
(256, 183, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606471994/czmzunrxzsanaqlxdhqm.ogv', 'video', '2020-11-27 10:13:18', '2020-11-27 10:13:18'),
(257, 186, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606474728/cdiz3zbui1olzn9vrf6r.png', 'image', '2020-11-27 10:58:53', '2020-11-27 10:58:53'),
(258, 186, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606474729/c775qkfrtcx1ryfkqlnh.ogv', 'video', '2020-11-27 10:58:53', '2020-11-27 10:58:53'),
(259, 190, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606484332/p34qi6h7bqapdvbqimhg.png', 'image', '2020-11-27 13:38:55', '2020-11-27 13:38:55'),
(260, 191, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606484373/qigmzmzq8bb3nbgqq0fe.png', 'image', '2020-11-27 13:39:35', '2020-11-27 13:39:35'),
(261, 195, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606484454/al41c6acgmxwzocvdxur.png', 'image', '2020-11-27 13:40:57', '2020-11-27 13:40:57'),
(262, 196, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606484477/yq1odtf5cgt8jid9qx11.png', 'image', '2020-11-27 13:41:20', '2020-11-27 13:41:20'),
(263, 197, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606484762/vygl0bqda2hxjdf9qxeu.png', 'image', '2020-11-27 13:46:05', '2020-11-27 13:46:05'),
(264, 198, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606484809/mw5r3bfuxsq1xwwbzigh.ogv', 'video', '2020-11-27 13:46:54', '2020-11-27 13:46:54'),
(265, 211, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606569916/fc4e8fthowlmb8395ir2.jpg', 'image', '2020-11-28 13:25:19', '2020-11-28 13:25:19'),
(266, 232, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606717382/ydqzffkqjgcrgfovkdzu.webp', 'image', '2020-11-30 06:23:06', '2020-11-30 06:23:06'),
(267, 239, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606718322/crdvmxdaslu0i1ibzy4p.jpg', 'image', '2020-11-30 06:38:50', '2020-11-30 06:38:50'),
(268, 243, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606718560/n6wh39yvpqviy4qfi46x.jpg', 'image', '2020-11-30 06:42:55', '2020-11-30 06:42:55'),
(269, 245, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606737710/rhalatl038zvugn9i7il.mp4', 'video', '2020-11-30 12:02:03', '2020-11-30 12:02:03'),
(270, 245, 'https://res.cloudinary.com/mohi-vn/video/upload/v1606737716/vojgcismwrylqb6u3xgg.mp4', 'video', '2020-11-30 12:02:03', '2020-11-30 12:02:03'),
(271, 248, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606738210/fiwe9t158fqvk6firw9d.png', 'image', '2020-11-30 12:10:12', '2020-11-30 12:10:12'),
(275, 253, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606980923/kvrke9x2rzkfjad5y4av.jpg', 'image', '2020-12-03 07:35:27', '2020-12-03 07:35:27'),
(276, 258, '123.png', 'image', '2020-12-04 10:56:19', '2020-12-04 10:56:19'),
(277, 259, '456.png', 'image', '2020-12-04 11:06:01', '2020-12-04 11:06:01'),
(278, 260, 'aaaaa.png', 'image', '2020-12-04 11:07:20', '2020-12-04 11:07:20'),
(279, 261, 'aaaaa.png', 'image', '2020-12-04 11:08:19', '2020-12-04 11:08:19'),
(280, 262, 'aaaaa.png', 'image', '2020-12-04 11:09:44', '2020-12-04 11:09:44'),
(281, 263, 'aaaaa.png', 'image', '2020-12-04 11:09:58', '2020-12-04 11:09:58'),
(282, 264, 'aaaaa.png', 'image', '2020-12-04 11:10:50', '2020-12-04 11:10:50'),
(283, 265, 'sp2mlylb66r5rd070xrc', 'image', '2020-12-04 11:12:52', '2020-12-04 11:12:52'),
(284, 266, 'kar3w0qwwji0ep1wlrtl', 'image', '2020-12-04 11:14:42', '2020-12-04 11:14:42'),
(285, 267, 'bbbbbb.png', 'image', '2020-12-04 11:37:11', '2020-12-04 11:37:11'),
(286, 268, 'ddddd.png', 'image', '2020-12-04 11:39:54', '2020-12-04 11:39:54'),
(287, 269, '1232123.png', 'image', '2020-12-04 11:40:11', '2020-12-04 11:40:11'),
(288, 270, 'asngpoixkw8noi7qzpgm', 'image', '2020-12-04 11:42:15', '2020-12-04 11:42:15'),
(289, 271, 'vbefndowdeg6cnkx9qs5', 'image', '2020-12-04 13:38:40', '2020-12-04 13:38:40'),
(290, 272, 'uu1htslvaaztx8limgql', 'image', '2020-12-04 13:39:09', '2020-12-04 13:39:09'),
(291, 273, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100988/aextnr1v5igk9nlhdsdc.png', 'image', '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(292, 273, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100989/nd5wmet6npcyxewkrybr.png', 'image', '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(293, 273, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100989/lz77kaaf69drhrb9qlug.gif', 'image', '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(294, 274, 'xaantfbznoay80qbt2qb', 'image', '2020-12-04 17:15:24', '2020-12-04 17:15:24'),
(295, 275, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607102149/af6bws2gc82isodwzd5p.gif', 'image', '2020-12-04 17:15:54', '2020-12-04 17:15:54'),
(296, 276, 'wbjbfbuebzs12vl0jdmi', 'image', '2020-12-04 17:44:35', '2020-12-04 17:44:35'),
(297, 277, 'de6vhea7512ltzyzyew1', 'image', '2020-12-05 11:15:00', '2020-12-05 11:15:00'),
(298, 278, 'bhn2x9tbxqywmcaoymnc', 'image', '2020-12-05 11:25:27', '2020-12-05 11:25:27'),
(299, 279, 'eftmwi5qpnlmnret1i9t', 'image', '2020-12-05 11:25:59', '2020-12-05 11:25:59'),
(300, 280, 'echnxwdwwriqpimvnx7d', 'image', '2020-12-05 11:26:38', '2020-12-05 11:26:38'),
(301, 281, 'rzcjwtbc2bgjfmlzxnfo', 'image', '2020-12-05 11:32:18', '2020-12-05 11:32:18'),
(302, 282, 'eaxunibz0mv7ftlwhola', 'image', '2020-12-05 11:32:36', '2020-12-05 11:32:36'),
(303, 283, 'jcobbwx4xttgprcdkisq', 'image', '2020-12-05 11:33:48', '2020-12-05 11:33:48'),
(304, 284, 'rpetzaiqzauigfggavru', 'image', '2020-12-05 11:34:39', '2020-12-05 11:34:39'),
(305, 285, 'cjgowngbz44cfdid4bua', 'image', '2020-12-05 11:36:32', '2020-12-05 11:36:32'),
(306, 286, 'rmp0crwqzzvbg7emv2ur', 'image', '2020-12-05 11:36:49', '2020-12-05 11:36:49'),
(307, 287, 'x11w4fbzpmsrhg0qkohc', 'image', '2020-12-05 11:39:28', '2020-12-05 11:39:28'),
(308, 288, 'p7pqzgwasqjbvxcxeguo', 'image', '2020-12-05 11:41:26', '2020-12-05 11:41:26'),
(309, 289, 'lbg1ogwkqb0wver2tkm2', 'image', '2020-12-05 11:41:38', '2020-12-05 11:41:38'),
(310, 290, 'ysvh6mlbwpalpaftaxhp', 'image', '2020-12-05 11:42:08', '2020-12-05 11:42:08'),
(311, 291, 'eduiocu3t3mii7t44zxi', 'image', '2020-12-05 11:42:20', '2020-12-05 11:42:20'),
(312, 292, 'mjlk61maurr4nuiodi0c', 'image', '2020-12-05 11:44:35', '2020-12-05 11:44:35'),
(313, 293, 'tulerd16irejoms1mfne', 'image', '2020-12-05 11:44:49', '2020-12-05 11:44:49'),
(314, 294, 'j2utgius366mtokuartv', 'image', '2020-12-05 11:47:05', '2020-12-05 11:47:05'),
(315, 295, 'mc4uifc8szv7swzlf2e5', 'image', '2020-12-05 11:48:02', '2020-12-05 11:48:02'),
(316, 296, 'ei0imypibrpgt6jodpni', 'image', '2020-12-05 11:48:27', '2020-12-05 11:48:27'),
(317, 297, 'duy8bu16chkwlysotgg9', 'image', '2020-12-05 11:50:45', '2020-12-05 11:50:45'),
(318, 298, 'ksadnkaxi6umv9pqhmdp', 'image', '2020-12-05 11:52:06', '2020-12-05 11:52:06'),
(319, 299, 'hjsqp5lvwvzdh1ln3byi', 'image', '2020-12-05 11:53:24', '2020-12-05 11:53:24'),
(320, 300, 'whj1ymnkp7w1skifsbrw', 'image', '2020-12-05 11:54:29', '2020-12-05 11:54:29'),
(321, 301, 'njchyng7d8bidtpjtmkr', 'image', '2020-12-05 11:54:48', '2020-12-05 11:54:48'),
(322, 302, 'txepxvdc6bvs8yamqbio', 'image', '2020-12-05 11:56:18', '2020-12-05 11:56:18'),
(323, 303, 'u3gvsbn8vbtqqwclyhfz', 'image', '2020-12-05 11:58:26', '2020-12-05 11:58:26'),
(324, 304, 'm0vkkwyyzh8n99yzvsjl', 'image', '2020-12-05 11:58:43', '2020-12-05 11:58:43'),
(325, 305, 'qohyuzvoilky9k4usz19', 'image', '2020-12-05 11:58:55', '2020-12-05 11:58:55'),
(326, 306, 's56wzbm3kay5ca7whuu2', 'image', '2020-12-05 11:59:07', '2020-12-05 11:59:07'),
(327, 307, 's8yrmc3n0wakot4j4paf', 'image', '2020-12-05 12:01:19', '2020-12-05 12:01:19'),
(328, 308, 'yj0wld74yr5vnku0xvo8', 'image', '2020-12-05 12:01:40', '2020-12-05 12:01:40'),
(329, 309, 'kaxr77rvysmqcwkyplnn', 'image', '2020-12-05 12:08:39', '2020-12-05 12:08:39'),
(330, 310, 'lfft3i0ynv1cmx8awhog', 'image', '2020-12-05 12:12:18', '2020-12-05 12:12:18'),
(331, 311, 'ixysa8fdbgnslqil52kx', 'image', '2020-12-05 12:19:50', '2020-12-05 12:19:50'),
(332, 312, 'coqvvonbp5xcsgpk3fvy', 'image', '2020-12-05 12:29:25', '2020-12-05 12:29:25'),
(333, 313, 'mvbuoz04tewg4odvhzwd', 'image', '2020-12-05 12:30:09', '2020-12-05 12:30:09'),
(334, 315, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171466/zvwj6n3adima1iootmfg.jpg', 'image', '2020-12-05 12:31:13', '2020-12-05 12:31:13'),
(335, 316, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171491/pexndxtbgl5shmvfydze.jpg', 'image', '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(336, 316, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171512/iji8uoxyld2dywxftepg.jpg', 'image', '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(337, 316, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171514/rqrzfdhrtjnqgjoeig48.jpg', 'image', '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(338, 317, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171530/umqf0avmwjut40oyrg8o.jpg', 'image', '2020-12-05 12:32:17', '2020-12-05 12:32:17'),
(339, 317, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171531/axbxupiffbq1acp4ud35.jpg', 'image', '2020-12-05 12:32:17', '2020-12-05 12:32:17'),
(340, 317, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171532/jspfuf84z1wuu3wejuhh.jpg', 'image', '2020-12-05 12:32:17', '2020-12-05 12:32:17'),
(341, 318, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171549/iciaxmljskbfr73d3wgk.png', 'image', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(342, 318, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171549/tcguivddcjhbctawvwis.jpg', 'image', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(343, 318, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171550/gmstc7ln6aefcwbhy4m7.jpg', 'image', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(344, 318, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171556/odifszb4smwttrvuy8ax.jpg', 'image', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(345, 318, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171560/qcyhdf2x9jgnl2cimgbo.jpg', 'image', '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(346, 319, 'af6iwt3syqoomhc4yaog', 'image', '2020-12-05 14:33:14', '2020-12-05 14:33:14'),
(347, 320, 'wmpmsieguhlxj6rryzom', 'image', '2020-12-06 02:30:41', '2020-12-06 02:30:41'),
(348, 321, 'uldmmp4eqhwumnocazse', 'image', '2020-12-06 04:38:58', '2020-12-06 04:38:58'),
(349, 323, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607310201/ylcg9evt4v1xorcxt91b.png', 'image', '2020-12-07 03:03:56', '2020-12-07 03:03:56'),
(350, 324, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607311121/xvuyzvtaoe2ufjy1sbsj.jpg', 'image', '2020-12-07 03:18:46', '2020-12-07 03:18:46'),
(351, 327, 'vqbqtnt19adf5i9ueztz', 'image', '2020-12-07 06:32:05', '2020-12-07 06:32:05'),
(352, 328, 'sjo8xknm2el3swqgfyl8', 'image', '2020-12-07 06:38:48', '2020-12-07 06:38:48'),
(353, 329, 'kxp5vsgoufynbasyzvef', 'image', '2020-12-07 06:40:31', '2020-12-07 06:40:31'),
(354, 330, 'nqlmoltxj4sk2jdgilrb', 'image', '2020-12-07 06:41:00', '2020-12-07 06:41:00'),
(355, 331, 'gpksttz7na8urv4gmr3p', 'image', '2020-12-07 06:42:45', '2020-12-07 06:42:45'),
(356, 332, 'igvokdqfneauboxylmlu', 'image', '2020-12-07 06:45:15', '2020-12-07 06:45:15'),
(357, 333, 'hpzi43v4nrhfnswubphc', 'image', '2020-12-07 06:46:32', '2020-12-07 06:46:32'),
(358, 334, 'eyoch8ayfwp5xfqtkplh', 'image', '2020-12-07 07:03:23', '2020-12-07 07:03:23'),
(359, 335, 'yg37dvn9miwl9kdkouyl', 'image', '2020-12-07 07:04:01', '2020-12-07 07:04:01'),
(360, 336, 'hmvv67ojqbsg30bcimg5', 'image', '2020-12-07 07:04:42', '2020-12-07 07:04:42'),
(361, 337, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607325151/zqziwrpketslvfinmayg.jpg', 'image', '2020-12-07 07:12:39', '2020-12-07 07:12:39'),
(362, 338, '1232123.png', 'image', '2020-12-07 11:23:11', '2020-12-07 11:23:11'),
(363, 339, 'wpxjlim0yyg97kbqud7j', 'image', '2020-12-07 18:29:27', '2020-12-07 18:29:27'),
(364, 340, 'l5zuzdhcfswskn6t59cq', 'image', '2020-12-07 18:29:49', '2020-12-07 18:29:49');

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `id` int(11) NOT NULL,
  `story_UserId` int(11) UNSIGNED NOT NULL,
  `story_Content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `story_ImageUrl` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `story_Type` enum('image','video') DEFAULT NULL,
  `story_Privacy` enum('public','onlyme','friend') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'public',
  `story_ReadAt` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `story_UserId`, `story_Content`, `story_ImageUrl`, `story_Type`, `story_Privacy`, `story_ReadAt`, `created_at`, `updated_at`) VALUES
(1, 3, 'Đại gia ngành thép khẳng định làm nông nghiệp \"đến nơi đến chốn\", mục tiêu cuối năm nay sẽ đạt sản lượng 700.000 trứng gà mỗi ngày.\r\n\r\nTập đoàn Hòa Phát (HPG) vừa kỷ niệm 5 năm thành lập Công ty Phát triển nông nghiệp Hòa Phát. Theo lãnh đạo doanh nghiệp này, bò Úc của Hòa Phát đang đứng đầu thị phần cả nước, trứng gà sạch dẫn đầu về sản lượng khu vực phía Bắc với 550.000 quả mỗi ngày.\r\n\r\nHòa Phát dự kiến cung cấp ra thị trường 150.000 con bò Australia, khoảng 250.000 heo thương phẩm và đạt sản lượng 700.000 trứng mỗi ngày vào cuối năm 2020.\r\n\r\n\"5 năm làm nông nghiệp, Hòa Phát chúng ta đã làm được rất nhiều việc. Hiện tại cứ 2 con bò Australia ở Việt Nam thì có một của Hòa Phát. Đây là minh chứng của việc Hòa Phát luôn làm đến nơi đến chốn ở bất cứ ngành nghề nào\", ông Trần Đình Long, Chủ tịch Hòa Phát, nói lại lễ kỷ niệm.\r\n\r\nNăm 2019, doanh thu mảng nông nghiệp đóng góp hơn 8.000 tỷ đồng, gấp 5,5 lần so với năm 2016. Lợi nhuận sau thuế đạt 558 tỷ đồng. 9 tháng đầu năm nay, mảng này bị ảnh hưởng bởi Covid-19 nhưng vẫn mang về gần 8.000 tỷ đồng doanh thu và 1.296 tỷ đồng lợi nhuận sau thuế, gấp gần 3 lần thực hiện cả năm 2019.', NULL, 'image', 'public', NULL, '2020-11-30 02:58:06', '2020-11-29 15:17:37'),
(12, 1, '4', 'https://tse2.mm.bing.net/th?id=OIP.U6pbrevWbaMinSykSxlyvwHaHh&pid=Api&P=0&w=300&h=300', 'image', 'public', NULL, '2020-11-29 17:00:00', '2020-11-29 13:14:04'),
(15, 10, '4', 'https://tse2.mm.bing.net/th?id=OIP.U6pbrevWbaMinSykSxlyvwHaHh&pid=Api&P=0&w=300&h=300', 'image', 'public', NULL, '2020-11-29 08:50:44', '2020-11-29 08:50:44'),
(16, 10, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-26 07:23:00', '2020-11-26 07:23:00'),
(17, 10, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-26 07:23:04', '2020-11-26 07:23:04'),
(18, 3, 'aaaaaaaaaaaaaaa', '9999.kkkk', 'image', 'public', NULL, '2020-11-27 13:41:02', '2020-11-27 13:41:02'),
(19, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-26 06:53:04', '2020-11-26 08:39:24'),
(20, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-08 17:00:00', '2020-11-29 08:40:09'),
(21, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-08 17:00:00', '2020-11-29 08:40:13'),
(22, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 06:53:35', '2020-11-24 06:53:35'),
(23, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 06:53:35', '2020-11-24 06:53:35'),
(24, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 06:54:31', '2020-11-24 06:54:31'),
(25, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 06:54:31', '2020-11-24 06:54:31'),
(26, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 06:55:47', '2020-11-24 06:55:47'),
(27, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 06:55:47', '2020-11-24 06:55:47'),
(28, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 06:56:10', '2020-11-24 06:56:10'),
(29, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 06:56:10', '2020-11-24 06:56:10'),
(30, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 07:02:25', '2020-11-24 07:02:25'),
(31, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 07:02:25', '2020-11-24 07:02:25'),
(34, 10, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-27 07:04:29', '2020-11-27 13:27:11'),
(35, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 07:04:29', '2020-11-24 07:04:29'),
(36, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-26 07:04:34', '2020-11-26 06:22:01'),
(37, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-26 07:04:34', '2020-11-26 06:19:48'),
(38, 3, 'bài viết trang có tag', '9999.kkkk', 'image', 'public', NULL, '2020-11-24 07:05:35', '2020-11-24 07:05:35'),
(39, 3, 'bài viết trang có tag', '1598.png', 'image', 'public', NULL, '2020-11-24 07:05:35', '2020-11-24 07:05:35'),
(40, 3, 'bài viết trang có tag', NULL, 'image', 'public', NULL, '2020-11-24 07:06:49', '2020-11-24 07:06:49'),
(41, 1, 'aaaaaaaaaaaaaaaaa', NULL, 'image', 'public', NULL, '2020-11-24 08:03:54', '2020-11-24 08:03:54'),
(42, 1, 'bài viết có ảnh và video story và post', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205876/liac9z4pqcuhsggpkf51.png', 'image', 'public', NULL, '2020-11-24 08:18:19', '2020-11-24 08:18:19'),
(43, 1, 'bài viết có ảnh và video story và post', 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205877/mmetow3fz2tww8oegw4n.ogv', 'video', 'public', NULL, '2020-11-24 08:18:19', '2020-11-24 08:18:19'),
(44, 1, 'bài viết có ảnh và video story và post', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606205876/liac9z4pqcuhsggpkf51.png', 'image', 'friend', NULL, '2020-11-24 08:19:52', '2020-11-24 08:19:52'),
(45, 1, 'bài viết có ảnh và video story và post', 'https://res.cloudinary.com/mohi-vn/video/upload/v1606205877/mmetow3fz2tww8oegw4n.ogv', 'video', 'friend', NULL, '2020-11-24 08:19:52', '2020-11-24 08:19:52'),
(46, 1, 'nguyễn văn Phước', NULL, 'image', 'public', NULL, '2020-11-24 08:42:19', '2020-11-24 08:42:19'),
(47, 1, 'sdasdsadadsadsadad', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606211883/svpm6lxp8cibfh5p1xlg.png', 'image', 'friend', NULL, '2020-11-24 09:58:15', '2020-11-24 09:58:15'),
(49, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606458975/fyk76yvvzobqgsubnsaq.png', 'image', 'public', NULL, '2020-11-26 06:36:22', '2020-11-27 13:23:55'),
(50, 1, 'hôm nay trời đẹp quá🤣 🤣 🤣', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606469114/to4xf0oo9hxoenrykbaj.png', 'image', 'public', NULL, '2020-11-27 09:25:37', '2020-11-27 09:25:37'),
(51, 1, 'hôm nay trời đẹp quá🤣 🤣 🤣', 'https://res.cloudinary.com/mohi-vn/video/upload/v1606469116/pq1rowrmazu2ywkc0swy.ogv', 'video', 'public', NULL, '2020-11-27 09:25:37', '2020-11-27 09:25:37'),
(53, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:09:42', '2020-11-29 09:09:42'),
(54, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:10:08', '2020-11-29 09:10:08'),
(55, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:10:29', '2020-11-29 09:10:29'),
(56, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:12:00', '2020-11-29 09:12:00'),
(57, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:12:47', '2020-11-29 09:12:47'),
(58, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:14:10', '2020-11-29 09:14:10'),
(59, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:14:23', '2020-11-29 09:14:23'),
(60, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:18:15', '2020-11-29 09:18:15'),
(61, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:29:39', '2020-11-29 09:29:39'),
(62, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-29 09:30:52', '2020-11-29 09:30:52'),
(63, 1, 'b', NULL, 'image', 'public', NULL, '2020-11-29 09:31:00', '2020-11-29 09:31:00'),
(64, 1, 'b', NULL, 'image', 'public', NULL, '2020-11-30 05:53:17', '2020-11-30 05:53:17'),
(65, 1, 'Đây là tin mới', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606716209/kekhqlinh4pd0mvoxisb.jpg', 'image', 'public', NULL, '2020-11-30 06:03:32', '2020-11-30 06:03:32'),
(66, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606716304/ozbbvnndepgbi4zenk4e.jpg', 'image', 'public', NULL, '2020-11-30 06:05:10', '2020-11-30 06:05:10'),
(67, 1, 'ab', NULL, 'image', 'public', NULL, '2020-11-30 06:07:44', '2020-11-30 06:07:44'),
(68, 1, 'ab', NULL, 'image', 'public', NULL, '2020-11-30 06:08:25', '2020-11-30 06:08:25'),
(69, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:09:30', '2020-11-30 06:09:30'),
(70, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:11:19', '2020-11-30 06:11:19'),
(71, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:12:49', '2020-11-30 06:12:49'),
(72, 1, 'àasfsafsafsafsaf', NULL, 'image', 'public', NULL, '2020-11-30 06:13:23', '2020-11-30 06:13:23'),
(73, 1, 'bài viết mới nhất', NULL, 'image', 'public', NULL, '2020-11-30 06:14:47', '2020-11-30 06:14:47'),
(74, 1, 'a1', NULL, 'image', 'public', NULL, '2020-11-30 06:20:55', '2020-11-30 06:20:55'),
(75, 1, 'a2', NULL, 'image', 'public', NULL, '2020-11-30 06:21:47', '2020-11-30 06:21:47'),
(76, 1, 'a', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606717382/ydqzffkqjgcrgfovkdzu.webp', 'image', 'public', NULL, '2020-11-30 06:23:05', '2020-11-30 06:23:05'),
(77, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:28:05', '2020-11-30 06:28:05'),
(78, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:29:39', '2020-11-30 06:29:39'),
(79, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:33:22', '2020-11-30 06:33:22'),
(80, 1, 'bàdsadsadsadasd', NULL, 'image', 'public', NULL, '2020-11-30 06:33:32', '2020-11-30 06:33:32'),
(81, 1, 'aaaaaaaaaa', NULL, 'image', 'public', NULL, '2020-11-30 06:33:57', '2020-11-30 06:33:57'),
(82, 1, 'a', NULL, 'image', 'public', NULL, '2020-11-30 06:35:50', '2020-11-30 06:35:50'),
(83, 1, 'test nào', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606718229/v9xgj3urhtqyrgbjryzz.jpg', 'image', 'public', NULL, '2020-11-30 06:37:13', '2020-11-30 06:37:13'),
(84, 1, 'em đẹp gái', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606718322/crdvmxdaslu0i1ibzy4p.jpg', 'image', 'public', NULL, '2020-11-30 06:38:50', '2020-11-30 06:38:50'),
(85, 1, 'm có chọn tin đéo đau', NULL, 'image', 'public', NULL, '2020-11-30 06:41:38', '2020-11-30 06:41:38'),
(86, 1, 'nhanh v', NULL, 'image', 'public', NULL, '2020-11-30 06:41:57', '2020-11-30 06:41:57'),
(87, 1, 'mượt mà', 'https://res.cloudinary.com/mohi-vn/image/upload/v1606718560/n6wh39yvpqviy4qfi46x.jpg', 'image', 'public', NULL, '2020-11-30 06:42:55', '2020-11-30 06:42:55'),
(88, 1, 'A', NULL, 'image', 'public', NULL, '2020-11-30 12:09:54', '2020-11-30 12:09:54'),
(89, 1, 'a', NULL, 'image', 'public', NULL, '2020-12-01 13:16:35', '2020-12-01 13:16:35'),
(90, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606980923/kvrke9x2rzkfjad5y4av.jpg', 'image', 'public', NULL, '2020-12-03 07:35:27', '2020-12-03 07:35:27'),
(91, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606981055/w4emhqtaqblsw1pmcbea.jpg', 'image', 'public', NULL, '2020-12-03 07:37:38', '2020-12-03 07:37:38'),
(92, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606981069/tomgktwsfk5gdxkjdxgs.jpg', 'image', 'friend', NULL, '2020-12-03 07:37:52', '2020-12-03 07:37:52'),
(93, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1606981179/ex0rvthmmfhhoihh6y4l.png', 'image', 'friend', NULL, '2020-12-03 07:40:03', '2020-12-03 07:40:03'),
(94, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607003825/jvlgmgms74vjleiuiuwz.jpg', 'image', 'public', NULL, '2020-12-03 13:57:08', '2020-12-03 13:57:08'),
(95, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100988/aextnr1v5igk9nlhdsdc.png', 'image', 'public', NULL, '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(96, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100989/nd5wmet6npcyxewkrybr.png', 'image', 'public', NULL, '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(97, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://res.cloudinary.com/mohi-vn/image/upload/v1607100989/lz77kaaf69drhrb9qlug.gif', 'image', 'public', NULL, '2020-12-04 16:56:36', '2020-12-04 16:56:36'),
(98, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171491/pexndxtbgl5shmvfydze.jpg', 'image', 'public', NULL, '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(99, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171512/iji8uoxyld2dywxftepg.jpg', 'image', 'public', NULL, '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(100, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171514/rqrzfdhrtjnqgjoeig48.jpg', 'image', 'public', NULL, '2020-12-05 12:31:59', '2020-12-05 12:31:59'),
(101, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171549/iciaxmljskbfr73d3wgk.png', 'image', 'public', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(102, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171549/tcguivddcjhbctawvwis.jpg', 'image', 'public', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(103, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171550/gmstc7ln6aefcwbhy4m7.jpg', 'image', 'public', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(104, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171556/odifszb4smwttrvuy8ax.jpg', 'image', 'public', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(105, 1, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1607171560/qcyhdf2x9jgnl2cimgbo.jpg', 'image', 'public', NULL, '2020-12-05 12:32:50', '2020-12-05 12:32:50'),
(106, 1, '😀 😀 😀', 'https://res.cloudinary.com/mohi-vn/image/upload/v1607325151/zqziwrpketslvfinmayg.jpg', 'image', 'public', NULL, '2020-12-07 07:12:39', '2020-12-07 07:12:39');

-- --------------------------------------------------------

--
-- Table structure for table `tag_users`
--

CREATE TABLE `tag_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `tag_users_PostId` int(10) UNSIGNED NOT NULL,
  `tag_users_UserId` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_avatar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_avatar_cropX` int(11) DEFAULT NULL,
  `user_avatar_cropY` int(11) DEFAULT NULL,
  `user_avatar_cropW` int(11) DEFAULT NULL,
  `user_avatar_cropH` int(11) DEFAULT NULL,
  `user_cover` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_cover_cropX` int(11) DEFAULT NULL,
  `user_cover_cropY` int(11) DEFAULT NULL,
  `user_last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_nick_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_introduce` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_phone` int(11) DEFAULT NULL,
  `user_birthday` date NOT NULL,
  `user_gender` enum('nam','nữ','orther') COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_isVery` int(11) NOT NULL DEFAULT 0,
  `user_homeTown` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_currentPlace` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_workPlace` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_studyPlace` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_college` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_high_school` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_first_name`, `user_avatar`, `user_avatar_cropX`, `user_avatar_cropY`, `user_avatar_cropW`, `user_avatar_cropH`, `user_cover`, `user_cover_cropX`, `user_cover_cropY`, `user_last_name`, `user_username`, `user_nick_name`, `user_introduce`, `user_email`, `password`, `user_phone`, `user_birthday`, `user_gender`, `user_isVery`, `user_homeTown`, `user_currentPlace`, `user_workPlace`, `user_studyPlace`, `user_college`, `user_high_school`, `user_website`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn', 'hmvv67ojqbsg30bcimg5', 78, 29, 576, 576, 'l5zuzdhcfswskn6t59cq', 0, 181, 'Văn Phước', '100036555227', 'Phước Mười Ngón', 'I am Developer', NULL, '$2y$10$ZpSZ22dNGXo1iB24AtT/5O/isuK9dKmpoIGBwPMzCkNUbrD0sdf4K', 365610561, '1999-05-01', 'nam', 1, NULL, 'Hà Lòng II - K\' Dang - DakDoa - Gia Lai', 'Công ty cổ phần SOCa', 'Nguyễn Huệ', NULL, 'Trần Phú', 'http://bibinstore.xyz', NULL, '2020-11-06 07:01:54', '2020-12-07 18:29:49'),
(3, 'Trần ', 'https://tse3.mm.bing.net/th?id=OIP.LQ6ZW-WpYULaFIWYnDaYfwHaJ4&pid=Api&P=0&w=300&h=300', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Tiến Đạt', '100044641195', NULL, NULL, NULL, '$2y$10$Z3k22n1UK2e478A.uOldd.w3GlwJgRK4KyHv77QwbGl5mculKzBnu', 916193822, '1998-05-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-08 08:09:56', '2020-11-08 08:09:56'),
(4, 'Nguyễn', 'uploads/avatar/profiles/men.png', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100070031072', NULL, NULL, 'phuocnv1a606a@gmail.com', '$2y$10$e.qeIawW1Z0cvIIvIv385.ujJXMvUTdnvM4AJhnxTFZeSPxcPaGr6', NULL, '1999-05-01', 'nam', 0, '', '', 'Fpt', NULL, NULL, NULL, NULL, NULL, '2020-11-08 23:18:12', '2020-11-08 23:18:12'),
(5, 'Hồ Thị', 'https://tse1.mm.bing.net/th?id=OIP.pzKfGGdOJvTygWzdEmC3swHaJ4&pid=Api&P=0&w=300&h=300', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Vân Anh', '100061763182', NULL, NULL, 'phuocnv1a6a06a@gmail.com', '$2y$10$0qL7IX938BQ3cp6CPUj2B.84IU5fSeDlpFTzfOOjM1c9mdVZ/sTO6', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 01:12:58', '2020-11-09 01:12:58'),
(6, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100065537700', NULL, NULL, 'phuocnv1a6aa06a@gmail.com', '$2y$10$9djG5ngYTBxuQxLVFm.tLOVnpY30VmyXH5VR5TXbuxVeuVp.os0hq', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 01:15:30', '2020-11-09 01:15:30'),
(7, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Thị Hồng Phước Phước', '100029765932', NULL, NULL, 'phuocnv1a6aaa06a@gmail.com', '$2y$10$G.isII00Iwfq6BFlygZrt.4znHu9aBj4gJM3HluebZX9ytELYoucK', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 01:17:09', '2020-11-09 01:17:09'),
(8, 'Nguyễn', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"49.5\" stroke=\"background\" stroke-width=\"1\" fill=\"#2196F3\" /><text x=\"50\" y=\"50\" font-size=\"48\" fill=\"#FFFFFF\" alignment-baseline=\"middle\" text-anchor=\"middle\" dominant-baseline=\"central\">NV</text></svg>', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100024009337', NULL, NULL, 'phuocnv1aa6aaa06a@gmail.com', '$2y$10$mOJGFZGLLJzeh2QNh.XJ7OUkyUJ7mDY7wMvdMHCGwqs98qE5JUKtm', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 01:18:42', '2020-11-09 01:18:42'),
(9, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100074209663', NULL, NULL, 'phuocnv1aaa6aaa06a@gmail.com', '$2y$10$ctGxRioiyzCHXQmVnp/idu.ytD2HD5mJGtGfdTDNgu8ky95eMkIhW', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 06:34:01', '2020-11-09 06:34:01'),
(10, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100037064028', NULL, NULL, 'Vũ Lập', '$2y$10$cn4kr/bDGJScP7l.y7Vz5OmlWM.KBtgfboHKg/EIr3z1Twfz5Nz36', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 06:34:38', '2020-11-09 06:34:38'),
(11, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100098018397', NULL, NULL, 'phuocnv@gmail.com', '$2y$10$8baZB7vDz.6kaPXIAD9CIeo14sZsR8GHXLA6QaOodWBJIMzthp3l.', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 06:36:04', '2020-11-09 06:36:04'),
(13, 'Nguyễn', 'uldmmp4eqhwumnocazse', 0, 0, 535, 535, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100036555228', NULL, NULL, 'lap@gmail.com', '$2y$10$B03NA8h4bIb3scgfCZJypO95.uw3wcxxlMHesc.oz6rBTZeb15x12', NULL, '1999-05-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-06 07:01:54', '2020-12-06 04:38:58'),
(14, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100090831814', NULL, NULL, 'phuocnv1066@gmail.com', '$2y$10$ak6DsNYj4SOtoixfGEhKNOlVI6jcx1mz8A.iX6Y65dmhneBAeBsIC', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 05:09:43', '2020-11-10 05:09:43'),
(15, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100083915828', NULL, NULL, 'phuocnv10266@gmail.com', '$2y$10$ydNdl5SWOpQQTbX2Aj6c5.Js2TNFxAcGqGLger258PKegBaqtSemy', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 05:10:26', '2020-11-10 05:10:26'),
(16, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100098153930', NULL, NULL, 'phuocnv102a66@gmail.com', '$2y$10$sfFhlrIQmc.EL4CdE8OnQuhH3jmEbcWsKZ7UAuChWXEFiXxKOEr2u', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 05:11:08', '2020-11-10 05:11:08'),
(17, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100022780672', NULL, NULL, 'phuocnv102a366@gmail.com', '$2y$10$cFvygnQWk6OGwOK4Of0dyOa0c/oaoGZ4.1QDinJbpTkO12td9LSOK', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 05:11:20', '2020-11-10 05:11:20'),
(18, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFQElEQVR4nO2dXWxTZRjH/+26jzowI7INmWHTIcJU/EgUTWPMIEbMuJDAnJeGmDhiIhquvfXGC13UBBfDBdFEvkymEOFC8MIRJBATIBY7UD5GXJgMB7KPdm29mGe2p+c97fl43/c5p8/vrnvPdp4+v/7ft+ft2kby+TwYOsR0F+CU/sQRx4+gXcMbIzJqkUGEckLcNL9SqEoiJUSmgHJQEURCiE4RZnSL0SaEkgQROuQoFxIEEWZUiomqOhEQTBmA2rqVJCSoIqyQnRapQsIkwowsMVKEhFmEGb/FKF1DmPL4mpBqSoYZv5LiW0KqWQbg3/33RUi1yzDwow+ehbCMYrz2w5MQlmGNl764FsIy7HHbH1dCWEZluOmTYyEswxlO+8UXhsSo+MKQk+GdSi4eOSHEqEgIp8MfKukjJ4QYZYVwOvylXD85IcSwFcLpkINdX4VCWIZcRP3lKYsYlkI4HWqw6jMnhBgshBgle1lepqv+D57Cky+22h5z6dwtfNj/s6u///6eBNo6F5f8/PzJcXy684zr2o4fuIK9HyVd1eQHhXtcyhPS+fgSPPPS/apPGxiKhKhazLe8/Qhq63m2NCjsu5auNDU3oOeNTh2nJo+2h+mGvg4sXR7XdXqyaBNSW1+D3ndW6zo9WRaE6LgYfOKFVqx59j7VpyWJ0X/tK2vfjjWI1pB4vyUJlAg5d2JcOLasYxG6t6xQUUYgUCLk11N/4fxJsZRNbz6MxUvqVJRCHiVC4o0x7Ps4iblMTjj+6lurVJRCniggf0GPL4rhxrUp/PjNVeExz/e0oX31vTLLIE9/4kheWUIA4NAXI7g9MWt5TDQaQd97XSrKIY0SIQ3/CZmZymJocER43EOPNWHdy8tVlEQWJULq4/9/6NDwd6O4lrotPHbz9lVVvc+l5J7XNRSf5mubre6m5gZs2rZSdklkUSKktq6m6Pals7dw+oc/hcdv6OtAc9s9sssiiRIhsdrSK/EDn1xAeiYrOD6K3h2l+1y5bPhf6lciJBIpFfL3+CyOfvm78HfWJlrw6LqlRT/LpK2vY8KE1tXz6Fd/YGJsWjj+2rvF+1yZtHWiwoRWIXPpHA5+9ptwvHVFI9b3ti/cTs9wQqRz5tgYUr9MCMd7tq1c2OcSrTlhQrsQANg3kEQuZ71gxxtj2Lx9fp9rdnpOZVlaICFkdOQOfvp2VDj+3Cvz+1wzd6tEiO4PfgSAocEUpu5kLMei0Qhe39kV+ilr1/DGCImEAMDdyQwO774oHH+wqwlPr1+msCI9kBECAMcPXsXY5X+E4y0PNCqsRg+khOSyeewd0PcvnRQg99nvyVM3cXb4BtYmWpSds3trO7q3tpc/0MTQ5yl8v0e82+CGhYRQWNgN9g9cEL7cG1aM/pOasgzGr0/h2P4rusvQAkkhAHB490VM3rR+uTfMkBUyO53F0GBKdxnKKRJCaR0BgBOHruNyclJ3GdIp7Luv76Bi3GH7DipqKQk75n6TXUOqFRZCDEshPG2pwarPnBBiCIVwSuQi6q9tQliKHOz6ylMWMcoK4ZT4S7l+ckKIUZEQTok/8AcpBxDH30HFm4/OcTLDcEKI4VgIryfOcNovVwlhKZXhpk+upyyWYo/b/nhaQ1iKNV764nlRZynFeO2HL8+yWMo8fvTBt6e91S7Fr/vPX9/tEf767pAjJSEGYU6KrClaqhCDMImRvVYqEWIQZDGqnrQoXUOC+kxMZd1KE1JIENKi4wGkTUghlOToTjEJIQY6xegWYUBKiBmZgqgIMENaiBVuJFFtvhX/Ajp16xFd73zTAAAAAElFTkSuQmCC', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Lập', '100092768130', NULL, NULL, 'phuocnv102aa366@gmail.com', '$2y$10$myinVm80SCk040BGyhCaTOJ8tUmFny5SPAcM.50Uhe9C1Fbb9u7yy', NULL, '0001-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 05:19:01', '2020-11-10 05:19:01'),
(19, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100078060279', NULL, NULL, 'phuocnv107@gmail.com', '$2y$10$eXkO7YV2Sw01KMaHIajUWeeT6/UIx5o./LhRYHV6oMFYmQ0cGHvyW', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:32:29', '2020-11-10 08:32:29'),
(20, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100057581192', NULL, NULL, 'phuocnv1062@gmail.com', '$2y$10$ieO8MMTPCKZeeosNxRBtS.dQSveDIPogvAw7N8Htr4mLJGTKr1Hme', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:40:41', '2020-11-10 08:40:41'),
(21, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100098534405', NULL, NULL, 'phuocnv10621@gmail.com', '$2y$10$nZ7RPYCOg2Dl5ohiFz.5U.AtyMwg6sQrqbYAbpCbUnphSPA8NgnUe', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:42:12', '2020-11-10 08:42:12'),
(22, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100024945097', NULL, NULL, 'phuocnv1aa06a@gmail.com', '$2y$10$qjOMVA6A5qUyPNwj7stvkOlvIehJt6wS9bv8lSuAiejttOoSt.fRe', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:47:33', '2020-11-10 08:47:33'),
(23, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100012024957', NULL, NULL, 'phuocnv1062s@gmail.com', '$2y$10$ewC4XJ5/Tcp/2tE4gGppG.qpXqiCF2kyT085XfaZ07zrQoKA9CbAO', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:49:45', '2020-11-10 08:49:45'),
(24, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100097647364', NULL, NULL, 'phuocnv1036@gmail.com', '$2y$10$F3wiRkrqXZKFFziwQW99WeS.V4sNGJf/Xe1VOHxg8SCd/UTL/n.ge', NULL, '2020-01-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:50:34', '2020-11-10 08:50:52'),
(25, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100033622251', NULL, NULL, 'phuocnv10a6@gmail.com', '$2y$10$cyb.IGeJZz98IyMpy5tLuut5B2XSpTTsOWoLZOgInlA.uoC3MgY1y', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 08:59:36', '2020-11-10 08:59:36'),
(26, 'a', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'a', '100075324349', NULL, NULL, 'phuocnv10262@gmail.com', '$2y$10$6QbmQdxNs2tg1PwJGvnvkepMBEG0z5d.LAOwyb1jVe63BET67ZOzi', NULL, '2020-01-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:00:15', '2020-11-10 09:00:47');
INSERT INTO `users` (`id`, `user_first_name`, `user_avatar`, `user_avatar_cropX`, `user_avatar_cropY`, `user_avatar_cropW`, `user_avatar_cropH`, `user_cover`, `user_cover_cropX`, `user_cover_cropY`, `user_last_name`, `user_username`, `user_nick_name`, `user_introduce`, `user_email`, `password`, `user_phone`, `user_birthday`, `user_gender`, `user_isVery`, `user_homeTown`, `user_currentPlace`, `user_workPlace`, `user_studyPlace`, `user_college`, `user_high_school`, `user_website`, `remember_token`, `created_at`, `updated_at`) VALUES
(27, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100055500741', NULL, NULL, 'ppmedia@gmail.com', '$2y$10$.bXBVe4ao7r8MjNv/Q9p6e9VZoVw7E4t0QP/wolNW0UK/bDmXGwQu', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:03:09', '2020-11-10 09:03:09'),
(28, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100059041148', NULL, NULL, 'phuocnv1a06a@gmail.com', '$2y$10$vgVHvQb1GF92oEIDU9EqCOiE9h3tY9w2SJ5HOJJjMHpFBToyiQdGm', NULL, '2020-01-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:06:05', '2020-11-10 10:04:44'),
(29, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100050188962', NULL, NULL, 'phuocnv1aaa06a@gmail.com', '$2y$10$RFIsJiRarG9012VsPMgvO.2dpKcY3LdRzu7L0BSwbO.hmfJ.bgyE.', NULL, '2020-01-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:07:50', '2020-11-10 09:08:02'),
(30, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100094139112', NULL, NULL, 'phuocnv1aaa0s6a@gmail.com', '$2y$10$BEkNafFhPpdA2QvTl8ntpezyLbDeMfFx5FIhkOLSEnP547XfPKfi6', NULL, '2020-01-01', 'nữ', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:08:46', '2020-11-10 09:09:07'),
(31, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100046134862', NULL, NULL, 'phuocnv106a@gmail.com', '$2y$10$8Exqx57pBOqZgkJ/34zUZO4FSUvDyL020rlf7pEcUk8izqlWRpobO', NULL, '2020-01-01', 'nam', 1, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:26:58', '2020-11-10 09:27:21'),
(32, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100055738978', NULL, NULL, 'phuocnv1a0sa6a@gmail.com', '$2y$10$sq/sUzRtq.P9Nl.xeGg1SeH7ixjWFYzIa2l5b4oVpYxT9Ui0AdtSm', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-10 09:30:22', '2020-11-10 09:30:22'),
(33, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100078298868', NULL, NULL, 'phuocnv1206@gmail.com', '$2y$10$5EG02qXmQb8c7pEzoZFH/.mY1aSHONY6ojoxCf4vAPJT90lWNWoZy', NULL, '2020-01-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-11 01:30:07', '2020-11-11 01:30:07'),
(37, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100074209655', NULL, NULL, 'phuocnv1aaa6aasa06a@gmail.com', '$2y$10$ctGxRioiyzCHXQmVnp/idu.ytD2HD5mJGtGfdTDNgu8ky95eMkIhW', NULL, '1999-05-01', 'nam', 0, '', '', '', NULL, NULL, NULL, NULL, NULL, '2020-11-09 06:34:01', '2020-11-09 06:34:01'),
(38, 'Nguyễn Văn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFYElEQVR4nO3dT4ycdR3H8e/Mzm53SltASwSb+geJITRBjInohYMJHgSN0ejFExxMPHnwYmKIZ26QHnrABAKcIVEhgR4UOBCjNCn+SfyDNaRgLUJqu+12dnfm4dCLCcsneZjZ7TzT1yvZ0+5MfnmevPf3/Pk9M72maQrY3qCq6tZjayqBbfSv9gBgngkEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAYXO0BdN2vvzesOw4uTf0+k6apzXHVaFx1YaOpdy41dfZiU2+cm9Rf35vUa2fG9daFZgYjpg2BzIl+r1d7BlV7BlUH9vTq0P4P/s1bFyb14qmt+uXft+rk2cnuD/Ia5BCrQw7t79cDd67Us9/dW898Z1hf+/T0MxeZQDrqrk8s1S++Mawn7l+tm6/rXe3hLCyBdNw9hwf1/Pf31lcPmU12gkAWwA2rvXr8vlWHXDtAIAtiZalXR+9drSMH7dJZsjUXyHC5V0e/vlorJpKZEciC+cz1/frRF1eu9jAWhkB22YWNpt5b/+DP+ubsbgI++IXl2rc8s7e7prlRuMt+fPxy/fbN8ba/61XVLft6deSmft1zeFDfvG1QB/a0v4S7f6VX3/78cj39580pR4sZZI40VfX2WlPHT43roZdH9ZUnL9ZTf9qoSdN+drnvNv/7ZkEgc+zyVtXPX9moh1/daP3aL93cd7I+AwLpgMdObtZLb261es2g36s7b7J7p2ULdsTRP7SfRT53o907LVuwI078Z1LnLrc7F/nkPrt3WrZgh7z+zvZXvz7MDas7NJBriEA65N1L7WaQ4cAq32kJpEPW252n18QDiFMTSId8bNhuRrg4w7vz1yqBdMinDrQL5H8jgUxLIB1xcNir2z/ebnedPi+QaQmkI35wZLn6vXYzyBvnfLDDtATSAZ+9vlc/vKvd8tzRVlN/+a9ApiWQOXf4QK+e/tawhsvtZo/XzoxrUx9Ts+RzTi33rxxW/eTulbquZRxVVb/6R8trwmxLIHNiZenKVao7Di7Vl29Zqvs/4rMgVVceynpOIDMhkF326L2rtfl/K0YG/aq9y1dW387Kk3/crDXPSs2EQHbZ/pWdXf7x77VJHTvRfuUv23OSvkAmTVM//c2oLjm6mhmBLJCHX92oV063W/FLJpAF8cjvR/XYSSces+YcpOPWN5t66OVRPfM3x1U7QSAd9ru3x/Wzly7XP89Zc7VTBNJBr58d17ETG/XCKecbO00gHXH6/KSO/8u3S+02gcyJjXFTo3HV+VFT7643dWbN9xPOA4HssgefW//Qjx5l/rjMC4FAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBL2maerWY2s+EQC2YQaBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAsH7VfwMfqO31W0AAAAASUVORK5CYII=', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Phước', '100086003791', NULL, NULL, 'phuocnv136@gmail.com', '$2y$10$swrUqEaPiIY4fI8PSs/3neiMmt0XPtFJTKd2C1ennfqv.LIoQQD82', NULL, '2020-01-01', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-11-30 13:39:41', '2020-11-30 13:39:50'),
(39, 'Nguyễn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Văn Phước', '100023953675', NULL, NULL, 'phuocnv101231232136@gmail.com', '$2y$10$7ZgqhmaiT4lWWH6rSa5nmuiGxZZbQG60zhRafN60h9wLbq1IpaoOW', NULL, '2020-01-01', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-11-30 13:40:44', '2020-11-30 13:41:02'),
(40, 'ssasaas', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'sssss', '100090289174', NULL, NULL, 'kindkid1118@gmail.com', '$2y$10$NaINvXP0MAKN.iGrAQA4UuH0.s2zVeBA4RavTgChc0u/SszAo11kS', NULL, '1998-05-01', 'nam', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-01 09:30:26', '2020-12-01 09:30:26'),
(41, 'dat', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'dat', '100079080376', NULL, NULL, 'kindkid11222228@gmail.com', '$2y$10$sZt0Pcc9bxZhkfaHCMKMwONzTC21UMthKW6bAMIrlU1yMN7z.fTQK', NULL, '2020-07-15', 'nam', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-01 09:38:13', '2020-12-01 09:38:13'),
(43, 'ssasaas', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'sssss', '100014718379', NULL, NULL, 'kindkid11118@gmail.com', '$2y$10$cIZ9vSMXtGTE1MrfFucQ4e2h3gb8VSHLgh6Y4fP7yCLJ//QOfNivK', NULL, '1998-05-01', 'nam', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-01 09:47:45', '2020-12-01 09:47:45'),
(52, 'Trần Tiến', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'uploads/cover/profiles/default-cover.jpg', 0, 0, 'Đạt', '100039673645', NULL, NULL, 'kindkid12@gmail.com', '$2y$10$yO0qnfae59qXFHfvLcR3F.2vJMjof.HlfQZpvGyBI/er.QSbeaNLa', NULL, '1998-05-01', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-01 12:57:50', '2020-12-04 11:42:48'),
(54, 'Nguyễn Văn', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', 0, 0, 'Văn Phước', '100081118182', NULL, NULL, 'phuocnv101@gmail.com', '$2y$10$lXfTa/TejanxfORRUzSweObu0GU73sxU8MTDGSvQyNlFDG8B2OAfq', NULL, '2020-01-01', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-04 06:18:52', '2020-12-04 06:18:59');
INSERT INTO `users` (`id`, `user_first_name`, `user_avatar`, `user_avatar_cropX`, `user_avatar_cropY`, `user_avatar_cropW`, `user_avatar_cropH`, `user_cover`, `user_cover_cropX`, `user_cover_cropY`, `user_last_name`, `user_username`, `user_nick_name`, `user_introduce`, `user_email`, `password`, `user_phone`, `user_birthday`, `user_gender`, `user_isVery`, `user_homeTown`, `user_currentPlace`, `user_workPlace`, `user_studyPlace`, `user_college`, `user_high_school`, `user_website`, `remember_token`, `created_at`, `updated_at`) VALUES
(55, 'dat', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAIF0lEQVR4nO3dXYhcZx3H8d+87uxLNtmXbHSz2d3UWK2mtsRaFEQUi4KEloYaX9AbkVz0qkpFqSKhFyJBRMSrCl5ILkIJUjSEKInEEMTWCk02ga2tTZPdbJLpzr7MTmZndmbO8UKrItl/kn3OZOY88/3cBELm8GfClzNz5jzPSYRhKAC3lpakxKmLVALcQrLVAwDtjEAAA4EABgIBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGAgEMBAIICBQAADgQAGAgEMBAIYCAQwEAhgIBDAQCCAgUAAA4EABgIBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGAgEMBAIICBQAADgQAGAgEMBAIYCAQwEAhgIBDAQCCAgUAAA4EABgIBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGBIt3qAdpSU1Pjsh5ty7EYYqhKEqgSByo1Q5UagfK2u2Upds9WaZqs1nV+p6LVSRUv1oCkz4M4RyD2WSiTUm0qoN5XUUOZff/cBdd3y315aXdOrxVWdKJR0olDS3Fr9Hk4KiUDa2s7urHZ2Z/XFbZslSedWKjpyY1m/mltUvtZo8XSdIRGGoRKnLoatHqSdNPMjVhRqQahj8yv62UxBZ5bKrR7Ha3xJj6FMMqEnR/r1p4/u1ImHJ/TIplyrR/IWgcTc54f69NdH36dff2i7tqT574wa76gnvv7eLbrw8V3aO9zX6lG8QiAe2d6V0e8emtChXdtaPYo3CMRD35kY1m8e3KGeZKLVo8QegXjqyZF+ndwzSSSOCMRjn9jco2MPTyibIJKNIhDPfWagVy8+ONbqMWKLX9Kb4Pv/uKH5tfV/6U4npJ5UUj2ppEa70hrPZbS7N6cduUxT5nlia7+emxzWj96eb8rxfUYgTXD42rKuVGt3/bqRTEqfHujVvpF+7R3epN5UdCf4gztHdGaxrLPL/PJ+N/iI1UbytYZezBf15QuzGjv7ur775nUVatHcoJhJJnR493bl+NJ+VwikTS3VAx26XND9f35Tv7y6GMkxJ3JZPTe5NZJjdQoCaXML9YYOTM/pKxdmdLPhvj7k2fEhjXc157uOjwgkJo7cKGrva5edI+lOJfXD+ziL3CkCiZHTS2Xtn5pRI3RbnfDVbZs1nElFNJXfCCRmjhdK+rHj5druVFJPjw1GNJHfCCSGDl7K6/WbVadjfHN0IKJp/EYgMVQPpW+/cd3pGDtyGT3a3x3RRP4ikJg6Xijp3ErF6Rj7tvZHNI2/CCTGfjFbcHr941s3RTSJvwgkxo7mi6oGG7/s+0BvF8t0b4N3J8aW6oFOL7rdW8X3EBuBxNzpxZtOrycQG4HE3FnHfbF297FlkIVAYu58ye1K1mST1qD4gkBirtgIdHUDa0/eNU4gJgLxwJXKxgMZyaZZs24gEA9cr258UVUqkeBSr4F3xgN5x1WHPREu7fUN74wHKg23298JZH28Mx6oBG6BsE59fQTigbrjAirHvrxGIB5wPQOUHe7n8h2BeCDn+B2iHMFmEL4iEA+4XqYtO37J9xmBeGDUYRufRhhqqc4DQddDIB4YzW58B9m5al18wFofgcRcOiFNdm/8DOJym0onIJCY+2BPl7qSG/9vJBAbgcTcI44LnqbLbtsH+Y5AYu6xwV6n17+yvBrRJH4ikBhLSnps0O2xz68UCcRCIDH2ucE+bXO4gvVGuaoFLvGaCCTGvjG6xen1f1hw2/ChExBITN3fk9W+EbedEV/KFyOaxl8EElPP3zeilMNS2cVaQ6eXOIPcDoHE0BeG+vSlbZudjnE0X1SdW7Bui0BiZjSb1gsPjDof5+czbvv6dgoCiZGeZEIvPTSu7Y7PGDy1UNIFx+eLdAoCiYkt6aT+uGdSH4tgq9CfXObscac2fhEd98yeTTkd2T2m9/d0OR/r94WSTiyUIpiqMxBIG+tLJfW9iWE9OzHkdEPiu2pBqGf+fi2CyToHgbSh92TTOrB9QE+PDTr9Uv7/fnqloOnyWmTH6wQE0gayiYQ+0telTw30au/wJn1yc48yEW/F8/JyWT9460akx+wEBNIEz4wPrbuMNZdMKJdMqj+d1FhXRuO5jHZ1ZyMP4n8t1hraPzXL7x4bQCBN8K3xoVaP8B/VIND+qRldcdgBvpNxmddjtSDU/qlZnXR8ClUnIxBPVYNAX7s4q9/Or7R6lFjjI5aH3lmr66mpGZ1xfDwbCMQ7U6WKHj93RW+zGUMkCMQTtSDUocvzev7SO1pz3Mwa/0UgHnh5uawD03M6X+IGxKgRSIz9rbiqg5fyOjbPvVXNQiAxUwtCHS+s6IWrizpeIIxmI5AYqAWhXl1Z1dF8UYevLSlfYyeSe4VA2tBqI9B0uaq/LK/q5EJJJxduqsgzPFqCQO6RRhiqEoSqBMG//ww1v1bXXLWuubW65qo1vbW6pvOlqqZvVtlxvU0QyC0EkhKnLrZ6DLQBbjUBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGAgEMBAIICBQAADgQAGAgEMBAIYCAQwEAhgIBDAQCCAgUAAA4EABgIBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGAgEMBAIICBQAADgQAGAgEMBAIYCAQwEAhgIBDAQCCAgUAAA4EABgIBDAQCGAgEMBAIYCAQwEAggIFAAAOBAAYCAQwEAhgIBDAQCGAgEMBAIICBQADDPwHL7PTf19uCRAAAAABJRU5ErkJggg==', NULL, NULL, NULL, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', 0, 0, 'dat', '100028049815', NULL, NULL, 'kindkid12456@gmail.com', '$2y$10$rwM14HN7R0RBKGftb2ccgO62hNSEUf/q4s0cT/GMgK7qSIUL.EXbS', NULL, '2004-10-17', 'nam', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-04 11:41:20', '2020-12-04 11:41:20'),
(56, 'lap', 'wmpmsieguhlxj6rryzom', 0, 119, 391, 391, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', NULL, NULL, 'vu', '100088942511', NULL, NULL, 'lap24062000@gmail.com', '$2y$10$xuGiSfA4rL6k0fh7WKF2hej.NORkMz6rbyIkZPdHTAt7xvimc8aj6', NULL, '2020-01-01', 'nam', 1, NULL, NULL, 'Cao đẳng FPT', NULL, NULL, NULL, NULL, NULL, '2020-12-06 02:27:32', '2020-12-06 02:34:07'),
(57, 'Lập', 'data:image/png;base64,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', NULL, NULL, NULL, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', NULL, NULL, 'Đẹp trai', '100090604939', NULL, NULL, 'it.relaxx.2k@gmail.com', '$2y$10$TR2FRU49YJodfOkGur5I/OTDFPyMovCwMtCn.vJ3zRNr.og5lF5h.', NULL, '2000-06-24', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-06 05:27:30', '2020-12-06 05:28:32'),
(58, 'nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHeUlEQVR4nO3dW4wedR3G8ed999Bt6W5bStlDiy3tvgXLDSCoSDTihTdKokQJIRxMPZRIxQOBxvSiUWMUtFItwcMFMYKEw4U3xoSAIRDCIRAIARbqyxbbAna3sMuu0MOeXi8GNRV4Vub/f9+Z2fl+Ljc7v/xuvtl3dt6ZqTQaDQF4b+2SpIe6qAR4D9WsFwDyjEAAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAg0AAoz3rBfKrIn3qSPrDH69Jxw7EW+d/daySzn5UWrQm/YzJJ6RnPiM1puPttcDwF6SQ2qQP3xEWx9SoNHQJccyDQIpocKe0/JPpj2/MSC9cKk29Gm+nBYpAiqb3cmngqrAZe78vTTwcZ58FjkCKpPscqbY7bMbondKrgTNKhECKomOVtOlOqdqVfsZbz0p7tsTbqQQIpBDakjhCTsqnx6TnvyQ1jsVbqwQIpAgGb5KWnZ/++Mac9OIV0rF98XYqCQLJu94rpYFvhM34+w5p/P44+5QMgeRZjJPyQ3+SDvwszj4lRCB51dErbbpbqnamn3H4RWnP1+LtVEIEkkv/PikfSD9iZlJ6/svS3Nvx1iohAsmj2i+lZeelP74xJ+3ZLB2px9uppAgkb/q+KvUHfiza/1PpjT/H2afkCCRPuj+a/Es3xNi90r4fxtkHBJIbHb3vXCkPOCk/sld64Yp4O4FA8qFNOuPusJPy2cPJlfLZiXhrgUByobZb6vlY2Iy/bZEOD8XZB/9BIFnr/7rUvzlsxiu7pEP3xNkHxyGQLPV8XNqwM2zGmw8m93egKQgkK5394SflR/dLQ5dKakRbC8cjkCxUOpKvkXT2pZ8xdzS5p3zmjXh74V0IJAu13VLPuWEz6t+S3noqzj54XwTSav1bpL6vhM147XfSyG1R1oFHIK209GxpQ+BXzycelV76bpx9MC8CaZXqYun034edlE8dTM47NBtrK8yDQFpl8CZpycb0x89NJXFMj8TbCfMikFY46Qvh5x3D10mTj0VZB/8/Amm2zn6pdkvYjIN/kP7x2zj74AMhkGY77Vap48T0x//zaal+dbx98IEQSDOtuVZacUH646dfl4Yu5gHTGSKQZll6lrRuR9iMV3Y39xUKmBeBNEvt5rB/6UrS6qul9hVx9kEqBNIsnSfHmRF6YRFBCCTvei+Tln866y1Ki0CKoHazVFmU9RalRCBFsHhQWrs96y1KiUCK4pTvSUs2Zb1F6RBIUVTapY1cTW81AimSnnOlAa6qtxKBFM2pP5A6V2e9RWkQSCu9PSTVvx02o22pVPtVnH0wLwJpldd+Iz11XvKt3JHbw2at/Jx00kVx9oJFIM02/br03EXSS9/57ws0h69Lfh5i8BdSW3f4frAIpJnG7pOe/Ig09pfjfz4zHv6wt84+af1PwmZgXgTSLC/vkJ678P1vkR25LXkqYoi+zVLPJ8JmwCKQZhm9Y/7fqW9N7jVPq1KVNt6SPIgOTUEgWTpSlw7cGDZjyenSh7bF2QfvQiBZ239D8jbaEKdcLy0+Lc4+OA6BZK0xnXzUClHtTD5qIToCyYOJh5Mnl4RYdn7yAlBERSB5sXdb+LWR9T9O3nWIaAgkL2bGpeHAk+325dLgrjj7QBKB5MvoH6XxB8JmrPqitPLzcfYBgeROfWvycpwQg7uk6glx9ik5Asmbo8PJv35DLFojnfqjOPuUHIHk0f4bk6/Ghxi4Suo+J84+JUYguTSbfNRqzKUfUam+c4tuW7StyohA8mryEWkk8NrICWckD3tAagSSZ8PbpKnRsBlrt0tdG+LsU0IEkmezE8nNVSGqXcmD55AKgeTdobuk8b+GzVhxgdR7eZx9SoZAiiDGtZH1N0jtK+PsUyIEUgRHX5b2Bd5e23GiNLgzzj4lQiBFceDn4ddGTr5EWvHZOPuUBIEUxqxU/2bYtREpeaZWdXGclUqAQIpk8jHp4K1hM7rWhb8arkQIpGj2bpemDobNWL1VWnpmnH0WOAIpmhjXRirtUu3XkipRVlrICKSIDt0jjd0bNqP7LGn1NXH2WcAIpKjq10izh8NmrNshLVobZ58FqtJoNKSHuhpZLwLkEX9BAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAINAAONfoV07pkY3DAAAAAAASUVORK5CYII=', NULL, NULL, NULL, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', NULL, NULL, 'khuê', '100055060893', NULL, NULL, 'nkhue369@gmail.com', '$2y$10$Q7.Q9YNL35Am5I/kzbRwZ.vN74QnrQBF1KjQmyZBuPOHW.FNwbGHu', NULL, '2001-06-28', 'nữ', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-06 13:51:56', '2020-12-06 13:52:31'),
(60, 'Nguyễn', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJMklEQVR4nO3dW1dU5xnA8WcOHOQgJ0FXSSJWiEBQIEYbSzW2a/Wmt73qZe9y0a/Qy973M/Suq18gazUCi6pJhAECAgaraBMjw/k4zDCnXrhcGgMPs5/97jEZ/r/7V9615M+88+693x3K5/MC4GBREZFPBz6jEuAA4bc9AeCnjEAABYEACgIBFAQCKAgEUBAIoCAQQEEggIJAAAWBAAoCARQEAigIBFAQCKAgEEBBIICCQAAFgQAKAgEUBAIoCARQEAigIBBAQSCAgkAABYEACgIBFAQCKAgEUBAIoCAQQEEggIJAAAWBAAoCARQEAigIBFAQCKAgEEBBIICCQAAFgQAKAgEUBAIoCARQEAigIBBAQSCAgkAABYEACgIBFAQCKAgEUBAIoCAQQEEggIJAAAWBAAoCARQEAigIBFAQCKCIvu0J/JT89R8D0nq+1jT2n3+fk6F/PXU8I+9+/6c2+eNfOk1jv53fkr/9+a7jGf288Qnymtjgonls/yenHc7Erv/mGfPY0c+fO5xJaSCQ14z+2/4L0t7bINV1ZQ5n493JxnJp664zj4/dsv+BKFUE8prlZwn5dn7LNDYcDknv9RbHM/Km/+YZCYdDprELsxuyurjneEY/fwTyBj/LjP5P7MsbF/ws88Z8fHqWMgJ5g59Auq40ScWJiMPZFK6qtkw6+hpMY3O5vIz5+P5VygjkDevxpCzMbpjGRsvC0nOt2fGMCtN7vUUiUdt/5+PpddlcSTmeUWkgkAP4WW7033w7u1l+fu7o53x6HIZADjA2uCi5XN40tudas0Siti/KVhUnItL1UZNpbDaTk/EhAjkMgRxgcyUlj6fXTWMrq6LSffWU4xnpeq41S1mF7bvP/MSabK/vO55R6SCQQ/hZdvTdKO4yy8/yaoxrHyoCOcT40KJkMznT2N7rLRIq0iorEg2ZNwYyaZZXRyGQQ2yv78vDSdsyq6a+XDr6Gh3P6GDdV09JZZXtlrq50VXZ28k4nlFpIRCFn2sifTeKc1X9w9/ZL06Oce/VkQhEMTEcNy+z/Nw0WKhQSOTSgG15lU5lZXIk7nhGpYdAFInttMyNrZrGNrRUytnOk45n9EMXLjdJ9cly09iZL1cktZd1PKPSQyBH8HXRMOBb4P1dHGR5VQgCOcLkSFzSKdtf2qC3e3t/Y/ues5/MytSdJcezKU0EcoRkIiuz91ZMY8+01cjps9WOZ/TCL3vqpb650jR26s6SpFO271bHDYEUwM9y5MOAllksr4qDQArw9X+WZD9pW2b1BrTMsi7f9nYzcv/usuPZlC4CKUA6lZNp4y9VW1ed1DdXOJ3POx210txaZRo7ORKXbMZ2I+ZxRCAF8nNRzfU1ET+7Y7FbLK+8IJACTX+xLMmE7bYM11fVrcHtbu3L7D3bdZ3jikAKlNnPydRt29Zo+yV3J540t1bJL87VmMZODMcll2V55QWBeGA9FigSDTs78cTPvVfsXnlHIB7MfLUiie20aayrE0+s3z+21lIyP77mZA7HCYF4kMvmzTf4dV5u9H3iSX1zhbR12Q6GGx9alDyrK88IxCPrMqWsIuL7xBN/x4ryYJQFgXj0YHRVdjZsz3D7PfHEurxaX0rKoynbw1/HHYF4lM+LjA/blll+TjypriuT9l7bwXAxHqs1IxAD60XDyqqodF2xHc/Td+O0+dxdjhW1IxCD+Yk12Vy1nURo3c2yLs9WnifkydymaSwIxMx6GojlxJPKqoh0XrZ98vDp4Q+BGFkvGtbUl3v+LnFxoEWiZbb/Kg6l9odAjB7f35A14/s0vO5GWZdX8f/tyncPt01j8QKB+GDdHfLyLEe0PCw9H9uun3BriX8E4oN1N6vxzAl59/3CTjz54ONTUl5puwJPIP4RiA9PH2zJ8rOEaWyhy6bLv7Xtej17tC3xp7umsXiFQHyyPoBUyLPq4Yj93F1OTXSDQHyy3uNUyIknXR81SVWt7TkSllduEIhPzx5ty+KTHdPYo76sW3evnsxtysr3vLHWBQJxwHqt4ahHcS8O2B6y4rlzdwjEAety5mxn3aGP4raer5W6Ju+noeRyeZZXDhGIA/Gnu/Ldf7c8jwuHQ4de4+i+aru1ZGFmQzaWeWOtKwTiSMz4KrOuQ0Lo/pXtPYfWW2BwMAJxxLqs6bry4xAi0ZC0X/L+7Ecul+eVao4RiCMr3++Zbiuva6r40XZve2+D6a21DyfXZGuNN9a6RCAOWXeP3ryV/YL11na+nDtHIA6NDS5KLuf96JD3+3/4wk/Lsx/ZTE5ig7xSzTUCcWg9npSFmQ3P4zr6Xn3fiJaH5b0L3l/d9k1szXxmFw5HII6NGXazTjZWSMu7L05rP3+x3vRwFNc+gkEgjsVuPTcts14+ZXj+ovfdq0w6JxPD7F4FgUAc21rbl4eT3o/4fLmte+6Des9jZ75clmSCN9YGgUACYLlo+PKT41y396NFLcs6FIZAAhAbWpRsxttLMk+/Vy3vdNRKTb23956nU1nzecE4GoEEYHczLd/EvC+zfv2HVs9jpu4s88baABFIQMYGve8qWQ6n5uJgsAgkIBPDccmkvf1lb2jx9t7zZCIj01/wxtogEUhA9nYyMntvJdCfMXV7STL7LK+CRCABst4CXyhubQ8egQRociQu6VQw1ycS22mZ+SrYTygQSKBSe9nAviNMjvDG2mIgkIAFtczi3qviIJCAfX17SZKJjNN/c2djXx6Mrjr9N3EwAglYZj8n03fcLrNivLG2aAikCCwXDTVB747hFQIpgvt3l2Vv180ya3M1JfMT3m9jgQ2BFEE2k3d2QyGnJhYXgRSJq19sdq+Ki0CKZPbequxu+TuSZ21xTxZmeGNtMYXy+bx8OvAZeyLAAfgEARQEAigIBFAQCKAgEEBBIICCQAAFgQAKAgEUBAIoCARQEAigIBBAQSCAgkAABYEACgIBFAQCKAgEUBAIoCAQQEEggIJAAAWBAAoCARQEAigIBFAQCKAgEEBBIICCQAAFgQAKAgEUBAIoCARQEAigIBBAQSCAgkAABYEACgIBFAQCKAgEUBAIoCAQQEEggIJAAAWBAAoCARQEAigIBFAQCKAgEEBBIICCQAAFgQAKAgEUBAIoCARQEAigIBBAQSCAgkAAxf8BMU2P2xSRxToAAAAASUVORK5CYII=', NULL, NULL, NULL, NULL, 'https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg', NULL, NULL, 'Văn Phước', '100047174940', NULL, NULL, 'phuocnv106@gmail.com', '$2y$10$9NqeB1X5PdiLS7aLKt.fEeFTNTS9KiqEbP.sMLeUFGoiLo3.pG57q', NULL, '2020-01-01', 'nam', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-07 07:11:48', '2020-12-08 11:11:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actions`
--
ALTER TABLE `actions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actions_actions_userid_foreign` (`actions_UserId`),
  ADD KEY `actions_actions_postid_foreign` (`actions_PostId`);

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_UserId` (`activity_PostFakeId`),
  ADD KEY `activity_UserId_2` (`activity_UserId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_comment_userid_foreign` (`comment_UserId`),
  ADD KEY `comments_comment_postid_foreign` (`comment_PostId`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `follow_users`
--
ALTER TABLE `follow_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `follow_users_ReceivedUser` (`follow_users_ReceivedUser`),
  ADD KEY `follow_users_UserId` (`follow_users_UserId`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `groups_group_fakeid_unique` (`group_FakeId`);

--
-- Indexes for table `group_users`
--
ALTER TABLE `group_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_users_group_users_userid_foreign` (`group_users_UserId`),
  ADD KEY `group_users_group_users_groupid_foreign` (`group_users_GroupId`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_From` (`messages_From`),
  ADD KEY `messages_To` (`messages_To`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_page_fakeid_unique` (`page_FakeId`);

--
-- Indexes for table `page_users`
--
ALTER TABLE `page_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `page_users_page_users_userid_foreign` (`page_users_UserId`),
  ADD KEY `page_users_page_users_pageid_foreign` (`page_users_PageId`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_post_idfake_unique` (`post_IdFake`),
  ADD KEY `posts_post_userid_foreign` (`post_UserId`),
  ADD KEY `posts_post_pageid_foreign` (`post_PageId`),
  ADD KEY `posts_post_groupid_foreign` (`post_GroupId`);

--
-- Indexes for table `post_images`
--
ALTER TABLE `post_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_images_post_images_postid_foreign` (`post_images_PostId`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`id`),
  ADD KEY `story_UserId` (`story_UserId`);

--
-- Indexes for table `tag_users`
--
ALTER TABLE `tag_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tag_users_UserId` (`tag_users_UserId`),
  ADD KEY `tag_users_PostId` (`tag_users_PostId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_username_unique` (`user_username`),
  ADD UNIQUE KEY `users_email_unique` (`user_email`),
  ADD UNIQUE KEY `users_user_phone_unique` (`user_phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actions`
--
ALTER TABLE `actions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `follow_users`
--
ALTER TABLE `follow_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `group_users`
--
ALTER TABLE `group_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `page_users`
--
ALTER TABLE `page_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=341;

--
-- AUTO_INCREMENT for table `post_images`
--
ALTER TABLE `post_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=365;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `tag_users`
--
ALTER TABLE `tag_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actions`
--
ALTER TABLE `actions`
  ADD CONSTRAINT `actions_actions_postid_foreign` FOREIGN KEY (`actions_PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `actions_actions_userid_foreign` FOREIGN KEY (`actions_UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`activity_UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_comment_postid_foreign` FOREIGN KEY (`comment_PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_comment_userid_foreign` FOREIGN KEY (`comment_UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `follow_users`
--
ALTER TABLE `follow_users`
  ADD CONSTRAINT `follow_users_ibfk_1` FOREIGN KEY (`follow_users_ReceivedUser`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `follow_users_ibfk_2` FOREIGN KEY (`follow_users_UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `group_users`
--
ALTER TABLE `group_users`
  ADD CONSTRAINT `group_users_group_users_groupid_foreign` FOREIGN KEY (`group_users_GroupId`) REFERENCES `groups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `group_users_group_users_userid_foreign` FOREIGN KEY (`group_users_UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`messages_From`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`messages_To`) REFERENCES `users` (`id`);

--
-- Constraints for table `page_users`
--
ALTER TABLE `page_users`
  ADD CONSTRAINT `page_users_page_users_pageid_foreign` FOREIGN KEY (`page_users_PageId`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `page_users_page_users_userid_foreign` FOREIGN KEY (`page_users_UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_post_groupid_foreign` FOREIGN KEY (`post_GroupId`) REFERENCES `groups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_post_pageid_foreign` FOREIGN KEY (`post_PageId`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_post_userid_foreign` FOREIGN KEY (`post_UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_images`
--
ALTER TABLE `post_images`
  ADD CONSTRAINT `post_images_post_images_postid_foreign` FOREIGN KEY (`post_images_PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `story`
--
ALTER TABLE `story`
  ADD CONSTRAINT `story_ibfk_1` FOREIGN KEY (`story_UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `tag_users`
--
ALTER TABLE `tag_users`
  ADD CONSTRAINT `tag_users_ibfk_1` FOREIGN KEY (`tag_users_UserId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `tag_users_ibfk_2` FOREIGN KEY (`tag_users_PostId`) REFERENCES `posts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
