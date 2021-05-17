<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $idUser;
  $coment;
  $resp;
    $conexion = conexion(); // CREA LA CONEXION
    

    for ($i = 0; $i <= count($params)-1; $i++) {

      $texto=$params[$i]->date;
      $idUser=$params[$i]->idUsuario;
      $coment=$params[$i]->comentario;
      $texto=(explode('T', $texto, -1));
      $texto=implode($texto);

 // REALIZA LA QUERY A LA DB
 $resultado = mysqli_query($conexion, 
 $sql = "INSERT INTO daw2_jamsweb.calendario
 (idDieta, idRutina, idUsuario, comentarios, fecha, idDia, comentario)
 VALUES(NULL, NULL,$idUser,'Comentarios','$texto', NULL,'$coment') ");
 $resp="works";
}

    echo json_encode($resp); // MUESTRA EL JSON GENERADO

?>

  