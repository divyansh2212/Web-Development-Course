// let winButton = document.getElementById("winButton")[0];

let startMenu = document.getElementsByClassName("startMenu")[0]
let taskbar = document.getElementsByClassName("taskbar")[0]

taskbar.addEventListener("click", () => {
    if (startMenu.style.bottom == "35px") {
        startMenu.style.bottom = "-420px";
    }
    else {
        startMenu.style.bottom = "35px";
    }
})