<?php

require_once 'db.php';

try {
    
    $stmt = $dbh->query("SELECT * FROM megye LIMIT 5");
    $eredmeny = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($eredmeny);

} catch (PDOException $e) {
    echo "Hiba a lekérdezésnél: " . $e->getMessage();
}
?>