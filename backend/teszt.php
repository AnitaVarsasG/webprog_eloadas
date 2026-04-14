<?php

require_once 'db.php';

try {
    // Lekérjük az összes megyét
    $stmt = $dbh->query("SELECT * FROM megye LIMIT 5");
    $eredmeny = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // JSON formátumban kiírjuk a képernyőre
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($eredmeny);

} catch (PDOException $e) {
    echo "Hiba a lekérdezésnél: " . $e->getMessage();
}
?>