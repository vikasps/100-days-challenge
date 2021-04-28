// inputempimg
// firstName
// lastName
// employeeId
// inputEmail4
// inputPassword4
// mobileNumber
// relativeMobileNumber
// inputAddress
// inputAddress2
// inputCity
// inputState
// inputZip
// inputpastcmpy
// inputexpyears
// inputsalaryperannum

function submittingData(event) {
    event.preventDefault()

    // alert("hai")
    // const inputempimg = document.getElementById('inputempimg').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const employeeId = document.getElementById('employeeId').value;
    const inputEmail4 = document.getElementById('inputEmail4').value;
    // const inputPassword4 = document.getElementById('inputPassword4').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const relativeMobileNumber = document.getElementById('relativeMobileNumber').value;
    const inputAddress = document.getElementById('inputAddress').value;
    // const inputAddress2 = document.getElementById('inputAddress2').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputZip = document.getElementById('inputZip').value;
    const inputpastcmpy = document.getElementById('inputpastcmpy').value;
    const inputexpyears = document.getElementById('inputexpyears').value;
    const inputsalaryperannum = document.getElementById('inputsalaryperannum').value;

    if (firstName === "") {
        alert("*enter the input")
        document.getElementById('firstName').focus();
        document.querySelector('#firstName').style.cssText = "background-color: red;";
        return false;
    }

    if (lastName === "") {

        document.getElementById('lastName').focus();
        document.querySelector('#lastName').setAttribute("background-color: red;");
        return false;
    }

    if (employeeId === "") {

        document.getElementById('employeeId').focus();
        document.querySelector('#employeeId').style.backgroundColor = 'red';
        return false;
    }
    if (inputEmail4 === "") {

        document.getElementById('inputEmail4').focus();
        return false;
    }
    // if(mobileNumber ===""){

    //     document.getElementById('inputEmail4').focus();
    //     return false;
    // }
    // var mobileNumber =  document.getElementById("mobileNumber");
    // var myClass = .getAttribute("class")
    // if(myClass ==='phone' ){
    // alert(22);
    // }




    const listoftable = document.getElementById("listoftable");
    const tr = document.createElement("tr");
    tr.innerHTML = `
<td>${firstName}</td>
<td>${lastName}</td>
<td>${employeeId}</td>
<td>${inputEmail4}</td>
<td>${mobileNumber}</td>
<td>${relativeMobileNumber}</td>
<td>${inputAddress}</td>

<td>${inputCity}</td>
<td>${inputState}</td>
<td>${inputZip}</td>
<td>${inputpastcmpy}</td>
<td>${inputexpyears}</td>
<td>${inputsalaryperannum}</td>

`;
    listoftable.appendChild(tr);


}

function relatiMobileNo() {
    var relativeMobileNumber = document.getElementById("relativeMobileNumber").value;
    if (relativeMobileNumber === "") {
        document.querySelector('#relativeMobileNumber').setAttribute("style", "background-color: red;");
        document.getElementById('relativeMobileNumber').focus();
    } else if (relativeMobileNumber !== "") {
        document.querySelector('#relativeMobileNumber').setAttribute("style", "background-color: white;");
    }
}
// function stateselection(){
//     var mystate = document.getElementById("inputState").value;
//     var hiddenip = document.getElementById("hidden_input");

//     // if(mystate === "others"){
//     //    hiddenip.setAttribute('style', 'display:block !important');
//     // } else {
//     //     hiddenip.setAttribute('style', 'display:none !important');
//     // }
// }


//     var element = function stateselection() {
//     element.classList.toggle("mystyle");
//  if(inputState === 'others'){
//      mystyle.
//  }

//  }


function stateselection() {


    
    var mystate = document.getElementById("inputState").value;
    console.log('my', mystate);
    if (mystate === "others") {
        document.getElementById("hidden_input").classList.remove("d-none");
    }
    else if (mystate !== "others") {
        document.getElementById("hidden_input").classList.add("d-none");
    }



}