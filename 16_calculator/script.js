var output = 0;
document.getElementById("add").addEventListener("click",function(){

    var ipt = parseFloat(document.getElementById("ip").value);
output = parseFloat(ipt) + output;
document.getElementById("op").value = output;
document.getElementById("ip").value="";






});






// // document.getElementById('ipt').value = "";
// var
// var calculation_1 =  parseFloat(calculation)+ ipt;
// document.getElementById("op").value = calculation_1;



// // var calculation_1 =  document.getElementById("op").value;

// // var finaloutput = calculation_1+calculation;

// // calculation_1.innerHTML = finaloutput;

// // console.log(finaloutput);



//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}

