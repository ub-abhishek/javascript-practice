let red = document.getElementById("stopLight");
let yellow = document.getElementById("readyLight");
let green = document.getElementById("goLight");

//buttons
let btn_stop = document.getElementById("stopButton");
let btn_ready = document.getElementById("readyButton");
let btn_go = document.getElementById("goButton");

function turn_red() {
    red.style.backgroundColor = "#cf1124";
    yellow.style.backgroundColor = "#4b5069";
    green.style.backgroundColor = "#4b5069";
    btn_stop.style.backgroundColor = "#cf1124";
    btn_ready.style.backgroundColor = "#1f1d41";
    btn_go.style.backgroundColor = "#1f1d41";

}

function turn_yellow() {
    yellow.style.backgroundColor = "#f7c948";
    red.style.backgroundColor = "#4b5069";
    green.style.backgroundColor = "#4b5069";
    btn_ready.style.backgroundColor = "#f7c948";
    btn_stop.style.backgroundColor = "#1f1d41";
    btn_go.style.backgroundColor = "#1f1d41";
}

function turn_green() {
    green.style.backgroundColor = "#199473";
    red.style.backgroundColor = "#4b5069";
    yellow.style.backgroundColor = "#4b5069";
    btn_go.style.backgroundColor = "#199473";
    btn_stop.style.backgroundColor = "#1f1d41";
    btn_ready.style.backgroundColor = "#1f1d41";
}