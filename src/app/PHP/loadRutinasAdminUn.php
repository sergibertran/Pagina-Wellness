<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
    
 // REALIZA LA QUERY A LA DB
 $resultado = mysqli_query($conexion, 
 
 $sql = "SELECT idRutina, Nrutina, imagen
 FROM daw2_jamsweb.rutina WHERE idRutina=$params;
 ");
 

   while ($registros = mysqli_fetch_array($resultado)) {
     $array[$x]=$registros;
     $x++;
   }



    echo json_encode($array); // MUESTRA EL JSON GENERADO

?>

  