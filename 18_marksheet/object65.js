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

function handleFormSubmit() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var tamil = document.getElementById("tamil").value;
  var english = document.getElementById("english").value;

  if (name === "" || id === "" || tamil === "" || english === "") {
    display_1.style.display = "block";
    display_2.style.display = "block";
    display_3.style.display = "block";
    display_4.style.display = "block";
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

  var total = tamil + english;
  var average = total / 2;

  if (edit_mode) {
    console.log("edit mode");

    for (let i = 0; i < person.length; i++) {
      if (i == index_no) {
        console.log("came inside");

        person[i].Name = name;
        person[i].Id = id;
        person[i].Tamil = tamil;
        person[i].English = english;
        person[i].Total = total;
        person[i].Average = average;
        break;
      }
    }
    index_no = null;
    edit_mode = false;
    clearingData();
  } else {
    var details = {
      Name: name,
      Id: id,
      Tamil: tamil,
      English: english,
      Total: total,
      Average: average,
    };

    console.log("create mode");

    // console.log(details);
    person.push(details);
  }
  localStorage.setItem("personArr", JSON.stringify(person));
  tablerendering(person);
}

var clrData = document.querySelector(".submitting_btn");

function handleUpdatingForm() {
  updtTextChangingBtn();
  var clrBtn = document.createElement("button");
  clrBtn.innerHTML = "Cancel";
  clrBtn.type = "button";
  clrBtn.className = "btn btn-info";
  clrBtn.setAttribute("id", "clrId");
  clrData.appendChild(clrBtn);
  clrBtn.addEventListener("click", function () {
    clearingData();
  });
}

function clearingData() {
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
    tr.innerHTML = `
    <td scope="col">${person[i].Name}</td>
    <td scope="col">${person[i].Id}</td>
    <td  scope="col"data-index="${i}">${person[i].Tamil}</td>

    <td scope="col">${person[i].English}</td>
    <td scope="col">${person[i].Total}</td>
    <td scope="col">${person[i].Average}</td>
    <td scope="col"><button type="button" class="btn btn-info"  onclick=handleEditRow(this) class="edit">Edit</button></td>
    <td scope="col"><button type="button" class="btn btn-info"  onclick=handleDeleteRow(this) class="edit">Delete</button></td>
    `;
    table.appendChild(tr);
  }
}
function rmvInptErr() {
  display_1.style.display = "none";
  display_2.style.display = "none";
  display_3.style.display = "none";
  display_4.style.display = "none";
}

function emptyingInput() {
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("tamil").value = "";
  document.getElementById("english").value = "";
}
