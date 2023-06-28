<?php
$host = "localhost"; 
$username = "root";
$password = "";  
$database = "ldbt";  
// Create a new MySQLi object and establish the connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check the connection status
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: " . $mysqli->connect_error);
}
?>
