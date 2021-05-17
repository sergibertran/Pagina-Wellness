-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: oracle.ilerna.com    Database: daw2_jamsweb
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.15-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendario`
--

DROP TABLE IF EXISTS `calendario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendario` (
  `idCalendario` int(11) NOT NULL AUTO_INCREMENT,
  `idDieta` int(11) DEFAULT NULL,
  `idRutina` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `comentarios` varchar(200) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `idDia` varchar(100) DEFAULT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idCalendario`),
  KEY `calendario_FK` (`idUsuario`),
  KEY `calendario_FK_1` (`idDieta`),
  KEY `calendario_FK_2` (`idRutina`),
  CONSTRAINT `calendario_FK` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`),
  CONSTRAINT `calendario_FK_1` FOREIGN KEY (`idDieta`) REFERENCES `dieta` (`idDieta`),
  CONSTRAINT `calendario_FK_2` FOREIGN KEY (`idRutina`) REFERENCES `rutina` (`idRutina`)
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario`
--

LOCK TABLES `calendario` WRITE;
/*!40000 ALTER TABLE `calendario` DISABLE KEYS */;
INSERT INTO `calendario` VALUES (366,27,NULL,44,'Dieta','2021-05-18','2',NULL),(367,27,NULL,44,'Dieta','2021-05-19','3',NULL);
/*!40000 ALTER TABLE `calendario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias`
--

DROP TABLE IF EXISTS `dias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dias` (
  `idDiaDieta` int(11) NOT NULL AUTO_INCREMENT,
  `numDiaDieta` int(11) DEFAULT 1,
  `idDIeta` int(11) DEFAULT NULL,
  `Desayuno` varchar(500) DEFAULT NULL,
  `Desayuno2` varchar(500) DEFAULT NULL,
  `Comida` varchar(500) DEFAULT NULL,
  `Merienda` varchar(500) DEFAULT NULL,
  `Merienda2` varchar(500) DEFAULT NULL,
  `Cena` varchar(250) DEFAULT NULL,
  `Comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idDiaDieta`),
  KEY `dias_FK` (`idDIeta`),
  CONSTRAINT `dias_FK` FOREIGN KEY (`idDIeta`) REFERENCES `dieta` (`idDieta`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias`
--

LOCK TABLES `dias` WRITE;
/*!40000 ALTER TABLE `dias` DISABLE KEYS */;
INSERT INTO `dias` VALUES (81,1,27,'sanca the boss','','','','','',''),(82,2,27,'','','','','','',''),(83,3,27,'','','','','','',''),(84,4,27,'','','','','','',''),(85,5,27,'','','','','','',''),(86,6,27,'','','','','','',''),(87,7,27,'','','','','','','');
/*!40000 ALTER TABLE `dias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias_rutinas`
--

DROP TABLE IF EXISTS `dias_rutinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dias_rutinas` (
  `idDiaRutina` int(11) NOT NULL AUTO_INCREMENT,
  `numDiaRutina` int(11) DEFAULT 1,
  `idRutina` int(11) DEFAULT NULL,
  `Titulo` varchar(100) DEFAULT NULL,
  `Ejercicio` varchar(500) DEFAULT NULL,
  `Ejercicio2` varchar(500) DEFAULT NULL,
  `Ejercicio3` varchar(500) DEFAULT NULL,
  `Ejercicio4` varchar(500) DEFAULT NULL,
  `Ejercicio5` varchar(500) DEFAULT NULL,
  `Ejercicio6` varchar(500) DEFAULT NULL,
  `Comentarios` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idDiaRutina`),
  KEY `dias_rutinas_FK` (`idRutina`),
  CONSTRAINT `dias_rutinas_FK` FOREIGN KEY (`idRutina`) REFERENCES `rutina` (`idRutina`)
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias_rutinas`
--

LOCK TABLES `dias_rutinas` WRITE;
/*!40000 ALTER TABLE `dias_rutinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `dias_rutinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dieta`
--

DROP TABLE IF EXISTS `dieta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dieta` (
  `idDieta` int(11) NOT NULL AUTO_INCREMENT,
  `TipoDieta` varchar(20) DEFAULT NULL,
  `NDieta` varchar(40) DEFAULT NULL,
  `Premium` int(11) DEFAULT NULL,
  `Imagen` blob DEFAULT NULL,
  PRIMARY KEY (`idDieta`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieta`
--

LOCK TABLES `dieta` WRITE;
/*!40000 ALTER TABLE `dieta` DISABLE KEYS */;
INSERT INTO `dieta` VALUES (27,'Fuerza','Sanca',0,'https://pbs.twimg.com/profile_images/1246540868443688961/TkX8D-k3_400x400.jpg');
/*!40000 ALTER TABLE `dieta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuesta`
--

DROP TABLE IF EXISTS `encuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encuesta` (
  `idEncuesta` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Apellidos` varchar(100) DEFAULT NULL,
  `Sexo` varchar(100) DEFAULT NULL,
  `Edad` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Antecedentes` varchar(100) DEFAULT NULL,
  `FamBio` varchar(100) DEFAULT NULL,
  `Peso` varchar(100) DEFAULT NULL,
  `Altura` varchar(100) DEFAULT NULL,
  `Cintura` varchar(100) DEFAULT NULL,
  `Cadera` varchar(100) DEFAULT NULL,
  `Intolerancia` varchar(100) DEFAULT NULL,
  `IntoleranciaEx` varchar(100) DEFAULT NULL,
  `Dieta` varchar(100) DEFAULT NULL,
  `DietaEx` varchar(100) DEFAULT NULL,
  `Lacteos` varchar(100) DEFAULT NULL,
  `Huevos` varchar(100) DEFAULT NULL,
  `Fruta` varchar(100) DEFAULT NULL,
  `Legumbres` varchar(100) DEFAULT NULL,
  `Carne` varchar(100) DEFAULT NULL,
  `CarneProcesada` varchar(100) DEFAULT NULL,
  `Pescado` varchar(100) DEFAULT NULL,
  `Bolleria` varchar(100) DEFAULT NULL,
  `AlimentosProcesados` varchar(100) DEFAULT NULL,
  `ComidaRapida` varchar(100) DEFAULT NULL,
  `BebidasAzucarada` varchar(100) DEFAULT NULL,
  `BebidasAlcoholicas` varchar(100) DEFAULT NULL,
  `AlimentoExeso` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idEncuesta`),
  KEY `encuesta_FK` (`idUsuario`),
  CONSTRAINT `encuesta_FK` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuesta`
--

LOCK TABLES `encuesta` WRITE;
/*!40000 ALTER TABLE `encuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `encuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutina`
--

DROP TABLE IF EXISTS `rutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rutina` (
  `idRutina` int(11) NOT NULL AUTO_INCREMENT,
  `Nrutina` varchar(15) DEFAULT NULL,
  `Premium` int(11) DEFAULT NULL,
  `Imagen` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`idRutina`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutina`
--

LOCK TABLES `rutina` WRITE;
/*!40000 ALTER TABLE `rutina` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `tUsuario` int(11) DEFAULT 0,
  `usuario` varchar(15) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(40) DEFAULT NULL,
  `correo` varchar(60) DEFAULT NULL,
  `Npremium` int(11) DEFAULT 0,
  `Imagen` varchar(100) DEFAULT NULL,
  `Peso` int(11) DEFAULT NULL,
  `Altura` int(11) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `dias_restantes` int(11) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `CVV` int(11) DEFAULT NULL,
  `Fecha_Tarjeta` varchar(50) DEFAULT NULL,
  `Tarjeta` int(11) DEFAULT NULL,
  `Nombre_Tarjeta` varchar(100) DEFAULT NULL,
  `inicio_premium` date DEFAULT NULL,
  `final_premium` date DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (43,1,'admin','$2y$10$KEVVIq63qj2EEu/k48KCxesZ0os5WHRE7/jDjy7NHrRa8hDF0DuI2',NULL,NULL,'admin@admin',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,0,'user','$2y$10$dlBhVRReJOxisWAf17Byyec4eZUtLodXIvCYgZcfcC9VcrupFuSZW','Sanca','Sanca','user@user.com',0,'https://pbs.twimg.com/profile_images/1246540868443688961/TkX8D-k3_400x400.jpg',100,200,NULL,NULL,'Sanca',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'daw2_jamsweb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-17 15:07:05
