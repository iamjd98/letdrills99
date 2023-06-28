<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/gened-free-questions.css">
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
      <form class="d-flex" role="search">
      <button class="btn bg-success text-white shadow" type="button" data-bs-toggle="modal" data-bs-target="#upgradeModal">Go Premium</button> 
      </form>
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


<div class="question-menu-wrapper">
  <div class="question-menu-con">

    <button onclick="goToMainMenu()" class="btn btn-sm btn-success w-25">Menu</button></a>
    <button onclick="refreshPage()" class="btn btn-sm btn-success w-25">Restart</button></a>
    <button class="btn btn-sm btn-success w-25" type="button" data-bs-toggle="modal" data-bs-target="#upgradeModal">Upgrade</button></a>

  </div>
</div>


<!-- Upgrade Modal -->
<div class="modal fade" id="upgradeModal" tabindex="-1" aria-labelledby="upgradeModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Upgrade</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p class="fw-bold" style="font-size:14px;">
          <center class="fw-bold text-danger">UNLOCK PREMIUM FEATURES</center> <br>
          <span class="fw-bold">PREMIUM PRICE:</span> <span class="text-success fw-bold"> P80 only</span> <br>
          <span class="fw-bold">PREMIUM FEATURES:</span>
          <br>
          <br>
         <span class="text-success">
        - Unlock More Questions (Gen Ed & Prof Ed) <br>
        - Options To Answer 50, 150, 300 Questions (Gen ED & Prof ED) <br>
        - Option to Answer drills with Time Limit (Practice your Testmanship )
        </span> 
        </p>

        <br>

        <p style="font-size:14px;" class="fw-bold">To sign up for a <span class="text-danger">PREMIUM ACCOUNT</span>, please follow the steps below:
        <br><br>
        <span class="text-success fw-bold">
          1. Pay the 80php through Gcash or Paymaya. <br>
          <span class="text-dark">
          Gcash Account: 09391567431 <br>
          Paymaya Account: 09391567431 <br>
          Account Name: Christine S.
          </span>

          <br>
          <br>

          2. Send Screenshot Proof of Payment and Send it to our Facebook Page. <br>
          <span class="text-dark">
         <a href="https://www.facebook.com/ldbtofficial/" target="_blank" >Click here to send us your proof of payment. (Our Facebook Page Link)</a> 
          </span>

          <br>
          <br>

          3. Wait for our Response for the creation of your Account.

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="showAnswerKeyUpgradeModal" tabindex="-1" aria-labelledby="showAnswerKeyUpgradeModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Upgrade</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span class="text-danger fw-bold">This is a premium feature. Please updrade to show Answer Key.</span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<script src="./js/gened-free-questions.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>