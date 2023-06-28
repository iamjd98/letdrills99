<?php
include 'session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/gened-prem.css">
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
      <span class="fw-bold fs-6 me-5">Hello teacher <span class="teacher-name"><?php echo $fname . ' ' . $lname; ?>!</span> </span>
    </div>
  </div>
</nav>
</div>



<div id="question-wrapper" class="question-wrapper">
<div id="quiz-container" class="quiz-container shadow-lg">
  <div id="question-container"></div>
  <div class="m-0 p-0 row">
    <button id="prev-btn" class="btn btn-sm btn-warning m-1" disabled>Previous</button>
    <button id="next-btn" class="btn btn-sm btn-primary m-1">Next</button>
    <button id="submit-btn" class="btn btn-sm btn-success m-1">Submit</button>
  </div>
  <div id="result"></div>
</div>
</div>


<center><div><h3 id="countdown"></h3></div>
</center>

<div class="question-menu-wrapper">
  <div class="question-menu-con">

    <button onclick="goToMainMenu()" class="btn btn-sm btn-success w-25">Menu</button></a>
    <button onclick="refreshPage()" class="btn btn-sm btn-success w-25">Restart</button></a>
    <button onclick="TimedProfEdMenuPage()" class="btn btn-sm btn-success w-25" type="button">Gen Ed Menu</button>

  </div>
</div>


<script src="./js/profed-timed-50.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>