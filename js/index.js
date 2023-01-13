// random size image
setInterval(function(){
    var gifs1 = document.getElementsByClassName("gifs1");
    for(var i = 0; i < gifs1.length; i++) {
        gifs1[i].style.height = Math.floor(Math.random() * 200) + "px";
        gifs1[i].style.width = Math.floor(Math.random() * 200) + "px";
    }
}, 500);

// cross that removes image
function removeDiv(divId) {
    var div = document.getElementById(divId);
    div.parentNode.removeChild(div);
  }

// remove div1 to div40
function removeDivs() {
    for (let i = 1; i <= 40; i++) {
        let div = document.getElementById(`div${i}`);
        if (div) {
            div.parentNode.removeChild(div);
        }
    }
}
