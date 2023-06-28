<?php
include 'session_admin.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/admincreateuser.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Admin - Create User</title>
</head>
<body class="row">

<center>
<button type="button" class="btn btn-dark" id="delete-old-accounts-btn">Delete Old Accounts</button> 
</center>


<div class="input-wrapper shadow rounded col-3">
        <form action="createuser.php" method="post">
        First Name: <br>
        <input class="create-user-input" type="text" name="fname" placeholder="Enter First Name">
        <br>
        Last Name: <br>
        <input class="create-user-input" type="text" name="lname" placeholder="Enter Last Name">
        <br>
        Email: <br>
        <input class="create-user-input" type="email" name="email" placeholder="Enter Email">
        <br>
        Password: <br>
        <input id="userpasswordinput" class="create-user-input" type="text" name="password" placeholder="Click Generate Password">
        <br> 
        <button type="button" class="generate-btn">Generate Pass</button>
        <br>

        <center><button type="submit" class="btn btn-success btn-medium mt-3">Create Account</button></center>
        </form>
    
</div>


<center>
<button type="button" class="admin-signout-btn btn btn-danger" id="admin-signout-btn">Log Out</button> 
</center>



<script src="./js/admincreateuser.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script>
    // Attach a click event listener to the button
document.getElementById('delete-old-accounts-btn').addEventListener('click', function() {
  // Send an AJAX request to the PHP script to delete the old accounts
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'autodeleteusers.php', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Request was successful
      alert('Old accounts successfully deleted.');
    } else {
      // Request failed
      alert('Failed to delete old accounts.');
    }
  };
  xhr.send();
});


document.getElementById("admin-signout-btn").addEventListener("click", function() {
  // Send an AJAX request to the PHP script to destroy the session
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "admin_signout.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Redirect to the index page or perform any other actions upon successful sign out
      window.location.href = "adminsignin.php";
    }
  };
  xhr.send();
});
</script>
</body>
</html>