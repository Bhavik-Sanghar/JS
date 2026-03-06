const eduTable = document.getElementById("edu");
const addEduBtn = document.getElementById("add_edu");
const delEduBtn = document.getElementById("del_edu");

const skills = ["PHP", "JAVA", "SQL", "Node"];
const languages = ["Hindi", "English", "Gujarati"];

let eduIndex = 0;

addEduBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tbody = eduTable.querySelector("tbody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" name="education[${eduIndex}][course]" required></td>
    <td><input type="text" name="education[${eduIndex}][year]" required></td>
    <td><input type="text" name="education[${eduIndex}][university]" required></td>
    <td><input type="text" name="education[${eduIndex}][result]" required></td>
  `;
  console.log(row);

  tbody.appendChild(row);
  eduIndex++;
});

delEduBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tbody = eduTable.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");

  if (rows.length > 2) {
    tbody.removeChild(rows[rows.length - 1]);
    eduIndex--;
  }
});

const workTable = document.getElementById("work");
const addWorkBtn = document.getElementById("add_work");
const delWorkBtn = document.getElementById("del_work");

let workIndex = 0;

addWorkBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tbody = workTable.querySelector("tbody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" name="work[${workIndex}][company]" required></td>
    <td><input type="date" name="work[${workIndex}][from]" required></td>
    <td><input type="date" name="work[${workIndex}][to]" required></td>
    <td><input type="text" name="work[${workIndex}][package]" required></td>
    <td><input type="text" name="work[${workIndex}][reason]" required></td>
    <td><input type="text" name="work[${workIndex}][ref_contact]" required></td>
    <td><input type="text" name="work[${workIndex}][ref_name]" required></td>
  `;

  tbody.appendChild(row);
  workIndex++;
});

delWorkBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const tbody = workTable.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");

  if (rows.length > 2) {
    tbody.removeChild(rows[rows.length - 1]);
    workIndex--;
  }
});

const tech_table = document.getElementById("tech");

skills.forEach((tech) => {

  const row = tech_table.insertRow(-1);

  row.innerHTML = `
    <td>
      <input type="checkbox" class="tech-main" data-tech="${tech}" 
      name="technologies[${tech.toLowerCase()}][selected]" value="${tech}"> ${tech}
    </td>

    <td>
      <input type="radio" class="tech-level" data-tech="${tech}" 
      name="technologies[${tech.toLowerCase()}][level]" value="Beginner" disabled> Beginner
    </td>

    <td>
      <input type="radio" class="tech-level" data-tech="${tech}" 
      name="technologies[${tech.toLowerCase()}][level]" value="Intermediate" disabled> Intermediate
    </td>

    <td>
      <input type="radio" class="tech-level" data-tech="${tech}" 
      name="technologies[${tech.toLowerCase()}][level]" value="Expert" disabled> Expert
    </td>
  `;

});

const lang_table = document.getElementById("lang");

languages.forEach((e) => {

  const row = lang_table.insertRow(-1);

  row.innerHTML = `
    <td>
      <input type="checkbox" class="lang-main" data-lang="${e}" name="languages[${e.toLowerCase()}][selected]"> ${e}
    </td>

    <td>
      <input type="checkbox" class="lang-level" data-lang="${e}" name="languages[${e.toLowerCase()}][read]" disabled> Read
    </td>

    <td>
      <input type="checkbox" class="lang-level" data-lang="${e}" name="languages[${e.toLowerCase()}][write]" disabled> Write
    </td>

    <td>
      <input type="checkbox" class="lang-level" data-lang="${e}" name="languages[${e.toLowerCase()}][speak]" disabled> Speak
    </td>
  `;
});

document.addEventListener("change", function(e){

  if(e.target.classList.contains("lang-main")){

    const lang = e.target.dataset.lang;

    const levels = document.querySelectorAll(
      `.lang-level[data-lang="${lang}"]`
    );

    levels.forEach(level => {
      level.disabled = !e.target.checked;

      if(!e.target.checked){
        level.checked = false;
      }
    });

  }

  if(e.target.classList.contains("tech-main")){

    const tech = e.target.dataset.tech;

    const levels = document.querySelectorAll(
      `.tech-level[data-tech="${tech}"]`
    );

    levels.forEach(level => {

      level.disabled = !e.target.checked;

      if(!e.target.checked){
        level.checked = false;
      }

    });

  }

});

// function showError(input, message) {
//   removeError(input);

//   const error = document.createElement("small");
//   error.style.color = "red";
//   error.innerText = message;

//   input.insertAdjacentElement("afterend", error);

//   input.addEventListener("keydown", () => {
//     removeError(input);
//   });

//   input.focus();
// }

// function removeError(input) {
//   const next = input.nextElementSibling;
//   if (next && next.tagName === "SMALL") {
//     next.remove();
//   }
// }

// function validateRequired(input, message) {
//   if (input.value.trim() === "") {
//     showError(input, message);
//     return false;
//   }
//   return true;
// }

// function validateMinLength(input, length, message) {
//   if (input.value.trim().length < length) {
//     showError(input, message);
//     return false;
//   }
//   return true;
// }

// function validateEmail(input) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!regex.test(input.value.trim())) {
//     showError(input, "Invalid email address");
//     return false;
//   }
//   return true;
// }

// function validateNumber(input, message) {
//   if (isNaN(input.value)) {
//     showError(input, message);
//     return false;
//   }
//   return true;
// }

// function validateYear(input) {
//   const year = parseInt(input.value);
//   const currentYear = new Date().getFullYear();

//   if (year > currentYear) {
//     showError(input, "Year cannot be in future");
//     return false;
//   }
//   return true;
// }

// function validateDateRange(fromInput, toInput) {
//   const from = new Date(fromInput.value);
//   const to = new Date(toInput.value);

//   if (from > to) {
//     showError(toInput, "End date must be after start date");
//     return false;
//   }

//   return true;
// }

// function validateRadio(name) {
//   const radios = document.getElementsByName(name);

//   for (let r of radios) {
//     if (r.checked) return true;
//   }

//   alert("Please select " + name);
//   return false;
// }

// function validateCheckboxGroup(name) {
//   const checkboxes = document.querySelectorAll(`input[name^="${name}"]`);

//   for (let c of checkboxes) {
//     if (c.checked) return true;
//   }

//   alert("Please select at least one " + name);
//   return false;
// }

// const form = document.getElementById("job-application");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let valid = true;

//   const f_name = form.elements["f_name"];
//   const l_name = form.elements["l_name"];
//   const email = form.elements["email"];
//   const phone = form.elements["phone"];
//   const address = form.elements["address_1"];

//   valid &= validateRequired(f_name, "First name required");
//   valid &= validateMinLength(f_name, 2, "First name too short");

//   valid &= validateRequired(l_name, "Last name required");
//   valid &= validateMinLength(l_name, 2, "Last name too short");

//   valid &= validateRequired(address, "Address required");

//   valid &= validateRequired(email, "Email required");
//   valid &= validateEmail(email);

//   valid &= validateNumber(phone, "Phone must be number");

//   valid &= validateRadio("gender");

//   valid &= validateCheckboxGroup("skills");

//   valid &= validateCheckboxGroup("languages");

//   let fromInputs = document.querySelectorAll(
//     "input[name^='work'][name$='[from]']",
//   );

//   fromInputs.forEach((fromInput) => {
//     let toInput = fromInput.parentElement.querySelector("input[name$='[to]']");

//     valid &= validateRequired(fromInput, "Date required");
//     valid &= validateRequired(toInput, "Date required");

//     valid &= validateYear(fromInput);
//     valid &= validateYear(toInput);

//     valid &= validateDateRange(fromInput, toInput);
//   });

//   valid &= validateDateRange(
//     form.elements["work[0][from]"],
//     form.elements["work[0][to]"],
//   );

//   valid &= validateYear(form.elements["education[0][year]"]);
//   valid &= validateMinLength(
//     form.elements["education[0][course]"],
//     2,
//     "Course name too short",
//   );
//   valid &= validateMinLength(
//     form.elements["education[0][university]"],
//     2,
//     "University name too short",
//   );

//   if (valid) {
//     form.submit();
//   }
// });

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();

//   //val for basic info
//   const f_name = form.elements["f_name"];
//   const l_name = form.elements["l_name"];
//   const designation = form.elements["designation"];
//   const address_1 = form.elements["address_1"];
//   const email = form.elements["email"];
//   const phone = form.elements["phone"];

//   if(f_name.value.trim().length < 2){
//     console.log("First name is to short");
//     let error = document.createElement("small");
//     error.style.color = "red";
//     error.innerHTML = `First name is to short`;
//     f_name.insertAdjacentElement("afterend", error);
//     // setTimeout(()=>{
//     //   error.remove();
//     // },2000)
//     f_name.addEventListener("keydown",(e)=>{
//       error.remove();
//     })
//     f_name.focus();
//   }

//    if(l_name.value.trim().length < 2){
//     // console.log("Last name is to short");
//     let error = document.createElement("small");
//     error.innerHTML = `Last name is to short`;
//     error.style.color = "red";
//     l_name.insertAdjacentElement("afterend", error);
//     // setTimeout(()=>{
//     //   error.remove();
//     // },2000)
//     l_name.addEventListener("keydown",(e)=>{
//       error.remove();
//     })
//     l_name.focus();
//   }

//    if(address_1.value.trim() === ""){
//     // console.log("First name is to short");
//     let error = document.createElement("small");
//     error.innerHTML = `Address cant be empty`;
//     error.style.color = "red";
//     address_1.insertAdjacentElement("afterend", error);
//     // setTimeout(()=>{
//     //   error.remove();
//     // },2000)
//     address_1.addEventListener("keydown",(e)=>{
//       error.remove();
//     })
//     address_1.focus();
//   }
//     if(email.value.trim() !== "" && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
//       let error = document.createElement("small");
//       error.innerHTML = `Email is not valid`;
//       error.style.color = "red";
//       email.insertAdjacentElement("afterend", error);
//       email.focus();
//       email.addEventListener("keydown",(e)=>{
//         error.remove();
//       })
//     }
// })
