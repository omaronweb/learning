let buttons = document.getElementsByTagName("button");
let carouselItems = document.getElementsByClassName("carousel-item");
let counter = 0;

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        if (e.target.id === "next") {
            carouselItems[counter].classList.remove('visible')
            counter += 1
            counter = handleCounterRange(counter)
            carouselItems[counter].classList.add('visible')
        } else if (e.target.id === "prev") {
            carouselItems[counter].classList.remove('visible')
            counter -= 1
            counter = handleCounterRange(counter)
            carouselItems[counter].classList.add('visible')
        }
    });
}

function handleCounterRange(counter) {
    return (counter <= -1) ? carouselItems.length - 1 : (counter >= carouselItems.length) ? 0 : counter
}