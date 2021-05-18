<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $response;
  $conexion = conexion(); // CREA LA CONEXION

  $passwordc = password_hash($params->password, PASSWORD_DEFAULT);

  $resultadoNoRepetir = mysqli_query($conexion, "SELECT * FROM daw2_jamsweb.usuarios WHERE usuario='$params->username'");


  if($resultadoNoRepetir->num_rows >= 1) {


$response='usuario repetido';
  }else{

  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "INSERT INTO daw2_jamsweb.usuarios
  (usuario, contrasena, correo)
  VALUES('$params->username','$passwordc','$params->email')");
  //  VALUES('$params->$username','$params->$email','$params->$password')");

  $response='usuario creado';
}
 

    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
