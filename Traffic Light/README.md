Traffic Light Project
A mini project using HTML, CSS, and JavaScript to create a simple traffic light simulator.
How This Traffic Light Project Works
This project lets you click Stop, Ready, or Go buttons to change the traffic light colors and the button highlights.





Step 1: Grab the elements
let red = document.getElementById("stopLight");
let yellow = document.getElementById("readyLight");
let green = document.getElementById("goLight");

let btn_stop = document.getElementById("stopButton");
let btn_ready = document.getElementById("readyButton");
let btn_go = document.getElementById("goButton");


What this does:
red, yellow, green → the circles representing traffic lights
btn_stop, btn_ready, btn_go → the buttons that control the lights
document.getElementById("idName") → selects the HTML element with that ID so JS can interact with it





Step 2: Make a function for each button
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


Explanation:
Each function runs when its corresponding button is clicked
element.style.backgroundColor → changes the color of the lights or buttons
Only the selected light and button get the active color; others reset to “off” color





Step 3: Link the button to the function
<button onclick="turn_red()" id="stopButton">Stop</button>
<button onclick="turn_yellow()" id="readyButton">Ready</button>
<button onclick="turn_green()" id="goButton">Go</button>


Explanation:
onclick="functionName()" → clicking this button runs the corresponding JS function
Each button has its own function controlling its light and highlight





Step 4: How it all works
[Button Clicked] → [Function Runs] → [Lights & Buttons Update]
Click Stop → red light turns on, button turns red
Click Ready → yellow light turns on, button turns yellow
Click Go → green light turns on, button turns green
Tip: let variables are just shortcuts to the elements we want to change in JS