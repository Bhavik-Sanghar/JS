let size = 2;
let level = 50;
let score = 0;
let time = 100;
let max_size = 10;
let is_pause = false;
const table = document.getElementById("game_table");

let score_display = document.getElementById("score_display");
let time_display = document.getElementById("time_display");
time_display.innerHTML = `Time : ${time}`;

function random_color_maker() {
  return {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  };
}

function resetGame() {
  size = 2;
  level = 50;
  score = 0;
  time = 100;
  make_grid();
  start_timer();
}

function start_timer() {
  timeID = setInterval(() => {
    if (!is_pause) {
      time--;
      time_display.innerHTML = `Time : ${time}`;
    }

    if (time <= 0) {
      clearInterval(timeID);
      alert("Time up!!!");
      resetGame();
      time_display.innerHTML = `Time : ${time}`;
    }
  }, 1000);
}

function make_grid() {
  table.innerHTML = ``;

  let total = size * size;
  let count = 0;

  let odd_cell = Math.floor(Math.random() * total) + 1;

  let { r, g, b } = random_color_maker();

  for (let i = 0; i < size; i++) {
    let row = table.insertRow();
    for (let j = 0; j < size; j++) {
      let cell = row.insertCell();
      count++;
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      if (count == odd_cell) {
        cell.style.backgroundColor = `rgb(${r - level},${g - level},${b - level})`;
        cell.setAttribute("id", "oddCell");
      }
    }
  }
}

document.getElementById("game_area").addEventListener("click", (e) => {
  if (e.target.id == "oddCell") {
    score = score + 1;
    if (size < max_size) {
      size++;
    }
    level -= 5;
    score_display.innerHTML = `Score : ${score}`;
    make_grid();
  } else {
    alert("game over try agian!!");
    resetGame();
    score_display.innerHTML = `Score : ${score}`;
  }
});

document.getElementById("btn").addEventListener("click", (e) => {
  if (!is_pause) {
    document.getElementById("btn").innerHTML = `Resume`;
    is_pause = true;
    table.classList.add("disable-table");
  } else {
    document.getElementById("btn").innerHTML = `Pause`;
    is_pause = false;
    table.classList.remove("disable-table");
  }
});

resetGame();
