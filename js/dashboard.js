document.getElementById("signOutBtn").addEventListener("click", function() {
  // Send an AJAX request to the PHP script to destroy the session
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "signout.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Redirect to the index page or perform any other actions upon successful sign out
      window.location.href = "index.php";
    }
  };
  xhr.send();
});

