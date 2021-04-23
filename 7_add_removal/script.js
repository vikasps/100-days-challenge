var highlighter = document.getElementById("highlighter");
var tag  = document.getElementsByTagName("p");
var i;
document.getElementById("add").addEventListener("click",function(){

// console.log('sss tag', tag);
// var addclass = document.getElementsByClassName('bghl');


for (i = 0; i < tag.length; i++) {

tag[i].classList.add('bghl');

// tag+= tag[i] + "<br>";
}
});



document.getElementById("sub").addEventListener("click",function(){
for (i = 0; i < tag.length; i++) {

tag[i].classList.remove('bghl');

}});


// tag.style.backgroundColor = "red";