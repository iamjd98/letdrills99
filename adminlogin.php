<?php
session_start(); // Start the session

// Include the database connection
include 'connection.php';

// Retrieve the username and password from the login form
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare the SQL statement to check if the username and password match
$sql = "SELECT * FROM admin WHERE username = '$username' AND pass = '$password'";
$result = $mysqli->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();

    // Set the session variables for the logged-in user
    $_SESSION['admin_id'] = $row['admin_id'];
    $_SESSION['username'] = $row['username'];

    header("Location: admincreateuser.php");
    exit();
} else {
    // Username and password do not match, display an alert and redirect to adminsignin.php
    echo '<script>alert("Invalid username or password.");</script>';
    echo '<script>window.location.href = "adminsignin.php";</script>';
    exit();
}
?>
