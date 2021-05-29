var resumeform;

function handling_submitting_form() {
  var firstname_1 = document.getElementById("inputfirstname").value;

  var lastname_1 = document.getElementById("inputlastname").value;
  var gender = checkButton();

  var phonenumber = document.getElementById("inputphonenumber").value;
  var email = document.getElementById("inputEmail").value;

  var password = document.getElementById("inputpassword").value;

  var address = document.getElementById("inputAddress").value;

  var address2 = document.getElementById("inputAddress2").value;
  var city = document.getElementById("inputCity").value;

  var state = document.getElementById("inputState").value;

  var pincode = document.getElementById("inputZip").value;

  var knownlanguage = knowlanghandling();
  var languagelevel1 = levelofhtml();
  var languagelevel2 = levelofcss();
  var languagelevel3 = levelofjs();

  var spfn = document.getElementById("sp_fn");
  var spln = document.getElementById("sp_ln");
  var sppn = document.getElementById("sp_pn");
  var spem = document.getElementById("sp_em");
  var sppsw = document.getElementById("sp_psw");
  var spadrs = document.getElementById("sp_adrs");
  var spadrs2 = document.getElementById("sp_adrs2");
  var spcty = document.getElementById("sp_cty");
  var sppc = document.getElementById("sp_pc");

  if (firstname_1 === "") {
    spfn.style.display = "block";
    return false;
  } else {
    spfn.style.display = "none";
  }
  if (lastname_1 === "") {
    spln.style.display = "block";
    return false;
  } else {
    spln.style.display = "none";
  }
  if (phonenumber === "") {
    sppn.style.display = "block";
    return false;
  } else {
    sppn.style.display = "none";
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
  if (
    firstname_1 === "" ||
    lastname_1 === "" ||
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
    spadrs.style.display = "block";
    spadrs2.style.display = "block";
    spcty.style.display = "block";
    sppc.style.display = "block";
  }

  resumeform = [];

  var resumedata = {
    firstname: firstname_1,
    lastname: lastname_1,
    gender: gender,
    phonenumber: phonenumber,
    email: email,
    passsword: password,
    address: address,
    // non-indian;
    address2: address2,
    city: city,
    state: state,
    pincode: pincode,
    know_language: knownlanguage,
    html: languagelevel1,
    css: languagelevel2,
    js: languagelevel3,
  };

  resumeform.push(resumedata);
  console.log(JSON.stringify(resumedata));
  localStorage.setItem("completeform", JSON.stringify(resumeform));
}

function handleClick(cb) {
  var _selector = document.querySelector("input[name=nicheck]");
  console.log("Clicked, new value = " + cb.checked);

  console.log("ss", _selector);
  _selector.addEventListener("change", function (event) {
    if (_selector.checked) {
      document.getElementById("adrs2").style.display = "block";
    } else {
      if (address2 === "") {
        spadrs2.style.display = "none";
      }

      document.getElementById("adrs2").style.display = "none";
      document.getElementById("inputAddress2").value = null;
    }
  });
  inprmv();
}

function checkButton() {
  var selected = document.querySelector(
    "input[type=radio][name=gender]:checked"
  );
  console.log(selected.value);
  return selected.value;
}

function knowlanghandling() {
  var checkboxes = document.getElementsByName("knownlanguage");
  var vals = "";
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    if (checkboxes[i].checked) {
      vals += checkboxes[i].value + ",";
    }
  }
  console.log(vals);
  return vals;
}
function levelofhtml() {
  var selectedlevel_1 = document.querySelector(
    "input[type=radio][name=html]:checked"
  );
  // console.log(selectedlevel_1.value);
  return selectedlevel_1.value;
}
function levelofcss() {
  var selectedlevel_2 = document.querySelector(
    "input[type=radio][name=css]:checked"
  );
  // console.log(selectedlevel_2.value);
  return selectedlevel_2.value;
}
function levelofjs() {
  var selectedlevel_3 = document.querySelector(
    "input[type=radio][name=js]:checked"
  );
  // console.log(selectedlevel_3.value);
  return selectedlevel_3.value;
}
function inprmv() {
  firstname_1.value = "";
  lastname_1.value = "";
  email.value = "";
  password.value = "";
  phonenumber.value = "";
  address.value = "";
  address2.value = "";
  city.value = "";
  state.value = "";
  pincode.value = "";
  ProgressEvent.default;
}
