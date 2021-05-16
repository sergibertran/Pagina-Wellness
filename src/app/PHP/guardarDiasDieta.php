<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

$dias = $params->cantidad*30;
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION


  for ($i = 0; $i <= count($params)-1; $i++) {

  $Comentarios=$params[$i]->Comentarios;
  $Cena=$params[$i]->Cena;
 $Merienda2=$params[$i]->Merienda2;
  $Merienda=$params[$i]->Merienda;
$idDia=$params[$i]->idDia;
$idDieta=$params[$i]->idDieta;
$Desayuno=$params[$i]->Desayuno;
$Desayuno2=$params[$i]->Desayuno2;
$Comida=$params[$i]->Comida;

  //REALIZA LA QUERY A LA DB


  $resultado = mysqli_query($conexion, "UPDATE daw2_jamsweb.dias
  SET Desayuno='$Desayuno', Desayuno2='$Desayuno2', Comida='$Comida', Merienda='$Merienda', Merienda2='$Merienda2', Cena='$Cena', Comentarios='$Comentarios'
  WHERE idDIeta=$idDieta and numDiaDieta=$idDia");


  }

  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
