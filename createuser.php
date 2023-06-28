<?php
require_once('connection.php'); // Include the database connection file

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the user details from the form submission
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Get the current timestamp for the "date_added" column
    $dateAdded = date('Y-m-d H:i:s');

    // Prepare the SQL statement to insert the user details into the active_users table
    $sql = "INSERT INTO active_users (fname, lname, email, pass, date_added) VALUES (?, ?, ?, ?, ?)";
    
    // Create a prepared statement
    $stmt = $mysqli->prepare($sql);
    
    // Bind the parameters and execute the statement
    $stmt->bind_param("sssss", $fname, $lname, $email, $password, $dateAdded);
    $stmt->execute();
    
    // Check if the insertion was successful
    if ($stmt->affected_rows > 0) {
        $message = "User created successfully!";
        $refreshPage = true;
    } else {
        $message = "Error creating user.";
        $refreshPage = false;
    }

    // Close the statement
    $stmt->close();
}

// Show alert and refresh the page if necessary
if (isset($message)) {
    echo "<script>alert('$message');</script>";
    if ($refreshPage) {
        echo "<script>window.location.href = 'admincreateuser.php';</script>";
    }
}
?>
