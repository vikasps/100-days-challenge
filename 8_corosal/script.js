document.getElementById('left').addEventListener("click",function(){
var mobile_1 = document.getElementById("mobile_1");
var laptop_1 = document.getElementById("laptop_1");


    document.querySelector(".lap").style.display = "none"
    document.querySelector(".mobile").style.display = ""
// else(right){
//     document.querySelector("laptop").style.display = "none"
// }



// document.querySelector("mobile").style.display = "none"

});


// document.getElementsByTagName('button').addEventListener("click",function(){
    var bt_1 =document.getElementsByTagName('button')
console.log(bt_1);



document.getElementById('right').addEventListener("click",function(){
    var mobile_1 = document.getElementById("mobile_1");
    var laptop_1 = document.getElementById("laptop_1");

    document.querySelector(".lap").style.display = ""
    document.querySelector(".mobile").style.display = "none"
});
