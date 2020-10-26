let preloaderGroup = document.getElementById("preloaderGroup");
window.addEventListener("load", vanish);

function vanish() {
    preloaderGroup.classList.add("vanish");
    setTimeout(() => {
        preloaderGroup.style.display = "none";
    }, 500);
}