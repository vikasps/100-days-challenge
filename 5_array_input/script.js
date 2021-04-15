var ardata = [];
document.getElementById("clicking").addEventListener("click",function(){

const ipdata = document.getElementById("data").value;
console.log(ipdata);

// ardata.push("ipdata");
ardata.push(ipdata);
console.log(ardata);
document.getElementById("data").value = "";
document.getElementById("data").focus();
});