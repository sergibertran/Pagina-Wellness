<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


    header('Content-Type: application/json');


    
 // REALIZA LA QUERY A LA DB
 $resultado = mysqli_query($conexion, 
 $sql = "SELECT idCalendario, idDieta, idRutina, comentarios,idUsuario,fecha 
 FROM calendario
 WHERE idUsuario=1");

 

   while ($registros = mysqli_fetch_array($resultado)) {
     $array[$x]=$registros;
     $x++;
   }



    echo json_encode($array); // MUESTRA EL JSON GENERADO

?>

  