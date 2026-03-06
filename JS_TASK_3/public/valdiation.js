function showError(input, message) {
  removeError(input);

  const error = document.createElement("small");
  error.style.color = "red";
  error.innerText = message;

  input.insertAdjacentElement("afterend", error);

  input.addEventListener("keydown", () => {
    removeError(input);
  });

  input.focus();
}

function removeError(input) {
  const next = input.nextElementSibling;
  if (next && next.tagName === "SMALL") {
    next.remove();
  }
}

function validateRequired(input, message) {
  if (input.value.trim() === "") {
    showError(input, message);
    return false;
  }
  return true;
}

function validateMinLength(input, length, message) {
  if (input.value.trim().length < length) {
    showError(input, message);
    return false;
  }
  return true;
}

function validateEmail(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(input.value.trim())) {
    showError(input, "Invalid email address");
    return false;
  }
  return true;
}

function validateNumber(input, message) {
  if (isNaN(input.value)) {
    showError(input, message);
    return false;
  }
  return true;
}

function validateYear(input) {
  const year = parseInt(input.value);
  const currentYear = new Date().getFullYear();

  if (year > currentYear) {
    showError(input, "Year cannot be in future");
    return false;
  }
  return true;
}

function validateDateRange(fromInput, toInput) {
  const from = new Date(fromInput.value);
  const to = new Date(toInput.value);

  if (from > to) {
    showError(toInput, "End date must be after start date");
    return false;
  }

  return true;
}

function validateRadio(name) {
  const radios = document.getElementsByName(name);

  for (let r of radios) {
    if (r.checked) return true;
  }

  alert("Please select " + name);
  return false;
}

function validateCheckboxGroup(name) {
  const checkboxes = document.querySelectorAll(`input[name^="${name}"]`);

  for (let c of checkboxes) {
    if (c.checked) return true;
  }

  alert("Please select at least one " + name);
  return false;
}


const form = document.getElementById("job-application");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  valid = valid && validateBasicInfo();
  valid = valid && validateEducation();
  valid = valid && validateWork();
  valid = valid && validateReferences();
  valid = valid && validatePreferences();

  if(valid){
    form.submit();
  }
});

function validateBasicInfo(){

  let valid = true;

  const requiredFields = [
    "f_name","l_name","address_1","email",
    "phone","city","zip_code","dob"
  ];

  requiredFields.forEach(name=>{
    const field = form.elements[name];
    valid = valid && validateRequired(field,"This field is required");
  });

  valid = valid && validateMinLength(form.elements["f_name"],2,"First name too short");
  valid = valid && validateMinLength(form.elements["l_name"],2,"Last name too short");

  valid = valid && validateEmail(form.elements["email"]);
  valid = valid && validateNumber(form.elements["phone"]);

  valid = valid && validateRadio("gender");

  return valid;
}

function validateEducation(){

  let valid = true;

  const courses = document.querySelectorAll("input[name^='education'][name$='[course]']");
  const years = document.querySelectorAll("input[name^='education'][name$='[year]']");
  const universities = document.querySelectorAll("input[name^='education'][name$='[university]']");

  courses.forEach(course=>{
    valid = valid && validateMinLength(course,2,"Course name too short");
  });

  universities.forEach(uni=>{
    valid = valid && validateMinLength(uni,2,"University name too short");
  });

  years.forEach(year=>{
    valid = valid && validateYear(year);
  });

  return valid;
}

function validateWork(){

  let valid = true;

  const fromInputs = document.querySelectorAll("input[name^='work'][name$='[from]']");

  fromInputs.forEach(fromInput => {

    const row = fromInput.closest("tr");
    const toInput = row.querySelector("input[name$='[to]']");

    valid = valid && validateRequired(fromInput,"Required");
    valid = valid && validateRequired(toInput,"Required");

    valid = valid && validateDateRange(fromInput,toInput);

  });

  return valid;
}

function validateReferences(){

  let valid = true;

  const refs = [
    "ref_name_1","ref_con_1","ref_rel_1",
    "ref_name_2","ref_con_2","ref_rel_2"
  ];

  refs.forEach(name=>{
    const field = form.elements[name];

    if(field.value.trim() !== ""){
      valid = valid && validateMinLength(field,2,"Too short");
    }
  });

  return valid;
}

function validatePreferences(){

  let valid = true;

  valid = valid && validateNumber(form.elements["current_CTC"]);
  valid = valid && validateNumber(form.elements["expacted_CTC"]);

  return valid;
}