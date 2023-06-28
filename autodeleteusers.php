<?php
require_once('connection.php'); // Include the database connection file

// Calculate the datetime for 3 months ago
$interval = new DateInterval('P3M');
$currentDateTime = new DateTime();
$currentDateTime->sub($interval);
$thresholdDateTime = $currentDateTime->format('Y-m-d H:i:s');

// Prepare the SQL statement to delete old user records
$sql = "DELETE FROM active_users WHERE date_added <= ?";

// Create a prepared statement
$stmt = $mysqli->prepare($sql);

// Bind the parameter and execute the statement
$stmt->bind_param("s", $thresholdDateTime);
$stmt->execute();

// Close the statement
$stmt->close();

echo "Old user records deleted successfully.";
?>