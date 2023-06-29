<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id']) || !isset($_SESSION['login_token'])) {
    // User is not logged in, redirect to index.php
    header("Location: index.php");
    exit();
}

// Include the database connection
include 'connection.php';

// Retrieve the user details from the active_users table
$user_id = $_SESSION['user_id'];
$login_token = $_SESSION['login_token'];

$sql = "SELECT * FROM active_users WHERE user_id = '$user_id' AND login_token = '$login_token'";
$result = $mysqli->query($sql);

if ($result->num_rows != 1) {
    // Invalid login token, redirect to index.php
    header("Location: index.php");
    exit();
}
// Access the user's first name and last name from the session
$fname = $_SESSION['fname'];
$lname = $_SESSION['lname'];
?>