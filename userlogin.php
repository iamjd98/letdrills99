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
    $user_id = $row['user_id'];

    // Generate a unique login token
    $login_token = bin2hex(random_bytes(16));

    // Store the login token in the active_users table
    $updateSql = "UPDATE active_users SET login_token = '$login_token' WHERE user_id = '$user_id'";
    $mysqli->query($updateSql);

    // Set the session variables
    $_SESSION['user_id'] = $user_id;
    $_SESSION['fname'] = $row['fname'];
    $_SESSION['lname'] = $row['lname'];
    $_SESSION['email'] = $row['email'];
    $_SESSION['date_added'] = $row['date_added'];
    $_SESSION['login_token'] = $login_token;

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
