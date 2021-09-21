<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  try {
    $results = DB::query("SELECT * FROM herois");
    echo json_encode($results);
  } catch (Exception $e) {
    $error = array('ok' => false, 'error' => $e->getMessage());
    echo json_encode($error);
  }
?>