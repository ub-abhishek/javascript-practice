#SEASONS SWITCHER
Step 1: Grab the images
let small_img = document.getElementById("seasonSmallImage");
let medium_img = document.getElementById("seasonMediumImage");

Explanation:

small_img → the image element for small screens.

medium_img → the image element for medium+ screens.

document.getElementById("idName") → finds the HTML element with that ID so JS can manipulate it.

Step 2: Create functions for each season button
function btn_1() {
    small_img.src = "spring-small-img-url";
    medium_img.src = "spring-medium-img-url";
}
function btn_2() {
    small_img.src = "summer-small-img-url";
    medium_img.src = "summer-medium-img-url";
}
function btn_3() {
    small_img.src = "autumn-small-img-url";
    medium_img.src = "autumn-medium-img-url";
}
function btn_4() {
    small_img.src = "winter-small-img-url";
    medium_img.src = "winter-medium-img-url";
}


What this does:

Each function runs when its respective button is clicked.

small_img.src → changes the image for small screens.

medium_img.src → changes the image for medium+ screens.

Updating src instantly changes what image is displayed on the page.

Step 3: How it works

Button clicked → triggers the corresponding function.

JS updates the src attributes of both images.

Page reflects the new season images instantly.
