// var phonenumber = document.getElementById("inputphonenumber").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("inputpassword").value;
// var address = document.getElementById("inputAddress").value;
// var address2 = document.getElementById("inputAddress2").value;

// var city = document.getElementById("inputCity").value;
// var state = document.getElementById("inputState").value;
// var pincode = document.getElementById("inputZip").value;

// var firstname = document.getElementById("inputfirstname").Value;
// var lastname = document.getElementById("inputlastname").Value;

var male = document.getElementById("inputmale");
var female = document.getElementById("inputfemale");

function displayRadioValue() {
  var gender = document.getElementById("gender");

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked == true) {
      console.log("Gender: " + gender[i].value, "haiiii");
    }
  }
}

// if (male.checked == true) {
// console.log(value,"asdf");
// }

// else if (&& female.checked == true)){

// }

// if .checked) {
//   malegender = document.getElementById("inputmale").value;
//   console.log(malegender, "lkkkhjh");
// } else if (document.getElementById("inputfemale").checked) {
//   femalegender = document.getElementById("inputfemale").value;
//   console.log(femalegender, "asjk");
// }

//  function onlyOne(radioBtn) {
//   var radioBtn = document.getElementsByName("flexRadioDefault");
//   radioBtn.forEach((item) => {
//     if (item !== radioBtn) item.checked = false;
//   });
// } */}
