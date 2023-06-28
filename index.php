<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css">
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
        <li class="nav-item">
          <a class="nav-link active fs-5 text-light-emphasis ms-2 me-2" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#ppModal">Privacy Policy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5 text-light-emphasis ms-2 me-2" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#faqModal">FAQ's</a>
        </li>
      </ul>
      <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" class="text-decoration-none"><span class="me-3 fs-5">Log-in</span></a>
      <form class="d-flex" role="search">
      <button class="btn bg-success text-white shadow mt-2" type="button" data-bs-toggle="modal" data-bs-target="#upgradeModal">Go Premium</button> 
      </form>
    </div>
  </div>
</nav>
</div>



<div id="menu-container" class="menu-container m-0 p-0 mt-5 row">

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a href="gened-free-questions.php">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">FREE Gen Ed Test Drill</span><br>
        <span class="text-muted">(50-item Drill)</span>
        </button>
        </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
          <a href="profed-free-questions.php">
          <button  class="button-select  shadow-lg">
          <span class="fs-6 fw-bold">FREE Prof Ed Test Drill</span><br>
          <span class="text-muted">(50-item Drill)</span>
          </button>
          </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a data-bs-toggle="modal" data-bs-target="#upgradeModal" href="#">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Gen Ed Test Drill</span><br>
        <span class="text-muted">(Premium - Unlock More Questions)</span>
        </button>
        </a>
      </div> 

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
          <a data-bs-toggle="modal" data-bs-target="#upgradeModal" href="#">
          <button  class="button-select  shadow-lg">
          <span class="fs-6 fw-bold">Prof Ed Test Drill</span><br>
          <span class="text-muted">(Premium - Unlock More Questions)</span>
          </button>
          </a>
      </div>

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a data-bs-toggle="modal" data-bs-target="#upgradeModal" href="#">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Timed Gen Ed Test Drill</span><br>
        <span class="text-muted">(Premium - Unlock More Questions)</span>
        </button>
        </a>
      </div> 

      <div class="buttons d-flex justify-content-center col-lg-4 col-md-6 m-0 p-0">
        <a data-bs-toggle="modal" data-bs-target="#upgradeModal" href="#">
        <button  class="button-select  shadow-lg">
        <span class="fs-6 fw-bold">Timed Prof Ed Test Drill</span><br>
        <span class="text-muted">(Premium - Unlock More Questions)</span>
        </button>
        </a>
    </div> 

</div>




<!-- Upgrade Modal -->
<div class="modal fade" id="upgradeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">THIS IS A PREMIUM FEATURE</h1>
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



        </span> 
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form method="post" action="userlogin.php">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" name="email" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" name="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Log In</button>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="ppModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Privacy Policy</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h1>LDBT Privacy Policy</h1>

  
  <h4>1. Information We Collect:</h4>
  <p>a. We collect personal information, such as your name and email address, when you upgrade to a premium account. This information is necessary to process the premium account subscription.</p></p>

  <h4>2. Use of Collected Information:</h4>
  <p>We use the collected personal information solely for the purpose of creating and managing your login credentials for accessing our services. Your name and email address are used to uniquely identify your account and enable secure access to the Let Drills by Tine web app.</p>

  <h4>3. Data Retention:</h4>
  <p>a. Free Account: No personal information is collected if you are using the free version of the web app. Any data associated with your usage is retained only during your active session and is not stored.</p>
  <p>b. Premium Account Data: For users with premium accounts, we automatically delete the personal information three months after the premium account subscription expires. This ensures that your personal data is not retained longer than necessary.</p>


  <h4>4. Data Sharing:</h4>
  <p>a. We do not sell, trade, or rent your personal information to third parties, except as described in this Privacy Policy.</p>
  <p>b. We may disclose personal information if required by law or in good faith belief that such action is necessary to comply with legal obligations, protect our rights, or investigate potential violations.</p>

  <h4>5. Children's Privacy:</h4>
  <p>Let Drills by Tine is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such information being collected, we will take steps to delete it immediately.</p>

  <h4>7. Updates to Privacy Policy:</h4>
  <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the revised policy on our website. We encourage you to review this Privacy Policy periodically.</p>

  <h4>8. Contact Us:</h4>
  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at [contact information].</p>
  <p>By using Let Drills by Tine, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="faqModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Privacy Policy</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h1>Frequently Asked Questions (FAQs)</h1>

<h4>1. Can I use the Let Drills by Tine web app for free?</h4>
<p>Yes, the Let Drills by Tine web app has a free version. Only premium users are given an account to access the app's Premium features and content.</p>

<h4>2. How do I get an account?</h4>
<p>We create an account for you once you decide to upgrade to a premium account. Simply sign up for the premium account and we will provide you with the account details.</p>

<h4>3. How do I upgrade to a premium account?</h4>
<p>To upgrade to a premium account, simply click the "Go Premium" button on the homepage. Follow the instructions provided to complete the upgrade process.</p>

<h4>4. How long does the premium account subscription last?</h4>
<p>The premium account subscription lasts for 3 months and is available for only P88.</p>

<h4>5. Can I cancel my premium account subscription?</h4>
<p>No, once you have made the payment for your premium account, you cannot cancel the subscription. However, your account will be automatically deleted after 3 months when it expires.</p>

<h4>6. How can I reset my password?</h4>
<p>To reset your password, please visit our Facebook page and contact us through Facebook Messenger. Click the following link: <a href="https://www.facebook.com/ldbtofficial/" target="_blank">Facebook Page</a></p>

<h4>7. Is my personal information secure?</h4>
<p>Yes, your personal information is secure. We only use it for your login purposes. For more information, please read our privacy policy.</p>

<h4>8. How can I contact you?</h4>
<p>You can contact us through our Facebook Messenger. Please visit our Facebook page: <a href="https://www.facebook.com/ldbtofficial/" target="_blank">Facebook Page</a></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>