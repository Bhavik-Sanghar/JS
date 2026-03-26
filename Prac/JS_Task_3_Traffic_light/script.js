const signals = {
    N : {red : "NR" , green : "NG" , yellow : "NY" , time : "NT"},
    S : {red : "SR" , green : "SG" , yellow : "SY" , time : "ST"},
    E : {red : "ER" , green : "EG" , yellow : "EY" , time : "ET"},
    W : {red : "WR" , green : "WG" , yellow : "WY" , time : "WT"}
}



Object.keys(signals).forEach(dir =>{
    Object.keys(signals[dir]).forEach(type =>{
        signals[dir][type] = document.getElementById(signals[dir][type])
    });
});

total_time = 120;


function updateTraffic(){
    let x = setInterval((e)=>{
        total_time--;
        // const total_time_show = document.getElementById("XT");
        // // console.log(total_time_shaow);
        // total_time_show.innerText = `${total_time}`
        if(total_time < 0) total_time = 119;

        if(total_time >= 90) signalHandler("N" , total_time - 90);
        else if(total_time >= 60) signalHandler("W" , total_time - 60);
        else if(total_time >= 30) signalHandler("S" , total_time - 30);
        else signalHandler("E" , total_time);
    },1000)
}


function signalHandler(activeDir , timeLeft){
    Object.values(signals).forEach(s=>{
        s.red.style.backgroundColor = `red`;
        s.green.style.backgroundColor = `#333`;
        s.yellow.style.backgroundColor = `#333`;
        s.time.innerText = ``;
    })

    const active_s = signals[activeDir];
    active_s.time.innerText = timeLeft;

    if(timeLeft > 5){
        active_s.green.style.backgroundColor = `green`
        active_s.red.style.backgroundColor = `#333`
    }else if(timeLeft >0){
        active_s.yellow.style.backgroundColor = `yellow`
        active_s.red.style.backgroundColor = `#333`
    }
}

updateTraffic();



