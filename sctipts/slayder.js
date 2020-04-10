let slide = document.querySelector('.main_slide');
let wrapper = document.querySelector(".slide_wrapper");
let slideItems = document.querySelectorAll('.slide_item');
let leftArrow = document.querySelector('.slide_leftArrow');
let rightArrow = document.querySelector('.slide_rightArrow');
let items = [];

let slideIndex = 0;
let currentIndexTransform = 1;
let step = 100;


//slideItems.forEach(
//  function(item, index) {
//    items.push({ item: item, position: index, transform: 0});
//  }
//);

function changeSlide() {
 
  if(slideIndex<slideItems.length) {
    let transform = -currentIndexTransform*step;
    wrapper.style.transform = `translateX(${transform}%)`;
    currentIndexTransform++;
    slideItems[slideIndex].style.transform = "translateX(400%)";
    slideIndex++;
  } else {
    slideIndex = 0;
    let transform = -currentIndexTransform*step;
    wrapper.style.transform = `translateX(${transform}%)`;
    currentIndexTransform++;
    slideItems[slideIndex].style.transform = "translateX(8500%)";
    slideIndex++;
  }
  
}