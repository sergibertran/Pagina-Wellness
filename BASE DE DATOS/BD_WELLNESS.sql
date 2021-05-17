-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 192.168.3.26    Database: daw2_jamsweb
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
) ENGINE=InnoDB AUTO_INCREMENT=375 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario`
--

LOCK TABLES `calendario` WRITE;
/*!40000 ALTER TABLE `calendario` DISABLE KEYS */;
INSERT INTO `calendario` VALUES (372,NULL,NULL,44,'Comentarios','2021-05-06',NULL,'aaa');
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
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias`
--

LOCK TABLES `dias` WRITE;
/*!40000 ALTER TABLE `dias` DISABLE KEYS */;
INSERT INTO `dias` VALUES (88,1,28,'Porridge de copos de avena con bebida de arroz y 2 kiwis.','Bocadillo de humus con rúcula y rodajas de tomate + 1 zumo de naranja natural.','	Macarrones con pisto. Filete de buey con patata al horno. Yogur natural con frutos rojos.','	Tostadas con membrillo.','Batido recuperador con queso batido 0%, fresas y miel.','	Ensalada de arroz. Lubina al horno con verduras y patata. Requesón.',''),(89,2,28,'Vaso de leche.\nBocadillo de jamón serrano. 1 bol de uvas.','Yogur con semillas de chía y arándanos + 1 plátano con un puñado de castañas.','Crema de champiñones, puerro y patata.\nEspaguetis salteados con rebozuelos y dos huevos poché.\nMacedonia de frutas.','Yogur con corn flakes.','Batido recuperador a base de kéfir con frambuesas y whey.','Ensalada de patata.\nSardinas plancha acompañadas de pan con tomate.\nYogur con mermelada.',''),(90,3,28,'Porridge de copos de avena con bebida de arroz y 2 kiwis.','Bocadillo de humus con rúcula y rodajas de tomate + 1 zumo de naranja natural.','Macarrones con pisto. Filete de buey con patata al horno. Yogur natural con frutos rojos.','Tostadas con membrillo.','Batido recuperador con queso batido 0%, fresas y miel.','Ensalada de arroz. Lubina al horno con verduras y patata. Requesón.',''),(91,4,28,'Vaso de leche.\nBocadillo de jamón serrano. 1 bol de uvas.','Yogur con semillas de chía y arándanos + 1 plátano con un puñado de castañas.','Crema de champiñones, puerro y patata.\nEspaguetis salteados con rebozuelos y dos huevos poché.\nMacedonia de frutas.','Yogur con corn flakes.','Batido recuperador a base de kéfir con frambuesas y whey.','Ensalada de patata.\nSardinas plancha acompañadas de pan con tomate.\nYogur con mermelada.',''),(92,5,28,'Porridge de copos de avena con bebida de arroz y 2 kiwis.','Bocadillo de humus con rúcula y rodajas de tomate + 1 zumo de naranja natural.','Macarrones con pisto. Filete de buey con patata al horno. Yogur natural con frutos rojos.','Tostadas con membrillo.','Batido recuperador con queso batido 0%, fresas y miel.','Ensalada de arroz. Lubina al horno con verduras y patata. Requesón.',''),(93,6,28,'Vaso de leche.\nBocadillo de jamón serrano. 1 bol de uvas.','Yogur con semillas de chía y arándanos + 1 plátano con un puñado de castañas.','Crema de champiñones, puerro y patata.\nEspaguetis salteados con rebozuelos y dos huevos poché.\nMacedonia de frutas.','Yogur con corn flakes.','Batido recuperador a base de kéfir con frambuesas y whey.','Ensalada de patata.\nSardinas plancha acompañadas de pan con tomate.\nYogur con mermelada.',''),(94,7,28,'Porridge de copos de avena con bebida de arroz y 2 kiwis.','Bocadillo de humus con rúcula y rodajas de tomate + 1 zumo de naranja natural.','Macarrones con pisto. Filete de buey con patata al horno. Yogur natural con frutos rojos.','Tostadas con membrillo.','Batido recuperador con queso batido 0%, fresas y miel.','Ensalada de arroz. Lubina al horno con verduras y patata. Requesón.',''),(95,1,29,'Tostada integral con tomate, aceite y kiwi.','Piña.','    Ensalada de canónigos con nueces, parmesano y vinagreta de limón.\n    Lubina al horno con eneldo.\n','Yogur natural con una onza chocolate negro de mínimo el 70% de cacao.','','    Verduras salteadas al estilo tailandés.\n    Pollo con champiñones.\n    Mandarina.\n',''),(96,2,29,'Tostada integral con tomate y yogur con manzana.','Naranja.','    Berenjenas rellenas de pollo y verduras.\n    Pieza de fruta\n','Tortitas de arroz con queso fresco y pavo.','','    Ensalada griega.\n    Dorada al horno.\n',''),(97,3,29,'Tostada integral con tomate, aceite de oliva, jamón y pieza fruta.','Mango o melocotón','    Verduras asadas con queso de cabra.\n    Lomos de trucha al horno con tomate y cebolla.\n','Compota de pera con canela.','','    Crema de puerros.\n    Pavo con cebolla, calabacín y salsa de soja\n    Manzana.\n',''),(98,4,29,'Gachas de avena con leche y canela y trocitos de plátano.','Kiwi.','    Gazpacho.\n    Solomillo de cerdo con hortalizas salteadas.','Crepes de avena con compota de pera o manzana.','','    Salteado de brócoli con cebolla.\n    Salmón al horno con salsa de yogur.\n    Mandarina.\n',''),(99,5,29,'Tostada integral con tomate y yogur con manzana.','Fresas.','    Ensalada de aguacate, mango y salmón.\n    Merluza a la vinagreta.\n','Yogur desnatado con compota de manzana.','','    Menestra de verduras.\n    Albóndigas de ternera al horno.\n    Kiwi.\n',''),(100,6,29,'Tostada integral con tomate, aceite y kiwi.','Piña.','    Ensalada de canónigos con nueces, parmesano y vinagreta de limón.\n    Lubina al horno con eneldo.\n','Yogur natural con una onza chocolate negro de mínimo el 70% de cacao.','','    Verduras salteadas al estilo tailandés.\n    Pollo con champiñones.\n    Mandarina.\n',''),(101,7,29,'Tostada integral con tomate y yogur con manzana.','Naranja.','    Berenjenas rellenas de pollo y verduras.\n    Pieza de fruta\n','Tortitas de arroz con queso fresco y pavo.','','    Ensalada griega.\n    Dorada al horno.\n','');
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
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias_rutinas`
--

LOCK TABLES `dias_rutinas` WRITE;
/*!40000 ALTER TABLE `dias_rutinas` DISABLE KEYS */;
INSERT INTO `dias_rutinas` VALUES (204,1,37,NULL,'Press militar (4 series x 12 repeticiones)','Press inclinado (4 series x 12 repeticiones)','Fondos (4 series x 12 repeticiones)','Aberturas (4 series x 12 repeticiones)','Flexiones (4 series x 12 repeticiones)','',''),(205,2,37,NULL,'Polea tras nuca (4 series x 12 repeticiones)','Polea tras nuca (4 series x 12 repeticiones)','Peso muerto (4 series x 12 repeticiones)','Remo (4 series x 12 repeticiones)','','',''),(206,3,37,NULL,'Sentadillas (4 series x 12 repeticiones)','Prensa (4 series x 12 repeticiones)','Extensiones (4 series x 12 repeticiones)','Femoral tumbado (4 series x 12 repeticiones)','Peso muerto rumano (4 series x 12 repeticiones)','',''),(207,4,37,NULL,'Biceps en banco predicador (4 series x 12 repeticiones)','Biceps en polea (4 series x 12 repeticiones)','Martillo (4 series x 12 repeticiones)','Press fances (4 series x 12 repeticiones)','Fondos (4 series x 12 repeticiones)','Triceps en polea (4 series x 12 repeticiones)',''),(208,5,37,NULL,'Press militar (4 series x 12 repeticiones)','Pajaros (4 series x 12 repeticiones)','Six ways (4 series x 12 repeticiones)','','','',''),(209,6,37,NULL,'','','','','','',''),(210,7,37,NULL,'','','','','','',''),(218,1,39,NULL,'Press banca (3 series x 1-6 repeticiones con maximo peso)','Press inclinado (3 series x 1-6 repeticiones con maximo peso)','','','','',''),(219,2,39,NULL,'Peso muerto (3 series x 1-6 repeticiones con maximo peso)','Polea tras nuca (3 series x 1-6 repeticiones con maximo peso)','Polea al pecho (3 series x 1-6 repeticiones con maximo peso)','','','',''),(220,3,39,NULL,'Sentadilla (3 series x 1-6 repeticiones con maximo peso)','Prensa (3 series x 1-6 repeticiones con maximo peso)','Extensiones (3 series x 1-6 repeticiones con maximo peso)','Femoral tumbada (3 series x 1-6 repeticiones con maximo peso)','','',''),(221,4,39,NULL,'Biceps en banco predicador (3 series x 1-6 repeticiones con maximo peso)','Martillo (3 series x 1-6 repeticiones con maximo peso)','Press fances (3 series x 1-6 repeticiones con maximo peso)','Triceps en polea (3 series x 1-6 repeticiones con maximo peso)','','',''),(222,5,39,NULL,'Press militar (3 series x 1-6 repeticiones con maximo peso)','Pajaros (3 series x 1-6 repeticiones con maximo peso)','','','','',''),(223,6,39,NULL,'','','','','','',''),(224,7,39,NULL,'','','','','','','');
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieta`
--

LOCK TABLES `dieta` WRITE;
/*!40000 ALTER TABLE `dieta` DISABLE KEYS */;
INSERT INTO `dieta` VALUES (28,'Ganar volumen','Ganar volumen',0,'http://www.nutriplanet.es/blog/wp-content/uploads/2014/12/Dieta-para-ganar-masa-muscular-300x202.jpg'),(29,'Perder grasa','Perder grasa',0,'https://s1.eestatic.com/2019/03/21/actualidad/actualidad_384973933_118421301_1024x576.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuesta`
--

LOCK TABLES `encuesta` WRITE;
/*!40000 ALTER TABLE `encuesta` DISABLE KEYS */;
INSERT INTO `encuesta` VALUES (8,44,'User','User','Hombre','12','user@user.com','nada','nada','12','123','123','123','Si','','Si','','+ de 4 al día','3 a 5 a la semana','+ de 4 al día','2 a 3 veces a la semana','1 vez a la semana','2 a 3 veces a la semana','2 a 3 veces a la semana',' a 3 veces a la semana','1 vez a la semana','1 o 2 veces al mes','1 o 2 veces al mes','Nunca','sd');
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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutina`
--

LOCK TABLES `rutina` WRITE;
/*!40000 ALTER TABLE `rutina` DISABLE KEYS */;
INSERT INTO `rutina` VALUES (37,'Hipertrofia',NULL,'https://www.mymusclefactory.com/wp-content/uploads/2013/11/Hiper.jpg'),(39,'Fuerza',NULL,'https://pymstatic.com/26923/conversions/tipos-de-fuerza-thumb.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (43,1,'admin','$2y$10$KEVVIq63qj2EEu/k48KCxesZ0os5WHRE7/jDjy7NHrRa8hDF0DuI2',NULL,NULL,'admin@admin',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,0,'user','$2y$10$dlBhVRReJOxisWAf17Byyec4eZUtLodXIvCYgZcfcC9VcrupFuSZW','Sanca','Sanca','user@user.com',0,'https://pbs.twimg.com/profile_images/1246540868443688961/TkX8D-k3_400x400.jpg',100,200,NULL,NULL,'Sanca',NULL,NULL,NULL,NULL,NULL,NULL),(45,0,'dietista','$2y$10$MBy1ueZOk2N.AKbxFca6nu639xKZynFOKTzDuECErD2dgnzkvLPSa',NULL,NULL,'dietista@gmail.com',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2021-05-17 18:53:24
