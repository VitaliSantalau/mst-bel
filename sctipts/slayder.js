let frameIndex = 1;

function showFrame(n) {
  let i;
  let frames = document.getElementsByClassName("slayder_frame");
  let marks = document.getElementsByClassName("mark_Frame");
  if (n > frames.length) {
    frameIndex = 1;
  }
  if (n < 1) {
    frameIndex = frames.length;
  }
  for(i=0; i<frames.length; i++) {
    frames[i].style.display = "none";
  }
  for(i=0; i<marks.length; i++) {
    marks[i].className = marks[i].className.replace("mark_NotCurrentFrame");
  }
  frames[frameIndex-1].style.display = "block";
  marks[frameIndex-1].className+="mark_NotCurrentFrame";
}

function prevFrame() {
  showFrame(frameIndex-=1);
}

function nextFrame() {
  showFrame(frameIndex+=1);
}

function currentFrame(n) {
  showFrame(frameIndex = n);
}

showFrame(frameIndex);