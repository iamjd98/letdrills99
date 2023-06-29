<?php
session_start(); // Start the session

// Include the database connection
include 'connection.php';

// Check if the user ID is provided in the query string
if (isset($_GET['user_id'])) {
    $user_id = $_GET['user_id'];

    // Clear the session data
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Update the active_users table to clear the session ID
    $updateSql = "UPDATE active_users SET session_id = NULL WHERE user_id = '$user_id'";
    $mysqli->query($updateSql);
}

// Redirect to index.php
header("Location: index.php");
exit();
?>
