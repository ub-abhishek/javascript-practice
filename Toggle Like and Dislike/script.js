let image = document.getElementById("puppyImage");
let like_button = document.getElementById("likeButton");
let like_icon = document.getElementById("likeIcon");
let isLiked = false;

function onClickLikeButton() {
    if (isLiked === false) {
        image.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        like_button.style.backgroundColor = "#0967d2";
        like_icon.style.color = "#0967d2";
        like_button.style.color = "#ffffff";
        isLiked = true;
    } else {
        image.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        like_button.style.backgroundColor = "#cbd2d9";
        like_icon.style.color = "#cbd2d9";
        like_button.style.color = "#9aa5b1";
        isLiked = false;
    }
}