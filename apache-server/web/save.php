<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $resultadoContador = mysqli_query($conexion,  //que no se repita ni dieta ni rutina 
  $sql = "SELECT idCalendario, idDieta, idRutina, idUsuario, comentarios, fecha
  FROM calendario WHERE comentarios='Dieta' and idUsuario=1 and fecha='2021-05-06'");

if($resultadoContador->num_rows == 0) {


  $resultado = mysqli_query($conexion, 
    $sql = "INSERT INTO calendario (idDieta,idRutina,comentarios,fecha,idUsuario)
    VALUES (1,2,'".$_POST['title']."','".$_POST['fecha']."',1)");
    
    
}
  // REALIZA LA QUERY A LA DB

    class Result {}

    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

    if($resultado) {
        $response->resultado = 'OK';
        $response->mensaje = 'REGISTER EXITOSO';

      }else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'REGISTER FALLIDO';
        if($resultadoContador->num_rows >= 1) {
          $response->mensaje = 'REGISTER FALLIDO USUARIO YA CREADO';
      }
    }

    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO