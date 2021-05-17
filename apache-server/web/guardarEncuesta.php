<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE


  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION



  //REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "INSERT INTO daw2_jamsweb.encuesta
  (idUsuario, Nombre, Apellidos, Sexo, Edad, Email, Antecedentes, FamBio, Peso, Altura, Cintura, Cadera, Intolerancia, IntoleranciaEx, Dieta, DietaEx, Lacteos, Huevos, Fruta, Legumbres, Carne, CarneProcesada, Pescado, Bolleria, AlimentosProcesados, ComidaRapida, BebidasAzucarada, BebidasAlcoholicas, AlimentoExeso)
  VALUES($params->iduser,
    '$params->nombre',
    '$params->Apellidos',
    '$params->Sexo',
    '$params->Edad',
    '$params->Email',
    '$params->Antecedentes',
    '$params->FamBio',
    '$params->Peso',
    '$params->Altura',
    '$params->Cintura',
    '$params->Cadera',
    '$params->Intolerancia',
    '$params->IntoleranciaEx',
    '$params->Dieta',
    '$params->DietaEx',
    '$params->Lacteos',
    '$params->Huevos',
    '$params->Fruta', 
    '$params->Legumbres',
    '$params->Carne',
    '$params->CarneProcesada',
    '$params->Pescado',
    '$params->Bolleria',
    '$params->AlimentosProcesados',
    '$params->ComidaRapida',
    '$params->BebidasAzucarada',
    '$params->BebidasAlcoholicas',
    '$params->AlimentoExeso');
  ");

  
    header('Content-Type: application/json');

    echo json_encode($params); // MUESTRA EL JSON GENERADO

?>
