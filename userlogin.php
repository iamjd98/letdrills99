<?php
session_start(); // Start the session

// Include the database connection
include 'connection.php';

// Retrieve the email and password from the login form
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare the SQL statement to check if the email and password match
$sql = "SELECT * FROM active_users WHERE email = '$email' AND pass = '$password'";
$result = $mysqli->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $existingSession = $row['session_id'];

    // Check if the user is already logged in on another device
    if (!empty($existingSession) && $existingSession != session_id()) {
        // User is already logged in on another device, display an alert and redirect to index.php
        echo '<script>alert("Already logged in on another device. Try to logout on another device!");</script>';
        echo '<script>window.location.href = "index.php";</script>';
        exit();
    }

    // Set the new session ID for the user
    $_SESSION['user_id'] = $row['user_id'];
    $_SESSION['fname'] = $row['fname'];
    $_SESSION['lname'] = $row['lname'];
    $_SESSION['email'] = $row['email'];
    $_SESSION['date_added'] = $row['date_added'];
    $_SESSION['session_id'] = session_id();

    // Update the active_users table with the new session ID
    $updateSql = "UPDATE active_users SET session_id = '".session_id()."' WHERE email = '$email'";
    $mysqli->query($updateSql);

    // Redirect to dashboard.php
    header("Location: dashboard.php");
    exit();
} else {
    // Email and password do not match, display an alert and redirect to index.php
    echo '<script>alert("Invalid email or password.");</script>';
    echo '<script>window.location.href = "index.php";</script>';
    exit();
}
?>
