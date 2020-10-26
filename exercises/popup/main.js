let windowParent = document.getElementById("windowParent");
let button = document.getElementById("clickToPopup");
let closeButtons = document.getElementsByClassName("close");
let content = document.getElementById("content");

button.addEventListener("click", openPopup);

for (let closeButton of closeButtons) {
    closeButton.addEventListener("click", closePopup);
}

function openPopup() {
    windowParent.style.display = "block";
    windowParent.style.animationName = "scaleUp";
    content.style.filter = "blur(2px)";
}

function closePopup() {
    windowParent.style.animationName = "scaleDown";
    setTimeout(() => {
        windowParent.style.display = "none";
    }, 200);
    content.style.filter = "initial";
}