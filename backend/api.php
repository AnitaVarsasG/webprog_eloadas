<?php
// api.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit(0); }

require_once 'db.php';

$input = json_decode(file_get_contents('php://input'), true);
$method = $_SERVER['REQUEST_METHOD'];


$action = isset($_GET['action']) ? $_GET['action'] : 'torony';

try {
    if ($method === 'GET') {
        if ($action === 'helyszin') {
            
            $stmt = $dbh->query("SELECT id, nev FROM helyszin ORDER BY nev");
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        } else {
            
            $sql = "SELECT t.id, t.darab, t.teljesitmeny, t.kezdev, t.helyszinid, h.nev AS telepules_nev 
                    FROM torony t 
                    JOIN helyszin h ON t.helyszinid = h.id 
                    ORDER BY t.id DESC";
            $stmt = $dbh->query($sql);
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
    } 
    elseif ($method === 'POST') {
        $stmt = $dbh->prepare("INSERT INTO torony (darab, teljesitmeny, kezdev, helyszinid) VALUES (:darab, :teljesitmeny, :kezdev, :helyszinid)");
        $stmt->execute([
            'darab' => $input['darab'], 
            'teljesitmeny' => $input['teljesitmeny'], 
            'kezdev' => $input['kezdev'], 
            'helyszinid' => $input['helyszinid']
        ]);
        echo json_encode(['üzenet' => 'Sikeres hozzáadás']);
    } 
    elseif ($method === 'PUT') {
        $stmt = $dbh->prepare("UPDATE torony SET darab=:darab, teljesitmeny=:teljesitmeny, kezdev=:kezdev, helyszinid=:helyszinid WHERE id=:id");
        $stmt->execute([
            'darab' => $input['darab'], 
            'teljesitmeny' => $input['teljesitmeny'], 
            'kezdev' => $input['kezdev'], 
            'helyszinid' => $input['helyszinid'],
            'id' => $input['id']
        ]);
        echo json_encode(['üzenet' => 'Sikeres módosítás']);
    } 
    elseif ($method === 'DELETE') {
        $stmt = $dbh->prepare("DELETE FROM torony WHERE id=:id");
        $stmt->execute(['id' => $input['id']]);
        echo json_encode(['üzenet' => 'Sikeres törlés']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['hiba' => $e->getMessage()]);
}
?>