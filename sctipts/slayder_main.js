let wrapper = document.querySelector(".main_slide_wrapper");
let slideItems = document.querySelectorAll('.main_slide_item');
let slideControl = document.querySelectorAll('.main_slide_control');

let step = 100; // one slide visible

// variable for moving all slides together
let wrapperMovingIndex = 0;
let wrapperMoving = wrapperMovingIndex * step;

// variable for moving slide 
const minSlideIndex = 0;
const maxSlideIndex = slideItems.length - 1;
let slideIndex = 0;
let slideMoving = slideItems.length * step;

// array of slides
let slides = [];
slideItems.forEach(function(slide, index) {
  slides.push({
    slide: slide,
    transform: 0 
  })
});

function slidesToLeft() {
  wrapperMovingIndex--;
  wrapperMoving = wrapperMovingIndex*step;
  wrapper.style.transform = `translateX(${wrapperMoving}%)`;
};

function slidesToRight() {
  wrapperMovingIndex++;
  wrapperMoving = wrapperMovingIndex*step;
  wrapper.style.transform = `translateX(${wrapperMoving}%)`;
};

function slideToEnd() {
  if(slideIndex !== maxSlideIndex) {
    slides[maxSlideIndex].slide.style.zIndex = '2';
  } else {
    slides[maxSlideIndex].slide.style.zIndex = '1';
    };
  slides[slideIndex].slide.style.cssText = "transition: transform 0.01s ease 1s";
  slides[slideIndex].transform = slides[slideIndex].transform + slideMoving;
  slides[slideIndex].slide.style.transform = `translateX(${slides[slideIndex].transform}%)`;
  slideIndex++;
  if(slideIndex > maxSlideIndex) {
    slideIndex = minSlideIndex;
  }
};

function slideToStart() {
  slideIndex--;
  if(slideIndex < minSlideIndex) {
    slideIndex = maxSlideIndex;
  }
  if(slideIndex == minSlideIndex) {
    slides[minSlideIndex].slide.style.zIndex = '3';
  } else {
    slides[minSlideIndex].slide.style.zIndex = '2';
    };
  slides[slideIndex].transform = slides[slideIndex].transform - slideMoving;
  slides[slideIndex].slide.style.cssText = "transition: transform 0.01s ease";
  slides[slideIndex].slide.style.transform = `translateX(${slides[slideIndex].transform}%)`;
}

slideControl.forEach(arrow => {
  arrow.onclick = function(e) {
    if(e.target.classList.contains('main_leftArrow')) {
      slidesToLeft();
      slideToEnd();
    } else {
      slideToStart();
      slidesToRight();
      };
  }
});
let interval;
const cycle = () => {
  interval = setInterval(function() {
    slidesToLeft();
    slideToEnd();
  }, 5000);
};
cycle();

slideControl.forEach(arrow => {
  arrow.addEventListener('mouseenter', function() {
    clearInterval(interval);
  });
  arrow.addEventListener('mouseleave', function() {
    clearInterval(interval);
    cycle();
  });
});

slideItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    clearInterval(interval);
  });
  item.addEventListener('mouseleave', function() {
    clearInterval(interval);
    cycle();
  });
})

let handleVisibilityChange = () => {
  if (document.visibilityState === "hidden") {
    clearInterval(interval);
  } else {
    clearInterval(interval);
    cycle();
  }
}
document.addEventListener('visibilitychange', handleVisibilityChange, false);