<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
  $y=0;
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
   $final;
 // REALIZA LA QUERY A LA DB



  for ($i = 0; $i <= count($params); $i++) {

  $texto=$params[$i]->date;
  $idUsuario=$params[$i]->idUsuario;
   $texto=(explode('T', $texto, -1));
   $texto=implode($texto);
  $resultado = mysqli_query($conexion, 
 $sql = "SELECT * FROM daw2_jamsweb.calendario WHERE fecha='$texto' and comentarios='Rutina' and idUsuario= $idUsuario");

 while ($registros = mysqli_fetch_array($resultado)) {
   $array[$x]=$registros;
  $x++;
 }


 }
 
if(count($array)>0){
  $result='error';

}else{


  for ($i = 0; $i <= count($params)-1; $i++) {

    $texto=$params[$i]->date;
    $idDia=$params[$i]->nDia;
    $idUsuario=$params[$i]->idUsuario;
    $idrutina=$params[$i]->idrutina;
     $texto=(explode('T', $texto, -1));
     $texto=implode($texto);
    

  $resultado = mysqli_query($conexion, 
  $sql = "INSERT INTO daw2_jamsweb.calendario (idDieta, idRutina, idUsuario, comentarios, fecha, idDia) VALUES(NULL,$idrutina, $idUsuario,'Rutina','$texto', $idDia) ");

  while ($registros = mysqli_fetch_array($resultado)) {
    $arrayNew[$y]=$registros;
   $y++;
  }


}

$result='works';
}



    echo json_encode($result); // MUESTRA EL JSON GENERADO

?>

  