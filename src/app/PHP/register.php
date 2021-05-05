<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $passwordc = password_hash($params->contrasena, PASSWORD_DEFAULT);

  $resultadoNoRepetir = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$params->username'");

  if($resultadoNoRepetir->num_rows >= 1) {


  }else{





  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "INSERT INTO `usuarios`(`usuario`, `contrasena`, `correo`)
  VALUES ('$params->username','$passwordc','$params->email')");
}
    class Result {}

    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

    if($resultado) {
        $response->resultado = 'OK';
        $response->mensaje = 'REGISTER EXITOSO';

      }else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'REGISTER FALLIDO';
        if($resultadoNoRepetir->num_rows >= 1) {
          $response->mensaje = 'REGISTER FALLIDO USUARIO YA CREADO';
      }
    }

    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
