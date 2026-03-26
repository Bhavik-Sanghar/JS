const mouse_event = () => {
  //on-click event
  document.getElementById("on_click").addEventListener("click", (e) => {
    e.preventDefault();
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.getElementById("on_click").style.backgroundColor =
      `rgb(${r},${g},${b})`;
  });

  //dblclick
  document
    .getElementById("on_double_click")
    .addEventListener("dblclick", (e) => {
      e.preventDefault();
      document.getElementById("on_double_click").style.cursor = `pointer`;
      let temp = document.getElementById("on_double_click").textContent;
      document.getElementById("on_double_click").innerHTML = `${temp} 🦋`;
    });

  //mousedown
  document.getElementById("mouse_down").addEventListener("mousedown", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_down").textContent;
    document.getElementById("mouse_down").innerHTML = `${temp} 🦉`;
  });

  //mouseup
  document.getElementById("mouse_up").addEventListener("mouseup", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_up").textContent;
    document.getElementById("mouse_up").innerHTML = `${temp} 🐟`;
  });

  //mousemove
  document.getElementById("mouse_move").addEventListener("mousemove", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_move").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_move").innerHTML = `${temp} 🌕`;
    }
  });

  //mouseover
  document.getElementById("mouse_over").addEventListener("mouseover", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_over").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_over").innerHTML = `${temp} 😈`;
    }
    document.getElementById("mouse_over").style.scale = 0.9;
  });

  //mouseout
  document.getElementById("mouse_out").addEventListener("mouseout", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_out").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_out").innerHTML = `${temp} 👁`;
    }
  });

  // mouseenter
  document.getElementById("mouse_enter").addEventListener("mouseenter", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_enter").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_enter").innerHTML = `${temp} 😌`;
    }
  });

  // mouseleave
  document.getElementById("mouse_leave").addEventListener("mouseleave", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_leave").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_leave").innerHTML = `${temp} 🥶`;
    }
  });

  // contextmenu
  document
    .getElementById("mouse_contextmenu")
    .addEventListener("contextmenu", (e) => {
      e.preventDefault();
      // console.log("hmmm");
      let temp = document.getElementById("mouse_contextmenu").textContent;
      if (temp.length < 50) {
        document.getElementById("mouse_contextmenu").innerHTML = `${temp} 💪`;
      }
    });

  // wheel
  document.getElementById("mouse_wheel").addEventListener("wheel", (e) => {
    e.preventDefault();
    // console.log("hmmm");
    let temp = document.getElementById("mouse_wheel").textContent;
    if (temp.length < 50) {
      document.getElementById("mouse_wheel").innerHTML = `${temp} 🤪`;
    }
  });
};
const keyboard_event = () => {
  //key_down
  document.getElementById("keyboard_down").addEventListener("keydown", (e) => {
    e.preventDefault();
    let temp = document.getElementById("keyboard_down").textContent;
    // console.log(temp);
    if (temp.length < 50) {
      document.getElementById("keyboard_down").innerHTML =
        `${temp} 🪼 <input type="text" name="" id="">`;
    }
  });

  document.getElementById("keyboard_up").addEventListener("keyup", (e) => {
    e.preventDefault();
    let temp = document.getElementById("keyboard_up").textContent;
    // console.log(temp);
    if (temp.length < 50) {
      document.getElementById("keyboard_up").innerHTML =
        `${temp} 😭 <input type="text" name="" id="">`;
    }
  });

  document
    .getElementById("keyboard_press")
    .addEventListener("keypress", (e) => {
      e.preventDefault();
      let temp = document.getElementById("keyboard_press").textContent;
      console.log(temp);
      if (temp.length < 50) {
        document.getElementById("keyboard_press").innerHTML =
          `${temp} 🥱 <input type="text" name="" id="">`;
      }
    });
};

// const load_event = () =>{
//     const img = document.getElementById("my_image")
//     img.addEventListener("load" , (e) => {
//     document.getElementById("on_load").innerHTML = `Image Loaded 👀`;
//     })
// }

const other_event = () => {
  document.getElementById("blur_example").addEventListener("blur", (e) => {
    document.getElementById("blur").style.backgroundColor = `red`;
  });

  document.getElementById("focus_example").addEventListener("focus", (e) => {
    document.getElementById("focus").style.backgroundColor = `pink`;
  });

  document.getElementById("full_screen").addEventListener("click", (e) => {
    document.getElementById("full_screen").requestFullscreen();
  });

  let myWindow = null;
  document.getElementById("new_window").addEventListener("click", (e) => {
    myWindow = window.open("https://www.google.com", "goggle_tab");
  });

  document.getElementById("close_window").addEventListener("click", (e) => {
    if (myWindow) {
      myWindow.close();
      myWindow = null;
    } else {
      console.log("No window has been opened yet or it was already closed.");
    }
  });

  document.getElementById("copy").addEventListener("copy", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.getElementById("copy_event").style.backgroundColor =
      `rgb(${r},${g},${b})`;
  });
  document.getElementById("paste").addEventListener("paste", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.getElementById("paste_event").style.backgroundColor =
      `rgb(${r},${g},${b})`;
  });

  window.addEventListener("resize", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.getElementById("window_resize").style.backgroundColor =
      `rgb(${r},${g},${b})`;
  });

  window.addEventListener("offline", (e) => {
    document.getElementById("offline").style.backgroundColor = "gray";
  });
  window.addEventListener("online", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.getElementById("online").style.backgroundColor =
      `rgb(${r},${g},${b})`;
  });

  document.addEventListener("visibilitychange", () => {
    const el = document.getElementById("visibility");
    if (document.hidden) {
      el.innerHTML = "You left the tab! 🏃‍♂️";
      el.style.backgroundColor = "gray";
    } else {
      el.innerHTML = "Welcome back! ✨";
      el.style.backgroundColor = "gold";
    }
  });

  const dragStart = document.getElementById("drag_start");
  const dragEnd = document.getElementById("drag_end");

  dragStart.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.innerText);
    e.target.style.opacity = "0.5";
  });

  dragStart.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1";
  });

  dragEnd.addEventListener("dragover", (ev) => {
    ev.preventDefault();
  });

  dragEnd.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");

    ev.target.innerText = `Dropped: ${data}`;
    ev.target.style.backgroundColor = "lightgreen";
  });

  window.addEventListener("selectionchange", (e) => {
    const selectedText = window.getSelection().toString();
    const displayElement = document.getElementById("selection");

    if (selectedText.length > 0) {
      displayElement.innerText = `You selected: ${selectedText}`;
      displayElement.style.backgroundColor = `lightcoral`;
    } else {
      displayElement.innerText = "Select some text above!";
      displayElement.style.backgroundColor = "";
    }
  });

  window.addEventListener("mousemove", (e) => {
    document.getElementById("pointer").innerText =
      `X : ${e.clientX} \n Y : ${e.clientY}`;
    document.getElementById("pointer").style.backgroundColor = `lightpink`;
  });
};
mouse_event();
keyboard_event();
// load_event();
other_event();
