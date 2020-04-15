let wrapperCategory = document.querySelector(".category_slide_wrapper");
let slideItemsCategory = document.querySelectorAll('.category_slide_item');
let slideControlCategory = document.querySelectorAll('.category_slide_control');
let leftArrowCategory = document.querySelector('.category_leftArrow');
let rightArrowCategory = document.querySelector('.category_rightArrow');

let stepCategory = 20; // five slides visible
let controlPointCategory = slideItemsCategory.length - 100/stepCategory;

// variable for moving all slides together
let wrapperMovingIndexCategory = 0;
let wrapperMovingCategory = wrapperMovingIndexCategory * stepCategory;

function showArrowCategory() {
  if(wrapperMovingIndexCategory == -controlPointCategory) {
    leftArrowCategory.style.visibility = 'hidden';
  } else {
      leftArrowCategory.style.visibility = 'visible';
    };
  if(wrapperMovingIndexCategory == 0) {
    rightArrowCategory.style.visibility = 'hidden';
    } else {
        rightArrowCategory.style.visibility = 'visible';
      }
}

function slidesToLeftCategory() {
  wrapperMovingIndexCategory--;
  wrapperMovingCategory = wrapperMovingIndexCategory*stepCategory;
  wrapperCategory.style.transform = `translateX(${wrapperMovingCategory}%)`;
};

function slidesToRightCategory() {
  wrapperMovingIndexCategory++;
  wrapperMovingCategory = wrapperMovingIndexCategory*stepCategory;
  wrapperCategory.style.transform = `translateX(${wrapperMovingCategory}%)`;
};

slideControlCategory.forEach(arrow => {
  arrow.onclick = function(e) {
    if(e.target.classList.contains('category_leftArrow')) {
      slidesToLeftCategory();
      showArrowCategory();
    } else {
      slidesToRightCategory();
      showArrowCategory();
      };
  }
});