// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("job-application");
  const errorBox = document.getElementById("errorBox");

  // Utility function to create error message
  function showError(input, message) {
    const small = document.createElement("small");
    small.style.color = "red";
    small.textContent = message;
    small.classList.add("error-msg");
    input.parentNode.appendChild(small);
  }

  // Remove all existing error messages
  function clearErrors() {
    const errors = document.querySelectorAll(".error-msg");
    errors.forEach(err => err.remove());
    errorBox.innerHTML = "";
  }

  // Validate the form on submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let firstInvalidField = null;
    let isValid = true;

    // --- Basic Info Validation ---
    const f_name = form.elements["f_name"];
    if (f_name.value.trim().length < 2) {
      showError(f_name, "First name must be at least 2 characters");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = f_name;
    }

    const l_name = form.elements["l_name"];
    if (l_name.value.trim().length < 2) {
      showError(l_name, "Last name must be at least 2 characters");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = l_name;
    }

    const email = form.elements["email"];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email address");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = email;
    }

    const phone = form.elements["phone"];
    if (!/^\d{7,15}$/.test(phone.value.trim())) {
      showError(phone, "Enter a valid phone number (7-15 digits)");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = phone;
    }

    const gender = form.elements["gender"];
    const genderChecked = form.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
      errorBox.innerHTML += "<p style='color:red'>Select gender</p>";
      isValid = false;
    }

    // --- Education Validation (dynamic rows) ---
    const eduRows = document.querySelectorAll("#edu tr input");
    eduRows.forEach(input => {
      if (input.value.trim() === "") {
        showError(input, "This field is required");
        isValid = false;
        if (!firstInvalidField) firstInvalidField = input;
      }
    });

    // --- Work Validation (dynamic rows) ---
    const workRows = document.querySelectorAll("#work tr input");
    workRows.forEach(input => {
      if (input.value.trim() === "") {
        showError(input, "This field is required");
        isValid = false;
        if (!firstInvalidField) firstInvalidField = input;
      }
    });

    // --- Preferences ---
    const notice = form.elements["notice_period"];
    if (notice.value.trim() === "") {
      showError(notice, "Notice period is required");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = notice;
    }

    const currentCTC = form.elements["current_CTC"];
    if (currentCTC.value.trim() === "" || isNaN(currentCTC.value.trim())) {
      showError(currentCTC, "Current CTC must be a number");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = currentCTC;
    }

    const expectedCTC = form.elements["expacted_CTC"];
    if (expectedCTC.value.trim() === "" || isNaN(expectedCTC.value.trim())) {
      showError(expectedCTC, "Expected CTC must be a number");
      isValid = false;
      if (!firstInvalidField) firstInvalidField = expectedCTC;
    }

    // --- If invalid, focus first invalid field ---
    if (!isValid) {
      if (firstInvalidField) firstInvalidField.focus();
      return false; // stop submission
    }

    // --- If valid, you can submit form via JS or allow default submission ---
    alert("Form submitted successfully!");
    form.submit(); // or send via AJAX
  });
});