
const eduTable = document.getElementById("edu");
const addEduBtn = document.getElementById("add_edu");
const delEduBtn = document.getElementById("del_edu");

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

const skills = ["PHP" ,"JAVA" , "SQL","Node"];

skills.forEach(element => {
    const row = tech_table.insertRow(-1);
    row.innerHTML = `<td><input type="checkbox" name="${element}"="${element}"> ${element} </input></td>
                    <td><input type="radio" name="${element}_level = "Beginer">Beginer</td>
                    <td><input type="radio" name="${element}_level = "Mideator">Mideator</td>
                    <td><input type="radio" name="${element}_level = "Expert">Expert</td>`
});

const lang_table = document.getElementById("lang");
const languages = ["Hindi" , "English" , "Gujarati"];

languages.forEach(e => {
  const row = lang_table.insertRow(-1);
  row.innerHTML = `<td><input type="checkbox" name="${e}">${e}</td>
                    <td><input type="checkbox" name="${e}_read"="${e}_read">Read</td>
                    <td><input type="checkbox" name="${e}_write"="${e}_write">Write</td>
                    <td><input type="checkbox" name="${e}_speak"="${e}_speak">Speak</td>`
})



function showError(message) {
    const errorDiv = document.getElementById("errorBox");
    errorDiv.innerHTML += `<p>${message}</p>`;
}

const form = document.getElementById("job-application");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  //val for basic info
  const f_name = form.elements["f_name"];
  const l_name = form.elements["l_name"];
  const designation = form.elements["designation"];
  const address_1 = form.elements["address_1"];
  const email = form.elements["email"];
  const phone = form.elements["phone"];

  if(f_name.value.trim().length < 2){
    console.log("First name is to short");
    let error = document.createElement("small");
    error.innerHTML = `First name is to short`;
    f_name.insertAdjacentElement("afterend", error);
    // setTimeout(()=>{
    //   error.remove();
    // },2000)
    f_name.addEventListener("keydown",(e)=>{
      error.remove();
    })
    f_name.focus();
  }

})
