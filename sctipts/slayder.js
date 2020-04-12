let wrapper = document.querySelector(".slide_wrapper");
let slideItems = document.querySelectorAll('.slide_item');
let slideControl = document.querySelectorAll('.slide_control');
let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');

let step = 100; // one slide visible
// variable for moving all slides together
let wrapperMovingIndex = 0;
let wrapperMoving = wrapperMovingIndex * step;
// variable for moving slide 
const minSlideIndex = 0;
const maxSlideIndex = slideItems.length - 1;
let slideIndex = 0;
let slideMoving = slideItems.length * step;
let slideMovingCycle = 0;
let slideMovingLenghtWay; 
// array of slides
let slides = [];
slideItems.forEach(function(slide, index) {
  slides.push({
    slide: slide,
    position: index,
    transform: 0 
  })
});

function slidesToLeft() {
  slideIndex++;
  if(slideIndex > maxSlideIndex) {
    slideIndex = minSlideIndex;
  }
  console.log(slideIndex);
  /////////////
  wrapperMovingIndex--;
  wrapperMoving = wrapperMovingIndex*step;
  wrapper.style.transform = `translateX(${wrapperMoving}%)`;
}

function slideToEnd() {
    
}

function slideToStart() {
  
}

function slidesToRight() {
  slideIndex--;
  if(slideIndex<minSlideIndex) {
    slideIndex = maxSlideIndex;
  }
  console.log(slideIndex);
  ////////////////
  wrapperMovingIndex++;
  wrapperMoving = wrapperMovingIndex*step;
  wrapper.style.transform = `translateX(${wrapperMoving}%)`;
}

slideControl.forEach(arrow => {
  arrow.onclick = function(e) {
    if(e.target.classList.contains('leftArrow')) {
      slidesToLeft();
      slideToEnd();
    } else {
        slidesToRight();
      }
  }
});


