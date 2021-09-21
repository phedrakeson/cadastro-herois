<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  try {
    $heroiId = $_GET['id'];
    $profile = DB::queryFirstRow("SELECT * FROM herois WHERE id=%i", $heroiId);
    echo json_encode($profile);
  } catch (Exception $e) {
    $error = array('ok' => false, 'error' => $e->getMessage());
    echo json_encode($error);
  }
?>