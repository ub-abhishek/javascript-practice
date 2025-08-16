//small_screen_size_image
let small_img = document.getElementById("seasonSmallImage");
//medium_screen_size_image
let medium_img = document.getElementById("seasonMediumImage");
//button 
let spring = document.getElementById("springBtn");
let summer = document.getElementById("summerBtn");
let autumn = document.getElementById("autumnBtn");
let winter = document.getElementById("winterBtn");


function btn_1() {
    small_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    medium_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
}

function btn_2() {
    small_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    medium_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
}

function btn_3() {
    small_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    medium_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
}

function btn_4() {
    small_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    medium_img.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
}