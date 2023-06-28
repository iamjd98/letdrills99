<?php
include 'connection.php';
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

// Access the user's first name and last name from the session
$fname = $_SESSION['fname'];
$lname = $_SESSION['lname'];
?>