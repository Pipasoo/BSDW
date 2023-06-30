-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-06-2023 a las 18:00:22
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Base de datos: `MySQL`

CREATE TABLE `Administrador` (
  `idAdministrador` INT NOT NULL,
  `nombreAdministrador` VARCHAR(60) NOT NULL,
  `correoAdministrador` VARCHAR(60) NOT NULL,
  `telefonoAdministrador` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`idAdministrador`)
);

CREATE TABLE `Backoffice` (
  `idBackoffice` INT NOT NULL,
  `nombreBackoffice` VARCHAR(60) NOT NULL,
  `correoBackoffice` VARCHAR(60) NOT NULL,
  `telefonoBackoffice` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`idBackoffice`)
);

CREATE TABLE `Cliente` (
  `idCliente` INT NOT NULL,
  `nombreCliente` VARCHAR(60) NOT NULL,
  `correoCliente` VARCHAR(60) NOT NULL,
  `direccionCliente` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idCliente`)
);

CREATE TABLE `Boleta` (
  `idBoleta` INT NOT NULL,
  PRIMARY KEY (`idBoleta`)
);

CREATE TABLE `Medidor` (
  `idMedidor` INT NOT NULL,
  PRIMARY KEY (`idMedidor`)
);

CREATE TABLE `Reportes` (
  `idReporte` INT NOT NULL,
  `reporte` TEXT NOT NULL,
  PRIMARY KEY (`idReporte`)
);

-- Relación Administrador-Backoffice
CREATE TABLE `admin_backoffice` (
  `idAdministrador_fk` INT NOT NULL,
  `idBackoffice_fk` INT NOT NULL,
  FOREIGN KEY (`idAdministrador_fk`) REFERENCES `Administrador` (`idAdministrador`),
  FOREIGN KEY (`idBackoffice_fk`) REFERENCES `Backoffice` (`idBackoffice`)
);

-- Relación Administrador-Boleta
CREATE TABLE `admin_boleta` (
  `idAdministrador_fk` INT NOT NULL,
  `idBoleta_fk` INT NOT NULL,
  FOREIGN KEY (`idAdministrador_fk`) REFERENCES `Administrador` (`idAdministrador`),
  FOREIGN KEY (`idBoleta_fk`) REFERENCES `Boleta` (`idBoleta`)
);

-- Relación Administrador-Reportes
CREATE TABLE `admin_reportes` (
  `idAdministrador_fk` INT NOT NULL,
  `idReportes_fk` INT NOT NULL,
  FOREIGN KEY (`idAdministrador_fk`) REFERENCES `Administrador` (`idAdministrador`),
  FOREIGN KEY (`idReportes_fk`) REFERENCES `Reportes` (`idReporte`)
);

-- Se agregan las fk en las relaciones que son n:1 o 1:n
-- Administrador
ALTER TABLE `Administrador`
ADD FOREIGN KEY (`idCliente_fk`) REFERENCES `Cliente` (`idCliente`);

ALTER TABLE `Administrador`
ADD FOREIGN KEY (`idMedidor_fk`) REFERENCES `Medidor` (`idMedidor`);

-- Backoffice
ALTER TABLE `Backoffice`
ADD FOREIGN KEY (`idBoleta_fk`) REFERENCES `Boleta` (`idBoleta`);

ALTER TABLE `Backoffice`
ADD FOREIGN KEY (`idMedidor_fk`) REFERENCES `Medidor` (`idMedidor`);

ALTER TABLE `Backoffice`
ADD FOREIGN KEY (`idCliente_fk`) REFERENCES `Cliente` (`idCliente`);

ALTER TABLE `Backoffice`
ADD FOREIGN KEY (`idReportes_fk`) REFERENCES `Reportes` (`idReporte`);

-- Cliente
ALTER TABLE `Cliente`
ADD FOREIGN KEY (`idMedidor`) REFERENCES `Medidor` (`idMedidor`);

ALTER TABLE `Cliente`
ADD FOREIGN KEY (`idBoleta`) REFERENCES `Boleta` (`idBoleta`);

-- Medidor
ALTER TABLE `Medidor`
ADD FOREIGN KEY (`idBoleta`) REFERENCES `Boleta` (`idBoleta`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
