function validateFeedbackForm() {
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const designation = document
    .getElementById("designation")
    .value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (email === "" || name === "" || designation === "" || feedback === "") {
    alert("Please fill in all fields.");
    return;
  }
  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // You can add additional validation logic here if needed.

  // If all validations pass, submit the form
  document.getElementById("contact-form").submit();
}
