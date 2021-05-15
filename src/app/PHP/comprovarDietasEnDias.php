<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
   
 // REALIZA LA QUERY A LA DB
 $resultado = mysqli_query($conexion, 

 $sql = "INSERT INTO daw2_jamsweb.calendario
 (idDieta, idRutina, idUsuario, comentarios, fecha, idDia)
 VALUES(1, NULL, 1, NULL,'aa', $params->0)
 ");
 



//   for ($i = 0; ; $i++) {

//    if ($i > count($params)) {
//       break;
//    }
//   echo $i;
//  }


   while ($registros = mysqli_fetch_array($resultado)) {
     $array[$x]=$registros;
     $x++;
   }



    echo json_encode('yes'); // MUESTRA EL JSON GENERADO

?>

  