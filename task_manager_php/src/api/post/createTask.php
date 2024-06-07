<?php
require_once '/wamp64/www/task_manager_php/src/config/database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$database = new Database();
$pdo = $database->getConnection();

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método não permitido
    echo json_encode(['error' => 'Método não permitido. Apenas POST é suportado.']);
    exit;
}

// Verifica se os dados foram enviados corretamente
if (!isset($_POST['title']) || !isset($_POST['description'])) {
    http_response_code(400); // Requisição inválida
    echo json_encode(['error' => 'Dados inválidos. O título e a descrição são obrigatórios.']);
    exit;
}

// Obtém os dados do corpo da requisição
$title = $_POST['title'];
$description = $_POST['description'];

// Insere os dados no banco de dados
$stmt = $pdo->prepare('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)');
$status = 'pending'; // Definindo o status como pendente
if ($stmt->execute([$title, $description, $status])) {
    $newTask = [
        'id' => $pdo->lastInsertId(),
        'title' => $title,
        'description' => $description,
        'status' => $status
    ];
    http_response_code(201); // Criado com sucesso
    echo json_encode($newTask);
} else {
    http_response_code(500); // Erro interno do servidor
    echo json_encode(['error' => 'Erro ao criar tarefa.']);
}
?>
