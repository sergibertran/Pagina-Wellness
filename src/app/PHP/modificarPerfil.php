<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION



  //REALIZA LA QUERY A LA DB

  if ($params->usuario == "admin"){
    $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.usuarios
    SET correo='$params->correo' WHERE usuario='$params->usuario'");
  } else{
  $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.usuarios
  SET nombre='$params->nombre', apellido='$params->apellidos', correo='$params->correo', Peso=$params->peso, Altura=$params->altura, Direccion='$params->direccion'
    WHERE usuario='$params->usuario'");
}
  
    header('Content-Type: application/json');

    echo json_encode($params->usuario); // MUESTRA EL JSON GENERADO

?>
