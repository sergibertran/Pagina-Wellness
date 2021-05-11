<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
$datos;
$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
$potato;
require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION

$instruccion = "SELECT contrasena FROM usuarios WHERE usuario = '$params->username'";
	$resultado = mysqli_query($conexion, $instruccion);

	while ($fila = $resultado->fetch_assoc()) {
		$password2=$fila["contrasena"];
	}

   if (!password_verify ($params->password,$password2)){
    $potato="test";

  }else{
    $potato="aaa";
    $resultado = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$params->username' AND contrasena='$password2'");
    while ($registros = mysqli_fetch_array($resultado))
    {
      $datos = $registros;
    }
  }






header('Content-Type: application/json');
echo json_encode($datos);
