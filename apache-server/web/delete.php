<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $x=0;
    header('Content-Type: application/json');

    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
    
 // REALIZA LA QUERY A LA DB
 $resultado = mysqli_query($conexion, 
 $sql = "DELETE FROM daw2_jamsweb.calendario
 WHERE idCalendario=72;
 ");

 

   while ($registros = mysqli_fetch_array($resultado)) {
     $array[$x]=$registros;
     $x++;
   }



    echo json_encode($array); // MUESTRA EL JSON GENERADO

?>

  