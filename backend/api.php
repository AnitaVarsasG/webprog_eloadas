<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once 'db.php';


$input = json_decode(file_get_contents('php://input'), true);
$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'GET': 
            $stmt = $dbh->query("SELECT * FROM megye");
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
            break;

        case 'POST': 
            $stmt = $dbh->prepare("INSERT INTO megye (nev, regio) VALUES (:nev, :regio)");
            $stmt->execute(['nev' => $input['nev'], 'regio' => $input['regio']]);
            echo json_encode(['üzenet' => 'Sikeres hozzáadás']);
            break;

        case 'PUT': 
            $stmt = $dbh->prepare("UPDATE megye SET nev=:nev, regio=:regio WHERE id=:id");
            $stmt->execute(['nev' => $input['nev'], 'regio' => $input['regio'], 'id' => $input['id']]);
            echo json_encode(['üzenet' => 'Sikeres módosítás']);
            break;

        case 'DELETE': 
            $stmt = $dbh->prepare("DELETE FROM megye WHERE id=:id");
            $stmt->execute(['id' => $input['id']]);
            echo json_encode(['üzenet' => 'Sikeres törlés']);
            break;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['hiba' => $e->getMessage()]);
}
?>