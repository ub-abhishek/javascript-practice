🎨 TOGGLE LIKE / DISLIKE - JS OVERVIEW

---

**Step 1: Grab the elements**

```javascript
let image = document.getElementById("puppyImage");
let like_button = document.getElementById("likeButton");
let like_icon = document.getElementById("likeIcon");
let isLiked = false;
```

**Explanation:**

* `image` → the puppy image on the page
* `like_button` → the Like button element
* `like_icon` → the thumbs-up icon inside the button
* `isLiked` → keeps track of whether the post is liked (`true`) or not (`false`)

---

**Step 2: Function to toggle like / dislike**

```javascript
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
```

**What this does:**

* Runs when the **Like button** is clicked
* If not liked (`isLiked = false`):

  * Changes the puppy image to the *liked* version
  * Updates button + icon colors to blue/white (active look)
  * Sets `isLiked = true`
* If already liked (`isLiked = true`):

  * Changes the puppy image back to normal
  * Resets button + icon colors to gray (inactive look)
  * Sets `isLiked = false`

---

**Step 3: How it works**

* Click the Like button → triggers `onClickLikeButton()`
* Function checks the current `isLiked` state
* Based on that, JS updates the **image** and **button styles**
* Page instantly reflects the toggled Like / Dislike state
