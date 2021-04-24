var mobile_1 = document.getElementById("mobile_1");
var laptop_1 = document.getElementById("laptop_1");
var laptop_2 = document.getElementById("laptop_2");
var laptop_3 = document.getElementById("laptop_3");
var laptop_4 = document.getElementById("laptop_4");

document.getElementById('11').addEventListener("click",function(){

    document.querySelector(".lap").style.display = "none"
    document.querySelector(".lap-2").style.display = "none"
    document.querySelector(".lap-3").style.display = "none"
    document.querySelector(".lap-4").style.display = "none"
    document.querySelector(".mobile").style.display = ""
// else(right){
//     document.querySelector("laptop").style.display = "none"
// }



// document.querySelector("mobile").style.display = "none"

});


// document.getElementsByTagName('button').addEventListener("click",function(){
    var bt_1 =document.getElementsByTagName('button')
console.log(bt_1);



document.getElementById('22').addEventListener("click",function(){

    document.querySelector(".lap").style.display = ""
    document.querySelector(".lap-2").style.display = "none"
    document.querySelector(".lap-3").style.display = "none"
    document.querySelector(".lap-4").style.display = "none"
    document.querySelector(".mobile").style.display = "none"
});

document.getElementById('33').addEventListener("click",function(){
    document.querySelector(".lap").style.display = "none"
    document.querySelector(".lap-2").style.display = ""
    document.querySelector(".lap-3").style.display = "none"
    document.querySelector(".lap-4").style.display = "none"
    document.querySelector(".mobile").style.display = "none"

});
document.getElementById('44').addEventListener("click",function(){
    document.querySelector(".lap").style.display = "none"
    document.querySelector(".lap-2").style.display = "none"
    document.querySelector(".lap-3").style.display = ""
    document.querySelector(".lap-4").style.display = "none"
    document.querySelector(".mobile").style.display = "none"

});
document.getElementById('55').addEventListener("click",function(){
    document.querySelector(".lap").style.display = "none"
    document.querySelector(".lap-2").style.display = "none"
    document.querySelector(".lap-3").style.display = "none  "
    document.querySelector(".lap-4").style.display = ""
    document.querySelector(".mobile").style.display = "none"

});


