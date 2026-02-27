const table = document.getElementById("table_area");
let size = 2;

let availableHeight = window.innerHeight - 100; // Subtracting 100px for score display and margins
let availableWidth = window.innerWidth;

let random_color = () =>{
    return {
        r : Math.floor(Math.random() * 200),
        g : Math.floor(Math.random() * 200),
        b : Math.floor(Math.random() * 200)
    }
};


function createTable() {
  table.innerHTML = ``;
  let total = size * size;
  let count = 0;
  let r = random_color().r;
  let g = random_color().g;
  let b = random_color().b;
  let odd_cell = Math.floor(Math.random() * total);
  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");
    //   cell.textContent = `${i + 1},${j + 1}`;
      if(count == odd_cell){
        cell.style.opacity = 0.6;
      }
      count++;
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

table.addEventListener("click", () => {
  size++;
  createTable();
});

createTable();
