let slide = document.querySelector('.main_slide');
let wrapper = document.querySelector(".slide_wrapper");
let slideItems = document.querySelectorAll('.slide_item');
let leftArrow = document.querySelector('.slide_leftArrow');
let rightArrow = document.querySelector('.slide_rightArrow');

let step = 100; // one slide visible

// variable for moving slide 
let slideIndex = Math.round(slideItems.length/2); // set middle of slides quantity
let slideMovingCycle = 1;
let slideMoving = slideItems.length * step;
let slideMovingLenghtWay;

// variable for moving all slides together
let wrapperMovingIndex = 1;
let wrapperMoving;

function changeSlide() {
  
}

/*
function changeSlideLeft() {
  // moving slides together
  wrapperMoving = wrapperMovingIndex * step;
  wrapper.style.transform = `translateX(-${wrapperMoving}%)`;
  wrapperMovingIndex++;
  if(slideIndex < slideItems.length) {
    // moving slide alone to the end of chain
    slideMovingLenghtWay = slideMoving*slideMovingCycle;
    if(slideIndex == (slideItems.length - 1)) {
      slideItems[slideIndex].style.zIndex = '1'; // set last slide on second layer
      slideItems[slideIndex].style.transform = `translateX(${slideMovingLenghtWay}%)`;
      slideIndex++;
    } else {
        slideItems[slideIndex].style.transform = `translateX(${slideMovingLenghtWay}%)`;
        slideIndex++;
      }
  } else {
    slideItems[slideItems.length - 1].style.zIndex = '2'; // set last slide on first layer 
    // moving slide alone to the end of chain
    slideIndex = 0;
    slideMovingCycle++;
    slideMovingLenghtWay = slideMoving*slideMovingCycle;
    slideItems[slideIndex].style.transform = `translateX(${slideMovingLenghtWay}%)`;
    slideIndex++;
  }
}
*/

