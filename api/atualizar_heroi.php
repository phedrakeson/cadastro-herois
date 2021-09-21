<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  try {
    $data = json_decode(file_get_contents('php://input'));
    $heroiId = $_GET['id'];

    DB::update('herois', [
      'nome' => $data->nome,
      'poderes' => $data->poderes,
      'fraquezas' => $data->fraquezas,
      'raca' => $data->raca,
      'filiacao' => $data->filiacao,
      'origem' => $data->origem,
      'personalidade' => $data->personalidade,
      'ocupacao' => $data->ocupacao,
      'historia' => $data->historia,
    ], "id=%s", $heroiId);

    $response = array('ok' => true);
    echo json_encode($response);
  } catch (Exception $e) {
    $error = array('ok' => false, 'error' => $e->getMessage());
    echo json_encode($error);
  }
?>