function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  
    var resultElement = document.getElementById("result");
  
    if (emailPattern.test(email)) {
      resultElement.className = "";
      resultElement.textContent = "Valid email address!";
    } else {
      resultElement.className = "error";
      resultElement.textContent = "Invalid email address!";
    }
  }
  