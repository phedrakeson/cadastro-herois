<?php
  require_once '../libs/meekrodb.php';
  DB::$user = 'root';
  DB::$password = '';
  DB::$dbName = 'cadastro_herois';

  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');
  $results = DB::query("SELECT * FROM herois");

  echo json_encode($results);
?>