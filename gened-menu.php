<?php
include 'session.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/gened-menu.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Gen Ed Menu</title>
</head>
<body>

<div class="nav-wrapper container-fluid mx-auto m-0 p-0">
<nav class="navbar navbar-expand-lg shadow w-100 fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width="90%" src="./assets/logo.png" alt="LET DRILLS 99"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

      </ul>
      <span class="fw-bold fs-6 me-5">Hello teacher <span class="teacher-name"><?php echo $fname . ' ' . $lname; ?>!</span> </span>
    </div>
  </div>
</nav>
</div>



<div id="menu-container" class="menu-container m-0 p-0 row">

      <center><h3 class="mt-5 text-success">General Education Drills</h3></center>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a href="gened-50.php">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">50 item Gen Ed Test</span><br>
        <span class="text-muted">(Random Questions)</span>
        </button>
        </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
          <a href="gened-150.php">
          <button  class="button-select  shadow-lg">
          <span class="fs-6 fw-bold">150 item Gen Ed Test</span><br>
          <span class="text-muted">(Random Questions)</span>
          </button>
          </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a href="#" data-bs-toggle="modal" data-bs-target="#300Drills">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">300 item Gen Ed Test</span><br>
        <span class="text-muted">(Random Questions)</span>
        </button>
        </a>
      </div> 

      <center><button onClick="goToMainMenu()" class="backToMenuBtn">Back to Main Menu <i class="bi bi-arrow-left"></i></button></center>

</div>

<!-- Upgrade Modal -->
<div class="modal fade" id="300Drills" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Gen Ed 300 Question Drill</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      This feature is coming soon!  

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script src="./js/main-menus.js"></script>
</body>
</html>