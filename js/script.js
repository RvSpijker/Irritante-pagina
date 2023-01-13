document.body.style.overflow = "hidden";

var playAllButton = document.getElementById("button");
var videos = document.getElementsByTagName("video");
playAllButton.addEventListener("click", function() {
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

var button = document.getElementById("button");

button.addEventListener("click", function() {
  button.style.display = "none";

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

      setInterval(random_bg_color,)
});

const movingElement = document.getElementById("rat");
let x = 0;
let y = 0;
let xSpeed = 2.5;
let ySpeed = 3.5;

function updatePosition() {
    x += xSpeed;
    y += ySpeed;
    movingElement.style.transform = `translate(${x}px, ${y}px)`;

    // Check for screen boundaries and change direction 
    if (x + movingElement.clientWidth > window.innerWidth || x < 0) {
        xSpeed = -xSpeed;
    }
    if (y + movingElement.clientHeight > window.innerHeight || y < 0) {
        ySpeed = -ySpeed;
    }
    requestAnimationFrame(updatePosition);
}

//start animation
requestAnimationFrame(updatePosition);

window.onbeforeunload = function() {
    return "Refreshing the page is not allowed.";
};