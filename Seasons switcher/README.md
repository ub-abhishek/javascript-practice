# 🎨 SEASONS SWITCHER - JS OVERVIEW

---

### Step 1: Grab the images

```javascript
let small_img = document.getElementById("seasonSmallImage");
let medium_img = document.getElementById("seasonMediumImage");
```

**Explanation:**

* `small_img` → image element for **small screens**
* `medium_img` → image element for **medium+ screens**
* `document.getElementById("idName")` → grabs the element so JS can manipulate it

---

### Step 2: Functions for each season

```javascript
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
```

**What this does:**

* Runs when a button is clicked
* `small_img.src` → changes small-screen image
* `medium_img.src` → changes medium+ image
* Instant visual update of the season images

---

### Step 3: How it works

1. Click a season button → triggers the corresponding function
2. JS updates the `src` attributes for both images
3. Page instantly shows the selected season

---
