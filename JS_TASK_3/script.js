
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
    row.innerHTML = `<td><input type="checkbox" name="${element}" value="${element}"> ${element} </input></td>
                    <td><input type="radio" name="${element}_level value = "Beginer">Beginer</td>
                    <td><input type="radio" name="${element}_level value = "Mideator">Mideator</td>
                    <td><input type="radio" name="${element}_level value = "Expert">Expert</td>`
});

const lang_table = document.getElementById("lang");
const languages = ["Hindi" , "English" , "Gujarati"];

languages.forEach(e => {
  const row = lang_table.insertRow(-1);
  row.innerHTML = `<td><input type="checkbox" name="${e}">${e}</td>
                    <td><input type="checkbox" name="${e}_read" value="${e}_read">Read</td>
                    <td><input type="checkbox" name="${e}_write" value="${e}_write">Write</td>
                    <td><input type="checkbox" name="${e}_speak" value="${e}_speak">Speak</td>`
})
