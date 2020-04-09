let slide = document.querySelector('.main_slide');
let wrapper = document.querySelector(".slide_wrapper");
let slideItems = document.querySelectorAll('.slide_item');
let leftArrow = document.querySelector('.slide_leftArrow');
let rightArrow = document.querySelector('.slide_rightArrow');
let items = [];

let slideIndex = 0;
//let slideItemPosition = 0;
//let step = 100;
//let wrapperWidth = parseFloat(getComputedStyle(wrapper).width); // width .slide_wrapper
//let itemWidth = parseFloat(getComputedStyle(items[0]).width); // width .slide_item
// value for transform .slide_wrapper
//let step = itemWidth / wrapperWidth * 100; // step for transform

// let position = {
//  getMin: 0,
//  getMax: items.length - 1
//};

slideItems.forEach(
  function(item, index) {
    items.push({ item: item, position: index, transform: -100*(index+1)});
  }
);

function changeSlide() {
  console.log(items);
  wrapper.style.transform = `translateX(${items[slideIndex].transform}%)`;
  items[4] = items[0];
  console.log(items);
  slideIndex++;

}

