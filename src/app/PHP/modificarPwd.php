<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
$datos;
$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION

$passwordc = password_hash($params->pwdActual, PASSWORD_DEFAULT);

$instruccion ="SELECT count(*) AS cuantos FROM usuarios WHERE contrasena = '$passwordc'";

$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
  if($numero==0){
    echo('{ "result": "ERROR", "message": "Contraseña antigua incorrecta"  }');
  } else{

    $passA = password_hash($params->pwdNueva, PASSWORD_DEFAULT);
    $sentencia ="UPDATE `daw2_jamsweb.usuarios` SET `contrasena`='$passA' WHERE `contrasena`='$passwordc'";

  if ($res = mysqli_query($con, $sentencia)) {
      $instruccion2 = "SELECT * FROM daw2_jamsweb.usuarios WHERE contrasena = '$passA'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($fila = $result2->fetch_assoc()) {
        $datos [] =$fila;


    }
    if($datos){
      header('Content-Type: application/json');
      json_encode($datos);
      echo(json_encode($datos));

    }
  } else {
    echo('{ "result": "ERROR", "message": "No se ha podido modificar el usuario"  }');
  }
}

?>
