-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2016 a las 01:24:51
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `det_logins`
--

CREATE TABLE `det_logins` (
  `id_det_logins` int(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `fechaHS` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `det_logins`
--

INSERT INTO `det_logins` (`id_det_logins`, `mail`, `nombre`, `tipo`, `fechaHS`) VALUES
(1, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-27 18:06:53'),
(2, 'dave@MAIL.COM', 'Dave', 'vendedor', '2016-11-27 18:07:22'),
(3, 'dave@MAIL.COM', 'Dave', 'vendedor', '2016-11-27 18:18:43'),
(4, 'Cristina@MAIL.COM', 'Cristina', 'encargado', '2016-11-27 18:18:47'),
(5, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-27 18:22:54'),
(6, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-27 18:39:50'),
(7, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 00:32:29'),
(8, 'dave@MAIL.COM', 'Dave', 'vendedor', '2016-11-28 03:01:00'),
(9, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 03:02:09'),
(10, 'pepa@MAIL.COM', 'pepa', 'comprador', '2016-11-28 10:43:06'),
(11, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 10:43:59'),
(12, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 11:01:41'),
(13, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 11:24:55'),
(14, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 11:42:03'),
(15, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 11:59:47'),
(16, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 12:27:19'),
(17, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 12:34:47'),
(18, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 12:35:47'),
(19, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 12:54:34'),
(20, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 13:11:43'),
(21, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 13:12:43'),
(22, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 13:48:23'),
(23, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 14:04:07'),
(24, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 14:09:45'),
(25, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 14:30:38'),
(26, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 14:47:40'),
(27, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 15:07:21'),
(28, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 15:24:27'),
(29, 'pepa@MAIL.COM', 'pepa', 'comprador', '2016-11-28 15:39:59'),
(30, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 15:57:14'),
(31, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 16:16:18'),
(32, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 16:43:54'),
(33, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 17:41:50'),
(34, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 18:03:24'),
(35, 'Cristina@MAIL.COM', 'Cristina', 'encargado', '2016-11-28 18:12:06'),
(36, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 18:28:51'),
(37, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 18:52:12'),
(38, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 19:10:25'),
(39, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 19:27:15'),
(40, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 19:44:25'),
(41, 'mariac@MAIL.COM', 'mariac', 'administrador', '2016-11-28 21:10:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `det_ped`
--

CREATE TABLE `det_ped` (
  `Id_Det_Ped` int(50) NOT NULL,
  `id_pedidos` int(50) NOT NULL,
  `id_producto` int(50) NOT NULL,
  `cant` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `det_ped`
--

INSERT INTO `det_ped` (`Id_Det_Ped`, `id_pedidos`, `id_producto`, `cant`) VALUES
(159, 85, 10, 2),
(160, 85, 9, 1),
(161, 86, 9, 2),
(162, 86, 10, 1),
(163, 87, 10, 3),
(164, 88, 10, 2),
(165, 88, 11, 1),
(166, 89, 9, 2),
(167, 89, 10, 1),
(168, 90, 10, 2),
(169, 90, 11, 2),
(170, 91, 9, 1),
(171, 91, 10, 1),
(172, 91, 11, 1),
(173, 92, 9, 1),
(174, 92, 10, 2),
(175, 92, 11, 1),
(176, 93, 10, 1),
(177, 93, 11, 2),
(178, 93, 9, 1),
(179, 94, 10, 1),
(180, 94, 9, 1),
(181, 94, 11, 1),
(182, 95, 9, 2),
(183, 95, 10, 1),
(184, 95, 11, 1),
(185, 96, 10, 2),
(186, 96, 11, 1),
(187, 97, 9, 1),
(188, 97, 10, 1),
(189, 97, 11, 2),
(190, 98, 10, 1),
(191, 98, 9, 1),
(192, 98, 11, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locales`
--

CREATE TABLE `locales` (
  `id_local` int(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `foto1` varchar(50) NOT NULL,
  `foto2` varchar(50) NOT NULL,
  `foto3` varchar(50) NOT NULL,
  `encargado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `id_oferta` int(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` int(50) NOT NULL,
  `id_local` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`id_oferta`, `descripcion`, `precio`, `id_local`) VALUES
(1, 'Desc112', 16, 1),
(2, 'Desc88', 14, 2),
(3, 'Desc884', 55, 2),
(6, 'Desc144', 104, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedidos` int(50) NOT NULL,
  `total_pedido` varchar(50) NOT NULL,
  `id_user` int(50) NOT NULL,
  `fecha` datetime NOT NULL,
  `sucursal` varchar(50) NOT NULL,
  `FechaEntrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedidos`, `total_pedido`, `id_user`, `fecha`, `sucursal`, `FechaEntrega`) VALUES
(85, '28', 25, '2016-11-26 22:21:07', 'SucA', '2016-11-29'),
(86, '32', 45, '2016-11-26 22:34:23', 'SucB', '2016-12-01'),
(87, '24', 14, '2016-11-26 22:34:41', 'SucA', '2016-11-29'),
(88, '47', 25, '2016-11-26 22:42:41', 'SucA', '2016-11-30'),
(89, '32', 14, '2016-11-28 03:01:12', 'SucA', '2016-11-30'),
(90, '78', 14, '2016-11-28 03:01:19', 'SucA', '2016-11-30'),
(91, '51', 14, '2016-11-28 03:01:27', 'SucB', '2016-11-30'),
(92, '59', 14, '2016-11-28 03:01:35', 'SucA', '2016-11-30'),
(93, '82', 14, '2016-11-28 03:01:49', 'SucB', '2016-11-30'),
(94, '51', 45, '2016-11-28 10:43:23', 'SucA', '0000-00-00'),
(95, '63', 25, '2016-11-28 15:27:38', 'SucB', '0000-00-00'),
(96, '47', 45, '2016-11-28 15:42:19', 'SucA', '0000-00-00'),
(97, '82', 25, '2016-11-28 15:57:37', 'SucB', '2016-11-30'),
(98, '51', 25, '2016-11-28 20:00:34', 'SucA', '2016-12-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `descripcion`, `precio`) VALUES
(9, 'ProdC', 12),
(10, 'ProdB', 8),
(11, 'ProdA', 31);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id_sucursal` int(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `foto1` varchar(100) NOT NULL,
  `foto2` varchar(100) NOT NULL,
  `foto3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `direccion`, `nombre`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'Adolfo Alsina 550, Banfield', 'SucA', 'imagenes/Sucursales/foto1.jpg', 'imagenes/Sucursales/foto4.jpg', 'imagenes/Sucursales/foto7.jpg'),
(2, 'Belgrano 201, Lomas de Zamora', 'SucB', 'imagenes/Sucursales/Foto2.jpg', 'imagenes/Sucursales/foto5.jpg', 'imagenes/Sucursales/foto8.jpg'),
(3, 'Anatole France 221, Temperley', 'NoAplica', 'imagenes/Sucursales/foto3.jpg', 'imagenes/Sucursales/foto6.jpg', 'imagenes/Sucursales/foto9.jpg'),
(4, 'Belgrano 1540, Banfield', 'sucursal C', 'imagenes/sucursal C_0.jpg', 'imagenes/sucursal C_1.jpg', 'imagenes/sucursal C_2.jpg'),
(5, 'Belgrano 1100, Banfield', 'sucursalH', 'imagenes/sucursalH_0.jpg', 'imagenes/sucursalH_1.jpg', 'imagenes/sucursalH_2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_user` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `estado` char(1) NOT NULL,
  `sucursal` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_user`, `nombre`, `apellido`, `direccion`, `mail`, `telefono`, `tipo`, `password`, `estado`, `sucursal`) VALUES
(10, 'pepe', 'gonzalez', 'RioBamba 1714,Temperley', 'pepe@MAIL.COM', 123456, 'comprador', '123456', 'D', 'NoAplica'),
(11, 'Jose', 'Perez', 'RioBamba 1714,Temperley', 'jose@MAIL.COM', 32224455, 'comprador', '123456', 'H', 'NoAplica'),
(12, 'Maria', 'Diaz', 'RioBamba 1714,Temperley', 'maria@MAIL.COM', 3333333, 'comprador', '123456', 'H', 'suc9'),
(13, 'Eddie', 'vedder', 'RioBamba 1714,Temperley', 'Eddie@MAIL.COM', 4444444, 'vendedor', '123456', 'H', 'suc9'),
(14, 'Dave', 'Grohl', 'RioBamba 1714,Temperley', 'dave@MAIL.COM', 123459, 'vendedor', '123456', 'H', 'SucA'),
(15, 'stone', 'gossard', 'RioBamba 1714,Temperley', 'stone@MAIL.COM', 2222222, 'vendedor', '123456', 'D', 'SucA'),
(19, 'lucasEma', 'casanova', 'RioBamba 1714,Temperley', 'lucasEmanuel@MAIL.COM', 5555555, 'comprador', '123456', 'H', 'NoAplica'),
(20, 'roberto', 'casanova', 'Belgrano 1260,Banfield', 'roberto@MAIL.COM', 123456, 'administrador', '123456', 'H', 'NoAplica'),
(23, 'Mario', 'casanova', 'RioBamba 1714,Temperley', 'Mario@MAIL.COM', 123456, 'comprador', '123456', 'H', 'suc9'),
(24, 'mario', 'casanova', 'Belgrano 1260,Banfield', 'mariomario@MAIL.COM', 123456, 'administrador', '123456', 'D', 'NoAplica'),
(25, 'mariac', 'casanova', 'Belgrano 1260,Banfield', 'mariac@MAIL.COM', 123456, 'administrador', '123456', 'H', 'NoAplica'),
(42, 'Cristina', 'Perez', 'Cerrito 1717,Temperley', 'Cristina@MAIL.COM', 123456, 'encargado', '123456', 'H', 'suc9'),
(43, 'Juana', 'Perez', 'Cerrito 1717,Temperley', 'Juana@MAIL.COM', 123456, 'encargado', '123456', 'D', 'SucA'),
(44, 'Octavio', 'Villegas', 'RioBamba 1714,Temperley', 'Octavio@MAIL.COM', 123456, 'comprador', '123ABC', 'H', 'NoAplica'),
(45, 'pepa', 'Villegas', 'RioBamba 1714,Temperley', 'pepa@MAIL.COM', 334455666, 'comprador', '123ABC', 'H', 'NoAplica');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `det_logins`
--
ALTER TABLE `det_logins`
  ADD PRIMARY KEY (`id_det_logins`);

--
-- Indices de la tabla `det_ped`
--
ALTER TABLE `det_ped`
  ADD PRIMARY KEY (`Id_Det_Ped`);

--
-- Indices de la tabla `locales`
--
ALTER TABLE `locales`
  ADD PRIMARY KEY (`id_local`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id_oferta`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedidos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id_sucursal`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `det_logins`
--
ALTER TABLE `det_logins`
  MODIFY `id_det_logins` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT de la tabla `det_ped`
--
ALTER TABLE `det_ped`
  MODIFY `Id_Det_Ped` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;
--
-- AUTO_INCREMENT de la tabla `locales`
--
ALTER TABLE `locales`
  MODIFY `id_local` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id_oferta` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedidos` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
