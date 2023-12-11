function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation for required fields
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Additional custom validations can be added here

  // If all validations pass, submit the form
  document.getElementById("contact-form").submit();
}
