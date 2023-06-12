// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 1;
//     audio.play();
//   });

list = []

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
  // document.getElementById("typing_hand").classList.add("typing_hand")
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 40;
var h1 = document.getElementById("introductionh1");
var introduction = document.getElementById("introduction");
var delay = h1.innerHTML.length * speed;

// type affect to header
typeEffect(h1, speed);

// type affect to body
setTimeout(function(){
  introduction.style.display = "inline-block";
  typeEffect(introduction, speed);
}, delay);
