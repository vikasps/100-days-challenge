var person;

var storedArr = JSON.parse(localStorage.getItem("personArr"));

var edit_mode = false;

var index_no = null;

if (storedArr !== null) {
  person = storedArr;
  tablerendering(person);
} else {
  person = [];
}

var display_1 = document.getElementById("display_11");
var display_2 = document.getElementById("display_22");
var display_3 = document.getElementById("display_33");
var display_4 = document.getElementById("display_44");
var display_5 = document.getElementById("display_55");
var display_6 = document.getElementById("display_66");
var display_7 = document.getElementById("display_77");

function handleFormSubmit() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var tamil = document.getElementById("tamil").value;
  var english = document.getElementById("english").value;
  var maths = document.getElementById("maths").value;
  var science = document.getElementById("science").value;
  var socialscience = document.getElementById("socialscience").value;

  if (name === "" || id === "" || tamil === "" || english === "") {
    display_1.style.display = "block";
    display_2.style.display = "block";
    display_3.style.display = "block";
    display_4.style.display = "block";
    display_5.style.display = "block";
    display_6.style.display = "block";
    display_7.style.display = "block";
  }

  if (name === "") {
    // alert("error");
    display_1.style.display = "block";
    return false;
  } else {
    display_1.style.display = "none";
  }
  if (id === "") {
    display_2.style.display = "block";
    return false;
  } else {
    display_2.style.display = "none";
  }

  if (tamil === "") {
    display_3.style.display = "block";
    return false;
  } else {
    display_3.style.display = "none";
    tamil = parseFloat(tamil);
  }

  if (english === "") {
    display_4.style.display = "block";
    return false;
  } else {
    display_4.style.display = "none";
    english = parseFloat(english);
  }

  if (maths === "") {
    display_3.style.display = "block";
    return false;
  } else {
    display_3.style.display = "none";
    maths = parseFloat(maths);
  }
  if (science === "") {
    display_3.style.display = "block";
    return false;
  } else {
    display_3.style.display = "none";
    science = parseFloat(science);
  }
  if (socialscience === "") {
    display_3.style.display = "block";
    return false;
  } else {
    display_3.style.display = "none";
    socialscience = parseFloat(socialscience);
  }

  var total = tamil + english + maths + science + socialscience;
  var average = total / 5;

  if (edit_mode) {
    console.log("edit mode");

    for (let i = 0; i < person.length; i++) {
      if (i == index_no) {
        console.log("came inside");

        person[i].name = name;
        person[i].id = id;
        person[i].tamil = tamil;
        person[i].english = english;
        person[i].maths = maths;
        person[i].science = science;
        person[i].socialscience = socialscience;
        person[i].total = total;
        person[i].average = average;
        break;
      }
    }
    index_no = null;
    edit_mode = false;
    clearingData();
  } else {
    var details = {
      name: name,
      id: id,
      tamil: tamil,
      english: english,
      maths: maths,
      science: science,
      socialscience: socialscience,
      total: total,
      average: average,
    };

    console.log("create mode");

    // console.log(details);
    person.push(details);
  }
  localStorage.setItem("personArr", JSON.stringify(person));
  tablerendering(person);
  clearingData();
}

var clrData = document.getElementById("sbtbtn");

function handleUpdatingForm() {
  console.log("hey");
  updtTextChangingBtn();
  var clrBtn = document.createElement("button");
  clrBtn.innerHTML = "Cancel";
  clrBtn.type = "button";
  clrBtn.className = "btn btn-primary";
  clrBtn.setAttribute("id", "clrId");
  clrData.appendChild(clrBtn);
  clrBtn.addEventListener("click", function () {
    clearingData();
  });
}

function clearingData() {
  console.log("asdfghjkl");
  emptyingInput();
  index_no = null;
  edit_mode = false;
  sbmTextChangingBtn();
  updRmvBtn();
}

function sbmTextChangingBtn() {
  var btntext = document.getElementById("submit");
  btntext.innerHTML = "submit";
}
function updtTextChangingBtn() {
  var btntext = document.getElementById("submit");
  btntext.innerHTML = "Update";
}
function updRmvBtn() {
  var updClr = document.getElementById("clrId");
  updClr.remove();
}

function handleEditRow(e) {
  if (edit_mode == false) {
    handleUpdatingForm();
  }
  edit_mode = true;
  rmvInptErr();
  var trData = e.parentNode.parentNode;
  index_no = trData.cells[2].getAttribute("data-index");

  document.getElementById("name").value = trData.cells[0].innerHTML;
  document.getElementById("id").value = trData.cells[1].innerHTML;
  document.getElementById("tamil").value = trData.cells[2].innerHTML;
  document.getElementById("english").value = trData.cells[3].innerHTML;
  document.getElementById("maths").value = trData.cells[4].innerHTML;
  document.getElementById("science").value = trData.cells[5].innerHTML;
  document.getElementById("socialscience").value = trData.cells[6].innerHTML;
}

function handleDeleteRow(e) {
  var trData = e.parentNode.parentNode;
  console.log(trData);
  index_no = trData.cells[2].getAttribute("data-index");
  person.splice(index_no, 1);

  localStorage.setItem("personArr", JSON.stringify(person));
  tablerendering(person);
}

function tablerendering(person) {
  const table = document
    .getElementById("creating_table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  for (i = 0; i < person.length; i++) {
    const tr = document.createElement("tr");

    tr.setAttribute("data-index", i);
    tr.setAttribute("class", "tr-section");
    tr.innerHTML = `
    <td scope="col">${person[i].name}</td>
    <td scope="col">${person[i].id}</td>
    <td  scope="col"data-index="${i}">${person[i].tamil}</td>
    <td scope="col">${person[i].english}</td>
    <td scope="col">${person[i].maths}</td>
    <td scope="col">${person[i].science}</td>
    <td scope="col">${person[i].socialscience}</td>
    <td scope="col">${person[i].total}</td>
    <td scope="col">${person[i].average}</td>
    <td scope="col"><button type="button" class="btn btn-primary editbtn"  onclick=handleEditRow(this) class="edit">Edit</button></td>
    <td scope="col"><button type="button" class="btn btn-primary dltbtn"  onclick=handleDeleteRow(this) class="edit">Delete</button></td>
    `;
    // td.className = "td-section";
    table.appendChild(tr);
  }
}
function rmvInptErr() {
  display_1.style.display = "none";
  display_2.style.display = "none";
  display_3.style.display = "none";
  display_4.style.display = "none";
  display_5.style.display = "none";
  display_6.style.display = "none";
  display_7.style.display = "none";
}

function emptyingInput() {
  console.log("lkjhgfdkjhgfds");
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("tamil").value = "";
  document.getElementById("english").value = "";
  document.getElementById("maths").value = "";
  document.getElementById("science").value = "";
  document.getElementById("socialscience").value = "";
}
