setInterval(function(){
    var gifs1 = document.getElementsByClassName("gifs1");
    for(var i = 0; i < gifs1.length; i++) {
        gifs1[i].style.height = Math.floor(Math.random() * 200) + "px";
        gifs1[i].style.width = Math.floor(Math.random() * 200) + "px";
    }
}, 500);


function removeDiv(divId) {
    var div = document.getElementById(divId);
    div.parentNode.removeChild(div);
  }