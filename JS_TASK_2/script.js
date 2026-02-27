const NR = document.getElementById("N-red");
const NG = document.getElementById("N-green");
const NY = document.getElementById("N-yellow");
const NT = document.getElementById("N-time")

const SR = document.getElementById("S-red");
const SG = document.getElementById("S-green");
const SY = document.getElementById("S-yellow");
const ST = document.getElementById("S-time");

const ER = document.getElementById("E-red");
const EG = document.getElementById("E-green");
const EY = document.getElementById("E-yellow");
const ET = document.getElementById("E-time");

const WR = document.getElementById("W-red");
const WG = document.getElementById("W-green");
const WY = document.getElementById("W-yellow");
const WT = document.getElementById("W-time");

let x;
let total_time = 121;
let activeInterval;

function start_signal() {

    let y = setInterval(() => {
        total_time--;
        if (total_time === 120){
            north_signal();
        } 
        if (total_time === 90) west_signal();
        if (total_time === 60) south_signal();
        if (total_time === 30) east_signal();

        if (total_time <= 0) {
            total_time = 120;
            north_signal();
        }
        if (total_time > 90 && total_time <=120){
            NT.innerText = `${total_time - 91}`
        }
        if (total_time > 60 && total_time <=90){
            WT.innerText = `${total_time - 61}`
        }
        if (total_time > 30 && total_time <=60){
            ST.innerText = `${total_time - 31}`
        }
        if (total_time > 0 && total_time <=30){
            ET.innerText = `${total_time - 1}`
        }
    }, 1000);
}

start_signal();

function stopActiveSignal() {
    if (activeInterval) {
        clearInterval(activeInterval);
    }
}

function north_signal() {
    stopActiveSignal();
    resetSignals();
    let each_signal_time = 30;
    activeInterval = setInterval(() => {
        each_signal_time--;
        if (each_signal_time > 5) {
            NG.style.backgroundColor = "Green";
            NY.style.backgroundColor = "#333";
            NR.style.backgroundColor = "#333";
        } else if (each_signal_time > 0) {
            NY.style.backgroundColor = "Yellow";
            NG.style.backgroundColor = "#333";
        } else {
            NR.style.backgroundColor = "Red";
            NY.style.backgroundColor = "#333";
            NG.style.backgroundColor = "#333";
        }
    }, 1000);
}

function south_signal() {
    stopActiveSignal();
    resetSignals();
    let each_signal_time = 30;
    activeInterval = setInterval(() => {
        each_signal_time--;
        if (each_signal_time > 5) {
            SG.style.backgroundColor = "Green";
            SY.style.backgroundColor = "#333";
            SR.style.backgroundColor = "#333";
        } else if (each_signal_time > 0) {
            SY.style.backgroundColor = "Yellow";
            SG.style.backgroundColor = "#333";
        } else {
            SR.style.backgroundColor = "Red";
            SY.style.backgroundColor = "#333";
            SG.style.backgroundColor = "#333";
        }
    }, 1000);
}

function east_signal() {
    stopActiveSignal();
    resetSignals();
    let each_signal_time = 30;
    activeInterval = setInterval(() => {
        each_signal_time--;
        if (each_signal_time > 5) {
            EG.style.backgroundColor = "Green";
            EY.style.backgroundColor = "#333";
            ER.style.backgroundColor = "#333";
        } else if (each_signal_time > 0) {
            EY.style.backgroundColor = "Yellow";
            EG.style.backgroundColor = "#333";
        } else {
            ER.style.backgroundColor = "Red";
            EY.style.backgroundColor = "#333";
            EG.style.backgroundColor = "#333";
        }
    }, 1000);
}

function west_signal() {
    stopActiveSignal();
    resetSignals();
    let each_signal_time = 30;
    activeInterval = setInterval(() => {
        each_signal_time--;
        if (each_signal_time > 5) {
            WG.style.backgroundColor = "Green";
            WY.style.backgroundColor = "#333";
            WR.style.backgroundColor = "#333";
        } else if (each_signal_time > 0) {
            WY.style.backgroundColor = "Yellow";
            WG.style.backgroundColor = "#333";
        } else {
            WR.style.backgroundColor = "Red";
            WY.style.backgroundColor = "#333";
            WG.style.backgroundColor = "#333";
        }
    }, 1000);
}

function resetSignals() {
    NR.style.backgroundColor = "Red";
    NG.style.backgroundColor = "#333";
    NY.style.backgroundColor = "#333";

    SR.style.backgroundColor = "Red";
    SG.style.backgroundColor = "#333";
    SY.style.backgroundColor = "#333";

    ER.style.backgroundColor = "Red";
    EG.style.backgroundColor = "#333";
    EY.style.backgroundColor = "#333";

    WR.style.backgroundColor = "Red";
    WG.style.backgroundColor = "#333";
    WY.style.backgroundColor = "#333";
}