<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriSegments = explode('/', $requestUri);

if ($requestMethod === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($uriSegments[2] === 'get-tasks' && $requestMethod === 'GET') {
    require_once 'get/getTasks.php';
} elseif ($uriSegments[2] === 'get-task' && $requestMethod === 'GET' && isset($uriSegments[3])) {
    require_once 'get/getTask.php';
} elseif ($uriSegments[2] === 'create-task' && $requestMethod === 'POST') {
    require_once 'post/createTask.php';
} elseif ($uriSegments[2] === 'update-task' && $requestMethod === 'PUT' && isset($uriSegments[3])) {
    require_once 'put/updateTask.php';
} elseif ($uriSegments[2] === 'delete-task' && $requestMethod === 'DELETE' && isset($uriSegments[3])) {
    require_once 'delete/deleteTask.php';
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}
?>