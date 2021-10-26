let slideWidth = 800;
let slideNumber = 1;
let customSliderTape = document.querySelector(".custom-slider-tape");
let customItem = document.querySelectorAll(".custom-slider-item");
let slideCount = customItem.length;
let slideClicked = false;

let customSliderWrapper = document.querySelector(".custom-slider-wrapper");

customSliderTape.style.width = slideCount * slideWidth + "px";
customSliderTape.style.transform = "translate(0px)";
customSliderTape.style.transform = `translate(${-(slideNumber * slideWidth)}px)`;

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let nextMethod = (e) => {
    if (slideNumber >= slideCount - 1) return;
    slideNumber++;
    customSliderTape.style.transform = `translate(${-(slideNumber * slideWidth)}px)`;
    customSliderTape.style.transition = "all 0.3s linear";
}

let prevMethod = (e) => {
    if (slideNumber <= 0) return;
    slideNumber--;
    customSliderTape.style.transform = `translate(${-(slideNumber * slideWidth)}px)`;
    customSliderTape.style.transition = "all 0.3s linear";
}

next.addEventListener("click", function(e) {
    nextMethod(e);
});

prev.addEventListener("click", function(e) {
    prevMethod(e);
});

customSliderTape.addEventListener("transitionend", function(e) {
    if (customItem[slideNumber].getAttribute("id") == "toFirst") {
        slideNumber = customItem.length - slideNumber;
        customSliderTape.style.transition = "none";
        customSliderTape.style.transform = `translate(${-(slideNumber * slideWidth)}px)`;
    }

    if (customItem[slideNumber].getAttribute("id") == "toLast") {
        slideNumber = customItem.length - 2;
        customSliderTape.style.transition = "none";
        customSliderTape.style.transform = `translate(${-(slideNumber * slideWidth)}px)`;
    }
});

// let sliderInterval = setInterval(() => {
//     nextMethod();
// }, 1000);

// customSliderWrapper.addEventListener("mouseover", function() {
//     clearInterval(sliderInterval);
// });

// customSliderWrapper.addEventListener("mouseout", function() {
//     sliderInterval = setInterval(() => {
//         nextMethod();
//     }, 1000);
// });

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("arrows") || e.target.classList.contains("custom-slider-controls")) {
        slideClicked = true;
    } else {
        slideClicked = false;
    }
});

document.addEventListener("keyup", function(e) {
    if (slideClicked) {
        if (e.keyCode == 39) {
            nextMethod(e);
        } else if (e.keyCode == 37) {
            prevMethod(e);
        }
    }
})