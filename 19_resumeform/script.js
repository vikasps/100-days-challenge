var male = document.getElementById("inputmale");
var female = document.getElementById("inputfemale");
var resumeform;

function handling_submitting_form() {
  console.log("haiiiiii");
  var firstname = document.getElementById("inputfirstname").Value;
  var lastname = document.getElementById("inputlastname").Value;
  var phonenumber = document.getElementById("inputphonenumber").value;
  var email = document.getElementById("inputEmail").value;

  var password = document.getElementById("inputpassword").value;

  var address = document.getElementById("inputAddress").value;

  var address2 = document.getElementById("inputAddress2").value;
  var city = document.getElementById("inputCity").value;

  var state = document.getElementById("inputState").value;

  var pincode = document.getElementById("inputZip").value;

  var spfn = document.getElementById("sp_fn");
  var spln = document.getElementById("sp_ln");
  var sppn = document.getElementById("sp_pn");
  var spem = document.getElementById("sp_em");
  var sppsw = document.getElementById("sp_psw");
  var spm = document.getElementById("sp_pm");
  var spadrs = document.getElementById("sp_adrs");
  var spadrs2 = document.getElementById("sp_adrs2");
  var spcty = document.getElementById("sp_cty");
  var sppc = document.getElementById("sp_pc");

  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    password === "" ||
    phonenumber === "" ||
    address === "" ||
    address2 === "" ||
    city === "" ||
    state === "" ||
    pincode === ""
  ) {
    spfn.style.display = "block";
    spln.style.display = "block";
    sppn.style.display = "block";
    spem.style.display = "block";
    sppsw.style.display = "block";
    spm.style.display = "block";
    spadrs.style.display = "block";
    spadrs2.style.display = "block";
    spcty.style.display = "block";
    sppc.style.display = "block";
  }

  if (firstname === "") {
    spfn.style.display = "block";
    return false;
  } else {
    spfn.style.display = "none";
  }
  if (lastname === "") {
    spln.style.display = "block";
    return false;
  } else {
    spln.style.display = "none";
  }
  if (email === "") {
    spem.style.display = "block";
    return false;
  } else {
    spem.style.display = "none";
  }
  if (password === "") {
    sppsw.style.display = "block";
    return false;
  } else {
    sppsw.style.display = "none";
  }
  if (phonenumber === "") {
    sppn.style.display = "block";
    return false;
  } else {
    sppn.style.display = "none";
  }
  if (address === "") {
    spadrs.style.display = "block";
    return false;
  } else {
    spadrs.style.display = "none";
  }
  if (address2 === "") {
    spadrs2.style.display = "block";
    return false;
  } else {
    spadrs2.style.display = "none";
  }
  if (city === "") {
    spcty.style.display = "block";
    return false;
  } else {
    spcty.style.display = "none";
  }
  // if (state === "") {
  //   sppc.style.display = "block";
  //   return false;
  // } else {
  //   sppc.style.display = "none";
  // }

  if (pincode === "") {
    sppc.style.display = "block";
    return false;
  } else {
    sppc.style.display = "none";
  }

  resumeform = [];

  var resumedata = {
    firstname: firstname,
    lastname: lastname,
    // gender:  ,
    phonenumber: phonenumber,
    email: email,
    passsword: password,
    address: address,
    // non-indian;
    address2: address2,
    city: city,
    // state: state,
    // Zip: Zip,
    // know-language:
  };
  resumeform.push(resumedata);
  console.log(JSON.stringify(resumedata));
  localStorage.setItem("completeform", JSON.stringify(resumeform));
}
