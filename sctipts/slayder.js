let slide = document.querySelector('.main_slide');
let wrapper = document.querySelector('.slide_wrapper');
let slideItems = document.querySelectorAll('.slide_item');
let leftArrow = document.querySelector('.slide_leftArrow');
let rightArrow = document.querySelector('.slide_rightArrow');

let wrapperWidth = parseFloat(getComputedStyle(wrapper).width); // width .slide_wrapper
let itemWidth = parseFloat(getComputedStyle(items[0]).width); // width .slide_item
let itemPosition = 0;
let wrapperTransform = 0; // value for transform .slide_wrapper
let step = itemWidth / wrapperWidth * 100; // step for transform
let items = [];

let position = {
  getMin: 0,
  getMax: items.length - 1
};

slideItems.forEach(
  function(item, index) {
    items.push({ item: item, position: index, transform: 0 });
  }
);

let itemTransform = function(direction) {
  if(direction === 'right') {
    /*if ((itemPosition + wrapperWidth/itemWidth - 1) >= position.getMax) {
      return; 
    } */
    itemPosition++;
    wrapperTransform -= step;  
  }
  if(direction === 'left') {
    itemPosition--;
    wrapperTransform += step;
  }
  wrapper.style.fontsize = '26px';
};

let handleArrowClick = function(e) {
  e.preventDefault();
  let direction = e.target.classList.contains('.slide_leftArrow') ? 'left' : 'right';
  itemTransform(direction);
};

let setUpListenerLeftArrow = function() {
  leftArrow.addEventListener('click', handleArrowClick());
};

let setUpListenerRighttArrow = function() {
  rightArrow.addEventListener('click', handleArrowClick());
};

setUpListenerLeftArrow();
setUpListenerRighttArrow();

