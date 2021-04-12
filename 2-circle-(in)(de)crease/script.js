document.getElementById("increase").addEventListener("click",function(){

const height1 = document.querySelector('#circle').offsetHeight;
const width1 = document.querySelector('#circle').offsetWidth;
var adding = document.getElementById("circle");
adding.style.width = width1 + 1 + "px";
adding.style.height = height1 + 1 + "px";
});

document.getElementById("decrease").addEventListener("click",function(){

    const height1 = document.querySelector('#circle').offsetHeight;
    const width1 = document.querySelector('#circle').offsetWidth;
    var adding = document.getElementById("circle");
    adding.style.width = width1 - 1 + "px";
    adding.style.height = height1 - 1 + "px";
    });