<?php
require_once '/wamp64/www/task_manager_php/src/config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


$database = new Database();
$pdo = $database->getConnection();

$stmt = $pdo->query('SELECT * FROM tasks');
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($tasks);
?>
