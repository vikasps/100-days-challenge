console.log(document.getElementById("box").style.top);
var element = document.getElementById('box'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('top');
    console.log(top);
// var con = document.getElementById("box").computedStyleMap().get('top');
// console.log(con);
document.getElementById("down").addEventListener("click",function(){

    var mvbox = document.getElementById("box");
    // console.dir(mvbox);
    // console.log(mvbox.style);

    const downward = document.querySelector('#box').style.top;
    // console.dir(downward);
    //  console.log(downward);
   mvbox.style.top = downward + 10 + "px";
    // console.dir( mvbox.style.offsetTop);
    console.dir(downward + 10 + "px");
    });



// const height1 = document.querySelector('#circle').offsetHeight;
//     const width1 = document.querySelector('#circle').offsetWidth;
//     var adding = document.getElementById("circle");
//     adding.style.width = width1 - 1 + "px";
//     adding.style.height = height1 - 1 + "px";
