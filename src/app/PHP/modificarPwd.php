<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
$datos;
$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
$potato;
require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION




$instruccion = "SELECT contrasena FROM usuarios WHERE idUsuario = $params->idUser";
	$resultado = mysqli_query($conexion, $instruccion);

	while ($fila = $resultado->fetch_assoc()) {
		$password2=$fila["contrasena"];
	}

   if (!password_verify ($params->pwdActual,$password2)){

    $result= 'la contraseña actual no coincide';
  }else{
    $passwordc = password_hash($params->pwdNueva, PASSWORD_DEFAULT);

    $instruccion = "UPDATE daw2_jamsweb.usuarios
    SET contrasena='$passwordc'
    WHERE idUsuario=$params->idUser";

    $resultado = mysqli_query($conexion, $instruccion);
    $result = 'erueka';

  }






header('Content-Type: application/json');
echo json_encode($result);
