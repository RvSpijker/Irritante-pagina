document.body.style.overflow = "hidden";

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



function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="http://www.codingforums.com"
    var link2="http://www.cssdrive.com"
    var link3="http://www.dynamicdrive.com"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const websites = [
    "https://www.devriesniek.nl",
    "https://www.rvspijker.nl",
    "https://www.kharua.nl",
    "https://www.kanslooos.nl"
];

const link = document.getElementById("link");

function randomLink() {
    // generate a random number between 0 and the length of the websites array
    const randomIndex = Math.floor(Math.random() * websites.length);
    link.href = websites[randomIndex];
}

// set the link's href to a random website when the page loads
randomLink();

// You can also use it on event like click, mouseover etc
link.addEventListener("click", randomLink);

function showdiv()
{
    document.getElementById("breaktime").style.visibility="visible";
    document.getElementById("breaktime").play();
}
setTimeout("showdiv()", 31000);

function hidediv()
{
    document.getElementById("breaktime").style.visibility="hidden";
    document.getElementById("breaktime").pause();
}
setTimeout("hidediv()", 77000);