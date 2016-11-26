-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2016 a las 22:07:53
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
(103, 57, 9, 2),
(104, 57, 10, 1),
(105, 58, 9, 1),
(106, 58, 10, 1),
(107, 58, 11, 2),
(108, 59, 9, 2),
(109, 59, 10, 1),
(110, 59, 11, 1),
(111, 60, 9, 2),
(112, 60, 10, 1),
(113, 60, 11, 1),
(114, 61, 9, 2),
(115, 61, 10, 1),
(116, 61, 11, 1),
(117, 62, 10, 3),
(118, 63, 10, 2),
(119, 63, 11, 1),
(120, 64, 10, 2),
(121, 64, 9, 1);

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
(1, 'oferta 1', 10, 1),
(1, 'Oferta2', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedidos` int(50) NOT NULL,
  `total_pedido` varchar(50) NOT NULL,
  `id_user` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedidos`, `total_pedido`, `id_user`) VALUES
(57, '32', 25),
(58, '80', 25),
(59, '62', 45),
(60, '62', 45),
(61, '62', 45),
(62, '24', 45),
(63, '46', 42),
(64, '28', 14);

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
  `foto1` varchar(50) NOT NULL,
  `foto2` varchar(50) NOT NULL,
  `foto3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `direccion`, `nombre`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'av cordoba 1122', 'SucA', 'imagenes/Sucursales/foto1.jpg', 'imagenes/Sucursales/foto4.jpg', 'imagenes/Sucursales/foto7.jpg'),
(2, 'dir2', 'suc9', 'imagenes/Sucursales/Foto2.jpg', 'imagenes/Sucursales/foto5.jpg', 'imagenes/Sucursales/foto8.jpg'),
(3, 'av siempre viva 123', 'NoAplica', 'imagenes/Sucursales/foto3.jpg', 'imagenes/Sucursales/foto6.jpg', 'imagenes/Sucursales/foto9.jpg');

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
(10, 'pepe', 'gonzalez', 'calle falsa 222', 'pepe@MAIL.COM', 123456, 'comprador', '123456', 'D', 'NoAplica'),
(11, 'Jose', 'Perez', 'calle falsa 999', 'jose@MAIL.COM', 32224455, 'comprador', '123456', 'H', 'NoAplica'),
(12, 'Maria', 'Diaz', 'calle falsa 222', 'maria@MAIL.COM', 3333333, 'comprador', '123456', 'H', 'suc9'),
(13, 'Eddie', 'vedder', 'calle falsa 332', 'Eddie@MAIL.COM', 4444444, 'vendedor', '123456', 'H', 'suc9'),
(14, 'Dave', 'Grohl', 'calle falsa 557', 'dave@MAIL.COM', 123459, 'vendedor', '123456', 'H', 'SucA'),
(15, 'stone', 'gossard', 'calle falsa 111', 'stone@MAIL.COM', 2222222, 'vendedor', '123456', 'D', 'SucA'),
(19, 'lucasEma', 'casanova', 'calle falsa 123', 'lucasEmanuel@MAIL.COM', 5555555, 'comprador', '123456', 'H', 'NoAplica'),
(20, 'roberto', 'casanova', 'calle falsa 123', 'roberto@MAIL.COM', 123456, 'administrador', '123456', 'H', 'NoAplica'),
(23, 'Mario', 'casanova', 'calle falsa 888', 'Mario@MAIL.COM', 123456, 'comprador', '123456', 'H', 'suc9'),
(24, 'mario', 'casanova', 'calle falsa 123', 'mariomario@MAIL.COM', 123456, 'administrador', '123456', 'D', 'NoAplica'),
(25, 'mariac', 'casanova', 'calle falsa 123', 'mariac@MAIL.COM', 123456, 'administrador', '123456', 'H', 'NoAplica'),
(42, 'Cristina', 'Perez', 'av cordoba 223', 'Cristina@MAIL.COM', 123456, 'encargado', '123456', 'H', 'suc9'),
(43, 'Juana', 'Perez', 'calle falsa 999', 'Juana@MAIL.COM', 123456, 'encargado', '123456', 'D', 'SucA'),
(44, 'Octavio', 'Villegas', 'calle falsa 888', 'Octavio@MAIL.COM', 123456, 'comprador', '123ABC', 'H', 'NoAplica'),
(45, 'pepa', 'Villegas', 'riobamba 123', 'pepa@MAIL.COM', 334455666, 'comprador', '123ABC', 'H', 'NoAplica');

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `det_ped`
--
ALTER TABLE `det_ped`
  MODIFY `Id_Det_Ped` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;
--
-- AUTO_INCREMENT de la tabla `locales`
--
ALTER TABLE `locales`
  MODIFY `id_local` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedidos` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
