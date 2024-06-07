<?php
require_once '/wamp64/www/task_manager_php/src/config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


$database = new Database();
$pdo = $database->getConnection();

$id = $_GET['id'];
$stmt = $pdo->prepare('DELETE FROM tasks WHERE id = ?');
$stmt->execute([$id]);
http_response_code(204);
?>