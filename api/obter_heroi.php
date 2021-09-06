<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $heroiId = $_GET['id'];
  $profile = DB::query("SELECT * FROM herois WHERE id=%i", $heroiId);
  echo json_encode($profile);
?>