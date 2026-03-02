const table = document.getElementById("table_area");
let size = 2;
let level = 60;
let max_size = 50;
let score = 0;
let score_diplay = document.getElementById("score");
let is_pause = false;
let pause_btn = document.getElementById("pause-btn")
let game = document.getElementById("game");
let time_left = 60;
let time_display = document.getElementById("time");
let x;


function createTable() {
  score_diplay.innerHTML= `<h2>Score : ${score}<h2>`;
  table.innerHTML = ``;
  let total = size * size;
  let count = 0;
  let r = Math.floor(Math.random() * 200);
  let g = Math.floor(Math.random() * 200);
  let b = Math.floor(Math.random() * 200);
  let odd_cell = Math.floor(Math.random() * total) + 1;
  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");
      //   cell.textContent = `${i + 1},${j + 1}`;
      count++;
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      console.log(r, g, b);
      row.appendChild(cell);
      if (count == odd_cell) {
        cell.setAttribute("id", "odd_cell");
        cell.style.backgroundColor = `rgb(${r + level},${g + level},${b + level})`;
      }
    }
    table.appendChild(row);
  }
}

function start_timer(){
  clearInterval(x);
  x = setInterval(()=>{
    if(!is_pause){
      if(time_left > 0){
        time_display.innerHTML = `<h2>${time_left}</h2>`;
        time_left--;
      }
      if(time_left <= 0){
        clearInterval(x);
        alert(`Time UP!!!! Your Score is ${score}`);
        reset_game();
      }
    }
  },1000)
}

function reset_game(){

  clearInterval(x); 
  size = 2;
  level = 60;
  score = 0;
  time_left = 60;
  createTable();
  start_timer();
}

table.addEventListener("click", (e) => {
  if (e.target.id === "odd_cell") {
    if (size < max_size) {
      size++;
      score++;
      level = Math.max(10, level - 4);
      createTable();
      score_diplay.innerHTML= `<h2>Score : ${score}<h2>`;
    }
  }else{
    alert(`Opps!! Game Over Your Score is : ${score}`);
    reset_game();
  }
});

pause_btn.addEventListener("click",(e)=>{
  if(pause_btn.innerText == `Pause`){
    pause_btn.innerText = "Resume"
    is_pause = true;
    game.classList.add("game-disable");
  }
  else{
    pause_btn.innerText = "Pause"
    is_pause = false;
    game.classList.remove("game-disable");
  }
})

reset_game();
