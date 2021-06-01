var resumeform;

var edit_mode = false;

var index_no = null;




var editdata = JSON.parse(localStorage.getItem("completeform"));
console.log(editdata, "its edit modeeee");

if (editdata !== null) {
  resumeform = editdata;
} else {
  resumeform = [];
}

function handling_submitting_form(event) {
  console.log(document.querySelector(".form-control").value);

  var firstname_1 = document.getElementById("inputfirstname").value;

  var lastname_1 = document.getElementById("inputlastname").value;
  var gender = checkButton();
  console.log("gnd", gender);
  var phonenumber = document.getElementById("inputphonenumber").value;
  var email = document.getElementById("inputEmail").value;

  var password = document.getElementById("inputpassword").value;

  var address = document.getElementById("inputAddress").value;

  var nonIndian = handleClick();
  console.log("nonIndian", nonIndian);

  var address2 = document.getElementById("inputAddress2").value;

  var city = document.getElementById("inputCity").value;

  var state = document.getElementById("inputState").value;

  var pincode = document.getElementById("inputZip").value;

  var knownlanguage = knowlanghandling();
  console.log("chpint3", knownlanguage);
  var languagelevel1 = levelofhtml();
  var languagelevel2 = levelofcss();
  var languagelevel3 = levelofjs();

  var spfn = document.getElementById("sp_fn");
  var spln = document.getElementById("sp_ln");
  var spgnd = document.getElementById("sp_gnd");
  var sppn = document.getElementById("sp_pn");
  var spem = document.getElementById("sp_em");
  var sppsw = document.getElementById("sp_psw");
  var spadrs = document.getElementById("sp_adrs");
  var spadrs2 = document.getElementById("sp_adrs2");
  var spstt = document.getElementById("sp_stt");
  var spcty = document.getElementById("sp_cty");
  var sppc = document.getElementById("sp_pc");
  var spknwlng = document.getElementById("sp_knwlng");
  var sphtml = document.getElementById("sp_html");
  var spcss = document.getElementById("sp_css");
  var spjs = document.getElementById("sp_js");
  console.log("checkpoint2 ");

  console.log("firstname_1 ", firstname_1);
  console.log("lastname_1 ", lastname_1);
  console.log("gender", gender);
  console.log("phonenumber ", phonenumber);
  console.log("email", email);
  console.log("password", password);
  console.log("address", address);
  console.log("address2", address2);
  console.log("city", city);
  console.log("state", state);
  console.log("pincode", pincode);
  console.log("knownlanguage", knownlanguage);
  console.log("html", languagelevel1);
  console.log("css", languagelevel2);
  console.log("js", languagelevel3);

  // console.log(ad);
  if (firstname_1 === "") {
    spfn.style.display = "block";
  } else {
    spfn.style.display = "none";
  }
  if (lastname_1 === "") {
    spln.style.display = "block";
  } else {
    spln.style.display = "none";
  }
  if (gender === "") {
    spgnd.style.display = "block";
  } else {
    spgnd.style.display = "none";
  }
  if (phonenumber === "") {
    sppn.style.display = "block";
  } else {
    sppn.style.display = "none";
  }
  if (email === "") {
    spem.style.display = "block";
  } else {
    spem.style.display = "none";
  }
  if (password === "") {
    sppsw.style.display = "block";
  } else {
    sppsw.style.display = "none";
  }
  if (address === "") {
    spadrs.style.display = "block";
  } else {
    spadrs.style.display = "none";
  }
  if (address2 === "" && nonIndian === true) {
    spadrs2.style.display = "block";
  } else {
    spadrs2.style.display = "none";
  }
  if (city === "") {
    spcty.style.display = "block";
  } else {
    spcty.style.display = "none";
  }
  if (state === "") {
    spstt.style.display = "block";
  } else {
    spstt.style.display = "none";
  }
  if (pincode === "") {
    sppc.style.display = "block";
  } else {
    sppc.style.display = "none";
  }
  if (knownlanguage === "") {
    spknwlng.style.display = "block";
  } else {
    spknwlng.style.display = "none";
  }

  if (languagelevel1 === "") {
    sphtml.style.display = "block";
  } else {
    sphtml.style.display = "none";
  }

  if (languagelevel2 === "") {
    spcss.style.display = "block";
  } else {
    spcss.style.display = "none";
  }
  if (languagelevel3 === "") {
    spjs.style.display = "block";
  } else {
    spjs.style.display = "none";
  }

  console.log("check point ");

  if (
    firstname_1 === "" ||
    lastname_1 === "" ||
    gender === "" ||
    email === "" ||
    password === "" ||
    phonenumber === "" ||
    address === "" ||
    (address2 === "" && nonIndian === true) ||
    city === "" ||
    state === "" ||
    pincode === "" ||
    knownlanguage === "" ||
    languagelevel1 === "" ||
    languagelevel2 === "" ||
    languagelevel3 === ""
  ) {
    // spfn.style.display = "block";
    // spln.style.display = "block";
    // spgnd.style.display = "block";
    // sppn.style.display = "block";
    // spem.style.display = "block";
    // sppsw.style.display = "block";
    // spadrs.style.display = "block";
    // spadrs2.style.display = "block";
    // spcty.style.display = "block";
    // sppc.style.display = "block";
    return false;
  }
  console.log("ck4");

  if (edit_mode) {
    console.log("edit mode");
    handling_edit();
    for (let i = 0; i < resumeform.length; i++) {
      if (i == index_no) {
        console.log("entering edit");

        resumeform[i].firstname = firstname;
        resumeform[i].lastname = lastname;
        resumeform[i].gender = gender;
        resumeform[i].phonenumber = phonenumber;
        resumeform[i].email;
        resumeform[i].password;
        resumeform[i].address;
        resumeform[i].address2;
        resumeform[i].city;
        resumeform[i].state;
        resumeform[i].pincode;
        resumeform[i].know_language;
        resumeform[i].html;
        resumeform[i].css;
        resumeform[i].js;
        break;
      }
    }
    index_no = null;
    edit_mode = false;
    inprmv();
  } else {
    var resumedata = {
      firstname: firstname_1,
      lastname: lastname_1,
      gender: gender,
      phonenumber: phonenumber,
      email: email,
      password: password,
      address: address,
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
  }
  localStorage.setItem("completeform", JSON.stringify(resumeform));
  inprmv();
}

function handleClick(cb) {
  var _selector = document.querySelector("input[name=nicheck]");
  // console.log("Clicked, new value = " + cb.checked);

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
}

function checkButton() {
  var selected = document.querySelector(
    "input[type=radio][name=gender]:checked"
  );
  console.log("ck3", selected);
  if (selected) {
    return selected.value;
  } else {
    return "";
  }
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
  if (selectedlevel_1) {
    console.log("hejjjej", selectedlevel_1.value);
    return selectedlevel_1.value;
  } else {
    return "";
  }
}

function levelofcss() {
  var selectedlevel_2 = document.querySelector(
    "input[type=radio][name=css]:checked"
  );
  if (selectedlevel_2) {
    return selectedlevel_2.value;
  } else {
    return "";
  }
}

function levelofjs() {
  var selectedlevel_3 = document.querySelector(
    "input[type=radio][name=js]:checked"
  );
  if (selectedlevel_3) {
    return selectedlevel_3.value;
  } else {
    return "";
  }
}

function inprmv() {
  document.getElementById("inputfirstname").value = "";

  document.getElementById("inputlastname").value = "";

  document.getElementById("inputmale").checked = false;
  document.getElementById("inputfemale").checked = false;
  document.getElementById("inputphonenumber").value = "";
  document.getElementById("inputEmail").value = "";

  document.getElementById("inputpassword").value = "";
  document.getElementById("inputAddress").value = "";

  document.getElementById("inputAddress2").value = "";
  document.getElementById("inputCity").value = "";
  document.getElementById("inputState").value = "";
  document.getElementById("inputZip").value = "";

  document.getElementById("cbtamil").checked = false;
  document.getElementById("cbenglish").checked = false;
  document.getElementById("cbothers").checked = false;

  document.getElementById("htmllvl1").checked = false;
  document.getElementById("htmllvl2").checked = false;
  document.getElementById("htmllvl3").checked = false;

  document.getElementById("css1").checked = false;
  document.getElementById("css2").checked = false;
  document.getElementById("css3").checked = false;

  document.getElementById("js1").checked = false;
  document.getElementById("js2").checked = false;
  document.getElementById("js3").checked = false;
}
function handling_edit() {
  document.getElementById("firstname").value = editdata.firstname;
  document.getElementById("lastname").value = editdata.lastname;

  // document.getElementById("gender").value = trData.cells[2].innerHTML;
  // document.getElementById("phonenumber").value = trData.cells[3].innerHTML;
  // document.getElementById("email").value = trData.cells[4].innerHTML;
  // document.getElementById("password").value = trData.cells[5].innerHTML;
  // document.getElementById("address").value = trData.cells[6].innerHTML;
  // document.getElementById("address2").value = trData.cells[7].innerHTML;
  // document.getElementById("city").value = trData.cells[8].innerHTML;
  // document.getElementById("state").value = trData.cells[9].innerHTML;
  // document.getElementById("pincode").value = trData.cells[10].innerHTML;
  // document.getElementById("know_language").value = trData.cells[11].innerHTML;
  // document.getElementById("html").value = trData.cells[12].innerHTML;
  // document.getElementById("css").value = trData.cells[13].innerHTML;
  // document.getElementById("js").value = trData.cells[14].innerHTML;
}
