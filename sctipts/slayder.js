// index of frame
let index = 1;

function showFrame(n) {
  let frames = document.getElementsByClassName("slayder_frame");
  let marks = document.getElementsByClassName("mark_Frame");
  
  if (n > frames.length) {
    index = 1;
  }
  if (n < 1) {
    index = frames.length;
  }
  
  let i;
  for(i=0; i<frames.length; i++) {
    frames[i].style.display = "none";
  }
  frames[index-1].style.display = "block";
  
  for(i=0; i<marks.length; i++) {
    marks[i].className = marks[i].className.replace("mark_NotCurrentFrame");
  }
  marks[index-1].className+="mark_CurrentFrame";
}

function prevFrame() {
  showFrame(index-=1);
}

function nextFrame() {
  showFrame(index+=1);
}

function currentFrame(n) {
  showFrame(index = n);
}

showFrame(index);