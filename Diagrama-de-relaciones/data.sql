-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: d-toke
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Nike',NULL,'2023-10-29 14:37:31','2023-10-29 14:37:31'),(2,'Adidas',NULL,'2023-10-29 14:37:31','2023-10-29 14:37:31'),(3,'Puma',NULL,'2023-10-29 14:37:31','2023-10-29 14:37:31'),(4,'Reebok',NULL,'2023-10-29 14:37:31','2023-10-29 14:37:31');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Superstar','Zapatillas clásicas con el icónico diseño de las tres rayas.','Adidas_Superstar.jpeg',59000,2,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(2,'Cali','Zapatillas con estilo vintage y suela gruesa.','Puma_Cali.webp',39000,3,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(3,'Air Zoom','Zapatillas ligeras con tecnología Air Zoom para una mayor respuesta en la pisada.','Nike_Air-Zoom.jpg',69000,1,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(4,'Classic Leather','Zapatillas de cuero clásicas con diseño retro.','Reebok_Classic-Leather.jpg',59000,4,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(5,'Air Max 97','Zapatillas deportivas con tecnología de amortiguación Air Max.','Nike_AirMax_97.jpg',70000,1,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(6,'React Infinity Run','Zapatillas de running con amortiguación React para una experiencia suave.','Nike_React-Infinity-Run.jpeg',72000,1,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(7,'Joyride Run','Zapatillas con sistema de amortiguación Joyride para una pisada suave y cómoda.','Nike_Joyride-Run.png',72000,1,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(8,'Ultraboost','Zapatillas de running con tecnología Ultraboost para mayor comodidad y retorno de energía.','Adidas_Ultraboost.jpg',68000,2,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(9,'Stan Smith','Zapatillas de estilo retro con diseño icónico y suela de goma.','Adidas_Stan-Smith.webp',66000,2,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(10,'Gazelle','Zapatillas clásicas de ante con detalles en contraste.','Adidas_Gazelle.jpg',75000,2,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(11,'Nano X','Zapatillas de entrenamiento versátiles y resistentes para cualquier actividad.','Reebok_Nano-X.jpg',71000,4,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(12,'Club C','Zapatillas de estilo clásico con diseño limpio y detalles en contraste.','Reebok_Club-C.jpg',68000,4,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(13,'Flexagon','Zapatillas versátiles ideales para entrenamiento con un diseño ligero y cómodo.','Reebok_Flexagon.jpg',76000,4,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(14,'RS-X','Zapatillas de estilo retro con tecnología de amortiguación RS.','Puma_RS-X.webp',71000,3,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(15,'Future Rider','Zapatillas inspiradas en los estilos de los años 80 con un toque moderno.','Puma_Future-Rider.webp',70000,3,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL),(16,'RS-2K','Zapatillas con diseño futurista y detalles audaces.','Puma_RS-2K.jpg',74000,3,'2023-10-29 14:37:31','2023-10-29 14:37:31',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-10-29 14:37:31','2023-10-29 14:37:31'),(2,'Usuario','2023-10-29 14:37:31','2023-10-29 14:37:31');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231021025557-create-category.js'),('20231021030200-create-product.js'),('20231021030201-create-images.js'),('20231021034507-create-role.js'),('20231021034712-create-user.js'),('20231025021238-create-address.js'),('20231025022534-create-status.js'),('20231025022855-create-order.js'),('20231025024559-create-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ezequiel','Gomez','eze@gmail.com','$2a$10$xIv6npWZ2gma4XG62PavBu6CItYXfW3jSFzQmEe9myvgnGbU6eaou',NULL,1,'2023-10-29 14:37:31','2023-10-29 14:37:31'),(2,'Alejandro','Gomez','ale@gmail.com','$2a$10$xIv6npWZ2gma4XG62PavBu6CItYXfW3jSFzQmEe9myvgnGbU6eaou',NULL,2,'2023-10-29 14:37:31','2023-10-29 14:37:31');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-29 11:56:51
