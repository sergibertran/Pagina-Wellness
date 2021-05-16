<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

$dias = $params->cantidad*30;
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION



  //REALIZA LA QUERY A LA DB
  
  $fecha= date("Y-m-d");

  $fechafin= date("Y-m-d",strtotime($fecha."+ $dias days")); 


  $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.usuarios
  SET Npremium=1, dias_restantes=$dias, CVV='$params->cvv', Fecha_Tarjeta='$params->expNum', Tarjeta='$params->numTarjeta',  Nombre_Tarjeta='$params->nombre', inicio_premium='$fecha', final_premium='$fechafin'
    WHERE idUsuario='$params->usuario'");
  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
