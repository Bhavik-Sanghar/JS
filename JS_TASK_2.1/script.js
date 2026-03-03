const signals = {
    N: { red: 'N-red', green: 'N-green', yellow: 'N-yellow', time: 'N-time' },
    S: { red: 'S-red', green: 'S-green', yellow: 'S-yellow', time: 'S-time' },
    E: { red: 'E-red', green: 'E-green', yellow: 'E-yellow', time: 'E-time' },
    W: { red: 'W-red', green: 'W-green', yellow: 'W-yellow', time: 'W-time' }
};

Object.keys(signals).forEach(dir => {
    Object.keys(signals[dir]).forEach(type => {
        signals[dir][type] = document.getElementById(signals[dir][type]);
    });
});

let total_time = 120;

function updateTraffic() {
    setInterval(() => {
        total_time--;
        if (total_time < 0) total_time = 119;

        if (total_time >= 90) handleSignal('N', total_time - 90);
        else if (total_time >= 60) handleSignal('W', total_time - 60);
        else if (total_time >= 30) handleSignal('S', total_time - 30);
        else handleSignal('E', total_time);
        
    }, 1000);
}

function handleSignal(activeDir, timeLeft) {
    Object.values(signals).forEach(s => {
        s.red.style.backgroundColor = 'red';
        s.green.style.backgroundColor = '#333';
        s.yellow.style.backgroundColor = '#333';
        s.time.innerText = ''; 
    });

    const s = signals[activeDir];
    s.time.innerText = timeLeft;

    if (timeLeft > 5) {
        s.green.style.backgroundColor = 'green';
        s.red.style.backgroundColor = '#333';
    } else if (timeLeft > 0) {
        s.yellow.style.backgroundColor = 'yellow';
        s.red.style.backgroundColor = '#333';
    }
}

updateTraffic();
