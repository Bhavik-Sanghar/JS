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
    document.getElementById("mouse_over").style.scale = .9
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

  document.getElementById("keyboard_press").addEventListener("keypress", (e) => {
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
    document.getElementById("blur_example").addEventListener("blur" , (e)=>{
        document.getElementById("blur").style.backgroundColor = `red`
    })


    document.getElementById("focus_example").addEventListener("focus" , (e)=>{
        document.getElementById("focus").style.backgroundColor = `pink`
    })


}



mouse_event();
keyboard_event();
// load_event();
other_event();
