# Color Picker Project
A mini project using HTML, CSS, and JavaScript to create a color picker app.
How This Color Picker Project Works
This project lets you click a button to change the background color and see the color code.





Step 1: Grab the elements
let ui_color = document.getElementById("colorPickerContainer");
let card_text = document.getElementById("selectedColorHexCode");
What this does:
ui_color → the box whose color changes
card_text → shows the hex code of the color
document.getElementById("idName") → finds the element with that ID





Step 2: Make a function for each button
function button_1() {
    ui_color.style.backgroundColor = "#e0e0e0";
    card_text.textContent = "#e0e0e0";
}
Explanation:
Function runs when the button is clicked
ui_color.style.backgroundColor → changes the background color
card_text.textContent → updates the hex code text





Step 3: Link the button to the function
<button onclick="button_1()" id="button1">#e0e0e0</button>
Explanation:
onclick="button_1()" → clicking this button runs button_1()
Each button has its own function and color





Step 4: How it all works
[Button Clicked] → [Function Runs] → [Background & Hex Code Updates]
Click any button → JavaScript runs the corresponding function → color changes instantly
let variables are just shortcuts to the elements we want to change
