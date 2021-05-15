<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
$datos;
$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION

$pwdActual = password_hash($params->pwdActual, PASSWORD_DEFAULT);

$instruccion ="SELECT count(*) AS cuantos FROM `daw2_jamsweb.usuarios` WHERE contrasena = '$pwdActual'";

$result = mysqli_query($conexion, $instruccion);

    $passA = password_hash($params->pwdNueva, PASSWORD_DEFAULT);
    $sentencia ="UPDATE `daw2_jamsweb.usuarios` SET `contrasena`='$passA' WHERE `contrasena`='$pwdActual'";

  if ($res = mysqli_query($conexion, $sentencia)) {
      $instruccion2 = "SELECT * FROM daw2_jamsweb.usuarios WHERE contrasena = '$passA'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($registros = mysqli_fetch_array($resultado)) {
        $datos = $registros;
      }
    }

    header('Content-Type: application/json');
    echo json_encode($params);
   


?>
