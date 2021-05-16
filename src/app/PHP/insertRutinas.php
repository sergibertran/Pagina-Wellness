<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
  $x=0;
  $Y=0;
  $respuesta;
  
    header('Content-Type: application/json');
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

    $conexion = conexion(); // CREA LA CONEXION
    
 // REALIZA LA QUERY A LA DB

 
//  $resultado = mysqli_query($conexion, 
 
//  $sql = "SELECT idRutina, Nrutina, Premium FROM daw2_jamsweb.rutina WHERE NRutina='$params->nombreRutina'");


//   while ($registros = mysqli_fetch_array($resultado)) {
//     $array[$x]=$registros;
//     $x++;
//   }

// if(count($array)>0){
// $respuesta='existe ya una dieta con ese nombre';
// }else{




 $resultado = mysqli_query($conexion, 
 
  $sql = "INSERT INTO daw2_jamsweb.rutina (Nrutina, Premium, Imagen)
   VALUES(
   '$params->nombreRutina',
   '$params->PremiumNoPremium',
   '$params->image') ");  

  // $respuesta='funciona';
 
// }


    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>

  