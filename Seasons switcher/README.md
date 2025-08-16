Seasons Switcher Project

A mini project using HTML, CSS, and JavaScript to switch seasonal images for small and medium screens when buttons are clicked.






Step 1: HTML Structure


<img src="spring-summer-autumn-winter-xs-img" class="season-image d-inline d-md-none" id="seasonSmallImage" />

<img src="spring-summer-autumn-winter-md-img" class="season-image d-none d-md-inline" id="seasonMediumImage" />



<div class="d-flex flex-row justify-content-center mt-4">

&nbsp;   <button onclick="btn\_1()" class="button spring-button" id="springBtn">Spring</button>

&nbsp;   <button onclick="btn\_2()" class="button summer-button" id="summerBtn">Summer</button>

&nbsp;   <button onclick="btn\_3()" class="button autumn-button" id="autumnBtn">Autumn</button>

&nbsp;   <button onclick="btn\_4()" class="button winter-button" id="winterBtn">Winter</button>

</div>



Explanation:


Two <img> tags:

seasonSmallImage → shows only on small screens (d-inline d-md-none).

seasonMediumImage → shows on medium+ screens (d-none d-md-inline).

Buttons are inside a flex container to center them horizontally.

Each button has an onclick event that calls the corresponding JS function to change the images.






Step 2: CSS Styling


.season-image {

&nbsp;   width: 100%;

&nbsp;   height: 85vh;

}



.button {

&nbsp;   color: white;

&nbsp;   background-color: #cbd2d9;

&nbsp;   font-family: "Roboto";

&nbsp;   font-size: 14px;

&nbsp;   width: 80px;

&nbsp;   height: 32px;

&nbsp;   border-width: 0;

&nbsp;   border-radius: 8px;

&nbsp;   margin-left: 10px;

&nbsp;   margin-right: 10px;

}



.spring-button { background-color: #3a7333; }

.summer-button { background-color: #e0bb00; }

.autumn-button { background-color: #b04400; }

.winter-button { background-color: #0f7cb6; }



What it does:


.season-image → makes images responsive to width and viewport height.

.button → styles all buttons uniformly (text color, size, rounded corners, spacing).

Seasonal classes (spring-button, etc.) → assign distinct colors for each season’s button.






Step 3: JavaScript Functions

let small\_img = document.getElementById("seasonSmallImage");

let medium\_img = document.getElementById("seasonMediumImage");



function btn\_1() {

&nbsp;   small\_img.src = "spring-small-img-url";

&nbsp;   medium\_img.src = "spring-medium-img-url";

}

function btn\_2() {

&nbsp;   small\_img.src = "summer-small-img-url";

&nbsp;   medium\_img.src = "summer-medium-img-url";

}

function btn\_3() {

&nbsp;   small\_img.src = "autumn-small-img-url";

&nbsp;   medium\_img.src = "autumn-medium-img-url";

}

function btn\_4() {

&nbsp;   small\_img.src = "winter-small-img-url";

&nbsp;   medium\_img.src = "winter-medium-img-url";

}



Explanation:


small\_img and medium\_img → store references to the images in the DOM.

Each function updates the src attribute of the images to the selected season’s image.

Clicking a button triggers the respective function → images update instantly.






Step 4: How It Works


Click a season button.

JS function runs (btn\_1(), btn\_2(), etc.).

src attributes of small and medium images are updated.

Images on the page instantly reflect the selected season.

