<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION


  for ($i = 0; $i <= count($params)-1; $i++) {

  $Comentarios=$params[$i]->Comentarios;
  $Ejercicio=$params[$i]->Ejercicio;
 $Ejercicio3=$params[$i]->Ejercicio3;
  $Ejercicio2=$params[$i]->Ejercicio2;
$idDia=$params[$i]->idDia;
$idRutina=$params[$i]->idRutina;
$Ejercicio4=$params[$i]->Ejercicio4;
$Ejercicio5=$params[$i]->Ejercicio5;
$Ejercicio6=$params[$i]->Ejercicio6;

  //REALIZA LA QUERY A LA DB


  $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.dias_rutinas
  SET Ejercicio='$Ejercicio', Ejercicio2='$Ejercicio2', Ejercicio3='$Ejercicio3', Ejercicio4='$Ejercicio4', Ejercicio5='$Ejercicio5', Ejercicio6='$Ejercicio6', Comentarios='$Comentarios'
  WHERE idRutina=$idRutina and numDiaRutina=$idDia");


  }

  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
