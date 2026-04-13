<?php
require_once 'config.php';

try {
    $dbh = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8",
        DB_USER,
        DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
    );
    // Ha ide eljut, a kapcsolat sikeres
} catch (PDOException $e) {
    // Hiba esetén ne írassuk ki a teljes hibaüzenetet élesben, csak fejlesztéskor
    die("Kapcsolódási hiba történt."); 
}
?>