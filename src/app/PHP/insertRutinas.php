<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
  $Y=0;
  $respuesta;
  
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
    
// REALIZA LA QUERY A LA DB

 
$resultado = mysqli_query($conexion, 
 
$sql = "SELECT idRutina, Premium, Imagen
FROM daw2_jamsweb.rutina WHERE Nrutina='$params->nombreRutina'");


 while ($registros = mysqli_fetch_array($resultado)) {
   $array[$x]=$registros;
   $x++;
 }

// if(count($array)>0){
// $respuesta='existe ya una rutina con ese nombre';
// }

// else{




$resultado = mysqli_query($conexion, 

$sql = "INSERT INTO daw2_jamsweb.rutina (Nrutina, Imagen) VALUES('$params->nombreRutina','$params->img')");


 
 $resultado = mysqli_query($conexion, 
 $sql = "SELECT idRutina FROM daw2_jamsweb.rutina WHERE Nrutina='$params->nombreRutina'");

 while ($fila = $resultado->fetch_assoc()) {
   $id=$fila["idRutina"];
 }

 for ($i = 1; $i <= 7; $i++) {
 $resultado = mysqli_query($conexion, 
 $sql = "INSERT INTO daw2_jamsweb.dias_rutinas
 (numDiaRutina, idRutina, Titulo, Ejercicio, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, Ejercicio6, Comentarios)
 VALUES($i, $id, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)");

 }
 $respuesta='funciona';

// }

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>

  