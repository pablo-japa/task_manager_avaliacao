<?php
require_once '/wamp64/www/task_manager_php/src/config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


$database = new Database();
$pdo = $database->getConnection();

$id = $_GET['id'];
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['title']) || !isset($data['description']) || !isset($data['status'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input. Title, description, and status are required.']);
    exit;
}
$stmt = $pdo->prepare('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?');
$stmt->execute([$data['title'], $data['description'], $data['status'], $id]);
$updatedTask = [
    'id' => $id,
    'title' => $data['title'],
    'description' => $data['description'],
    'status' => $data['status']
];
echo json_encode($updatedTask);
?>
