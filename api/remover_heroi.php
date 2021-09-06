<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  try {
    $heroiId = $_GET['id'];
    DB::delete('herois', 'id=%s', $heroiId);

    $response = array('ok' => true);
    echo json_encode($response);
  } catch (Exception $e) {
    $error = array('ok' => true, 'error' => $e->getMessage());
    echo json_encode($error);
  }
?>