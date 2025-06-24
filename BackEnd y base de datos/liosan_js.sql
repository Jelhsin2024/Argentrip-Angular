-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2025 a las 16:50:05
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `liosan_js`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(255) NOT NULL,
  `nombreID` int(100) DEFAULT NULL,
  `puntuacion` varchar(5) DEFAULT NULL,
  `comentario` varchar(255) DEFAULT NULL,
  `respuesta` varchar(255) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `nombreID`, `puntuacion`, `comentario`, `respuesta`, `nombre`, `fecha_creacion`) VALUES
(30, 432, '5', 're buena la pagina', 'gracias por tu comentario', 'PRUEBA', '2025-06-22 23:07:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `celular` int(10) NOT NULL,
  `celular2` int(10) NOT NULL,
  `whatsapp` varchar(15) NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `direccionMaps` varchar(300) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `celular`, `celular2`, `whatsapp`, `direccion`, `descripcion`, `direccionMaps`, `activo`) VALUES
(8, 1139283241, 1139283241, '1139283241', 'Av. Córdoba 690', 'Somos una empresa con más de 35 años nuestro staff cuenta con profesionales altamente especializados en turismo, administración de empresas, economía, comunicación, cada uno brinda a los pasajeros el mejor servicio con la mayor rapidez y calidad posible.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.0517982760056!2d-58.377318130343056!3d-34.59892189830978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbe190951961%3A0xac35df85f7821def!2sLibertador%20Hotel!5e0!3m2!1ses-419!2sar!4v1747962105818!5m2!1ses-419!2sar', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(255) NOT NULL,
  `n_mesa` int(255) NOT NULL,
  `n_platillo` varchar(255) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `medio_pago` varchar(255) NOT NULL,
  `totalPago` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

CREATE TABLE `platillos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `tipo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `platillos`
--

INSERT INTO `platillos` (`id`, `nombre`, `descripcion`, `precio`, `foto`, `tipo`) VALUES
(46, 'BARILOCHE SAN MARTIN - 3 NOCHES', 'Pasaje aéreo traslados de llegada y salida, c/desayuno, excursiones Circuito Chico y Cerro Catedral sin ascenso.', '580.000', 'uploads/1747958876083.jpg', 'Paquetes'),
(47, 'CALAFATE - 3 NOCHES', 'Pasaje aéreo, traslados de llegada y salida, alojamiento c/desayuno, excursión Glaciar Perito Moreno.', '480.000', 'uploads/1747959225121.jpg', 'Paquetes'),
(48, 'JUJUY - 3 NOCHES', 'Pasaje aéreo, traslados de llegada y salida, alojamiento c/desayuno, excursión Quebrada de Humahuaca.', '680.000', 'uploads/1747959513801.jpg', 'Paquetes'),
(50, 'Vuelos a San Carlos de Bariloche', 'Saliendo desde Buenos Aires Por Aerolíneas Argentinas Ida y Vuelta.', '92.253', 'uploads/1748046944272.webp', 'Alojamiento'),
(51, 'Vuelos a Mendoza', 'Saliendo desde Buenos Aires Ida y Vuelta', '72.280', 'uploads/1748047173502.webp', 'Alojamiento'),
(52, 'Vuelos a Córdoba', 'Saliendo desde Buenos Aires Por Aerolíneas Argentinas Ida y Vuelta', '54.145', 'uploads/1748047303250.webp', 'Alojamiento'),
(53, 'Vuelos a Salta', 'Saliendo desde Buenos Aires Por Aerolíneas Argentinas Ida y Vuelta.', '76235', 'uploads/1748047628667.webp', 'Alojamiento'),
(54, 'Vuelos a Ushuaia', 'Saliendo desde Buenos Aires Por Aerolíneas Argentinas Ida y Vuelta.', '130633', 'uploads/1748047781876.webp', 'Alojamiento'),
(56, 'Alma Del Lago Suites', 'A 1,11km del centro Estadía en San Carlos de Bariloche, 1 noche 2 Personas desde:', '195983', 'uploads/1748048501766.webp', 'Vuelos'),
(57, 'Hotel Saint George', 'A 421m del centro Estadía en Puerto Iguazú 1 noche, 2 personas desde:', '144016', 'uploads/1748048580048.webp', 'Vuelos'),
(58, 'Hotel Denver', 'A 886m del centro, Estadía en Mar del Plata 1 noche, 2 personas desde:', '99895', 'uploads/1748048689086.webp', 'Vuelos'),
(59, 'Premium Tower Suites', 'A 228m del centro, Estadía en Mendoza, 1 noche, dos personas desde:', '179293', 'uploads/1748048844739.webp', 'Vuelos'),
(60, 'Wish Foz do Iguaçu', 'A 7,72km del Centro Estadía en Foz de Iguazú, 1 noche 2 personas desde:', '181316', 'uploads/1748048977299.webp', 'Vuelos'),
(211, 'vinito piola', 'te re pega wachin!', '5', 'uploads/1748464986511.jpg', 'Ofertas'),
(212, 'd', 'asdAS', '21131', 'uploads/1748465293937.jpg', 'Autos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `celular` int(10) NOT NULL,
  `rol` varchar(30) NOT NULL,
  `localidad` varchar(30) NOT NULL,
  `imagen_usuario` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre`, `apellido`, `direccion`, `celular`, `rol`, `localidad`, `imagen_usuario`, `fecha_creacion`) VALUES
(385, 'omarjelhsin@gmail.com', '$2a$08$WxDQOembUwJJuF69rJTpqOf0PyyTFIwTrabalgSspjqghat9DXI/G', 'Omar Jelhsin', 'Quispe Ccahuana', 'En mi casa', 11392822, 'Administrador', 'Wilde', '1748460829525.jpg', '2024-11-04 13:19:29'),
(431, 'admin@prueba.com', '$2a$08$tk8qQ.j025sAECniqIX3x.nt5e0cTjW7a9V0HunmXF53NP0JAE9eG', 'Omar', 'Aprueba', 'Dirección Prueba', 1122335544, 'Cliente', 'Sarandí', '1748644994065.jpg', '2025-05-28 20:04:11'),
(432, 'prueba@prueba.com', '$2a$08$a2VnJJwhUms83i9wlmPxw.ne4tH3AiIg//.fPLzlq6ALgC5qG9GNu', 'PRUEBA', 'Macutela', 'En mi casa', 3, 'Cliente', 'Wilde', '1750633610825.jpg', '2025-06-22 23:06:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videoportadas`
--

CREATE TABLE `videoportadas` (
  `id` int(11) NOT NULL,
  `nombre_videoPortada` varchar(50) NOT NULL,
  `tipo_videoPortada` varchar(50) NOT NULL,
  `descripcion_videoPortada` varchar(255) NOT NULL,
  `file_videoPortada` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videoportadas`
--

INSERT INTO `videoportadas` (`id`, `nombre_videoPortada`, `tipo_videoPortada`, `descripcion_videoPortada`, `file_videoPortada`) VALUES
(5, 'NombreVideo', 'Vuelos Portada', 'DescripcionVideo', '1748048284532.mp4'),
(9, 'Prueba', 'Alojamiento Portada', 'DescripcionVideo', '1748049478512.mp4'),
(15, 'Uno muy bueno', 'Paquetes Portada', 'La mejor jejeje', '1748046701583.mp4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videoportadas`
--
ALTER TABLE `videoportadas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `platillos`
--
ALTER TABLE `platillos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=433;

--
-- AUTO_INCREMENT de la tabla `videoportadas`
--
ALTER TABLE `videoportadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
