<?php
require_once '/wamp64/www/task_manager_php/src/config/database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$database = new Database();
$pdo = $database->getConnection();

// Verificar se a chave 'id' está definida no array $_GET
if(isset($_GET['id'])) {
    $id = $_GET['id'];
    
    $stmt = $pdo->prepare('SELECT * FROM tasks WHERE id = ?');
    $stmt->execute([$id]);
    $task = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($task) {
        echo json_encode($task);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Task not found']);
    }
} else {
    // Se 'id' não estiver definido, retornar um erro
    http_response_code(400);
    echo json_encode(['error' => 'ID parameter is missing']);
}
?>
