<?php
include 'session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>LET DRILLS 99</title>
</head>
<body>

<div class="nav-wrapper container-fluid mx-auto m-0 p-0">
<nav class="navbar navbar-expand-lg shadow w-100">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width="90%" src="./assets/logo.png" alt="LET DRILLS 99"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      </ul>
      <span class="fw-bold fs-6">Hello teacher <span class="teacher-name"><?php echo $fname . ' ' . $lname; ?>!</span> </span>
    </div>
  </div>
</nav>
</div>


<center><h3 class="mt-5 text-success">Main Menu</h3></center>



<div id="menu-container" class="menu-container m-0 p-0 mt-5 row">

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a href="gened-menu.php">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Gen Ed Test Drill</span><br>
        <span class="text-muted">(More Questions)</span>
        </button>
        </a>
      </div> 

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
          <a href="profed-menu.php">
          <button  class="button-select  shadow-lg">
          <span class="fs-6 fw-bold">Prof Ed Test Drill</span><br>
          <span class="text-muted">(More Questions)</span>
          </button>
          </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a href="gened-timed-menu.php">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Timed Gen Ed Test Drill</span><br>
        <span class="text-muted">(More Questions + Time Limit)</span>
        </button>
        </a>
      </div> 

      <div class="buttons d-flex justify-content-center col-lg-12 col-md-12 m-0 p-0">
        <a href="profed-timed-menu.php">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Timed Prof Ed Test Drill</span><br>
        <span class="text-muted">(More Questions + Time Limit)</span>
        </button>
        </a>
    </div> 


    <center><button id="signOutBtn" class="signOutBtn mt-3">Sign Out<i class="ms-2 bi bi-arrow-left"></i></button></center>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script src="./js/dashboard.js"></script>
</body>
</html>