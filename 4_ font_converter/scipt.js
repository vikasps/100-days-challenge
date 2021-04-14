function camelCase(str) {
    // https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    console.log(str);
    return str

        .replace(/\s(.)/g, function(a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function(b) {
            return b.toLowerCase();
        });
}

document.getElementById("upperCase").addEventListener("click",function(){
var input = document.getElementById("inputdata").value;
// alert(input);

document.getElementById("inputdata").value = input.toUpperCase();
// input.toUpperCase();
// var str = "Hello World!";
//   var res = str.toUpperCase();
//   document.getElementById("demo").innerHTML = res;
});

document.getElementById("lowerCase").addEventListener("click",function(){
    var input = document.getElementById("inputdata").value;

    document.getElementById("inputdata").value = input.toLowerCase();

});



document.getElementById("camelCase").addEventListener("click",function(str){
    var input = document.getElementById("inputdata").value;
    console.log(input);
    document.getElementById("inputdata").value = camelCase(input);



});





