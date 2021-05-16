<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
  $Y=0;
  
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
    
 // REALIZA LA QUERY A LA DB

  $resultado = mysqli_query($conexion,  
  $sql = "DELETE FROM daw2_jamsweb.dias_rutinas
  WHERE idRutina=$params");


$resultado = mysqli_query($conexion,  
$sql = "DELETE FROM daw2_jamsweb.calendario
WHERE idRutina=$params");


$resultado = mysqli_query($conexion,  
$sql = "DELETE FROM daw2_jamsweb.rutina
WHERE idRutina=$params");


    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>

  