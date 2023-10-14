let ball = document.querySelector(".stage");
let t = 0;
let left = 0;

let pageHeight = document.documentElement.clientHeight;
let pageWidth = document.documentElement.clientWidth;

let ballWidth = ball.offsetWidth;
document.addEventListener("keydown", (event) => {
    if(event.code === "KeyW" || event.code === "Numpad8" ||     event.key == "ArrowUp"){
        if(t - 10 >= 0){
            ball.style.top = t - 10 + "px";
            t -= 10;
            // ball.style.transform = "rotate(90deg)";
        }
    }
    if(event.code === "KeyS" || event.code === "Numpad2" ||     event.key == "ArrowDown"){
        if(t + ballWidth + 10 <= pageHeight){
            ball.style.top = t + 10 + "px";
            t += 10;
            // ball.style.transform = "rotate(180deg)";
        }
    }
    if(event.code === "KeyA" || event.code === "Numpad4" ||     event.key == "ArrowLeft"){
        if(left - 10 >= 0){
            ball.style.left = left - 10 + "px";
            left -= 10;
            // ball.style.transform = "rotate(270deg)";
        }
    }
    if(event.code === "KeyD" || event.code === "Numpad6" ||     event.key == "ArrowRight"){
        if(left + ballWidth + 10 <= pageWidth){
            ball.style.left = left + 10 + "px";
            left += 10;
            // ball.style.transform = "rotate(360deg)";
        }
    }
});
