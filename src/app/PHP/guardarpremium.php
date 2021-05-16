<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION



  //REALIZA LA QUERY A LA DB


  $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.usuarios
  SET tUsuario=0, Npremium=0, dias_restantes=NULL, CVV='$params->cvv', Fecha_Tarjeta='$params->expNum', Tarjeta='$params->numTarjeta',  Nombre_Tarjeta='$params->nombre'
    WHERE idUsuario='$params->usuario'");
  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
