<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

$dias = $params->cantidad*30;
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $idDieta=$params[$i]->idDieta;

  
  $resultado = mysqli_query($conexion, " SELECT idDiaDieta, numDiaDieta, idDIeta, Desayuno, Desayuno2, Comida, Merienda, Merienda2, Cena, Comentarios
  FROM daw2_jamsweb.dias WHERE idDIeta=$idDieta");


while ($registros = mysqli_fetch_array($resultado)) {
  $array[$x]=$registros;
 $x++;
}


  
  for ($i = count($array); $i <= count($params)+count($array); $i++) {

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


  $resultado = mysqli_query($conexion, "INSERT INTO daw2_jamsweb.dias
  (numDiaDieta, idDIeta, Desayuno, Desayuno2, Comida, Merienda, Merienda2, Cena, Comentarios)
  VALUES( $i, $idDieta, '$Desayuno', '$Desayuno2','$Comida', '$Merienda', '$Merienda2', '$Cena', '$Comentarios') ");


  }

  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
