let size = 2;
let max_size = 1000;
let score = 0;
let level = 40;
let time_left = 600;
// timer_id = null;
is_pause = false;

let current_width = window.innerWidth - 20; // Subtract padding/margin
let current_height = (window.innerHeight * 0.75) - 20;

let spacing = 4; 
let availableW = current_width - (spacing * (size + 1));
let availableH = current_height - (spacing * (size + 1));


// console.log(aval_height,aval_width);


const table = document.getElementById("grid");
const score_display = document.getElementById("score");
const time_display = document.getElementById("time");
const btn = document.getElementById("pause-btn");


function random_color(){
    return{
        r : Math.floor(Math.random()*200),
        g : Math.floor(Math.random()*200),
        b : Math.floor(Math.random()*200),
        a : Math.floor(Math.random()*100)
    };
}

function genrate_grid(){
    let cellsize = Math.floor(Math.min(current_width / size, current_height / size));
    table.innerHTML = "";
    let base_color = random_color();

    let total = size * size;
    let odd_one = Math.floor(Math.random() * total);
    let count = 0;cellsize

    
    for(i = 0;i < size;i++){
        const row = document.createElement("tr");
        for(j = 0; j < size;j++){
            const cell = document.createElement("td");
            // cell.innerText = "hello";
            let r = base_color.r;
            let g = base_color.g;
            let b = base_color.b;
            let a = Math.max(50,base_color.a);
            if(count == odd_one){
             r = Math.min(255,r-level);   
             g = Math.min(255,g-level);   
             b = Math.min(255,b-level);
            //  a = Math.min(100,a-level);
             cell.setAttribute("id" , "correct")  
            }
            cell.style.backgroundColor = `rgba(${r},${g},${b},${a}%)`;
            cell.style.width = `${cellsize}px`;
            cell.style.height = `${cellsize}px`;
            // console.log(r,g,b);
            row.appendChild(cell);
            count++;
        }
        table.appendChild(row);
        // auto_time();
    }
};


function start_timer() {
    timer_id = setInterval(() => {
        if (!is_pause){    
            time_left--;
            time_display.innerText = `Time left: ${time_left}`;
        }
        if (time_left <= 0) {
            clearInterval(timer_id);
            alert(`Time UP!! Your score is ${score}`);
            reset_game();
        }
    }, 1000);
}

function reset_game() {
    size = 2;
    score = 0;
    level = 40;
    time_left = 600;
    score_display.innerText = `Score: ${score}`;
    time_display.innerText = `Time left: ${time_left}`;
    genrate_grid();
    start_timer();
}


table.addEventListener("click", (e) => {
    if(e.target.id == "correct"){
        score++;
        if(size < max_size){
            size++;
        }
        // level = Math.max(15,level-=5);
        score_display.innerText  = `Score : ${score}`
        genrate_grid();
    }else{
        alert(`Wrong! Game Over. Score: ${score}`);
        reset_game();
    }
});

btn.addEventListener("click" ,(e) =>{
    if(is_pause){
        btn.innerText = "Pause"
        is_pause = false
        table.classList.remove("disable-table")
    }else{
        btn.innerText = "Resume"
        is_pause = true;
        table.classList.add("disable-table")
    }
})

reset_game();