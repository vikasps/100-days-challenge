var person;

var myArr = JSON.parse(localStorage.getItem("personArr"));

var edit_mode = false;

var index_no = null;

// console.log(myArr);
if (myArr !== null) {
  person = myArr;
  myfunction_2(person);
  //table populate
} else {
  person = [];
}

function myfunction() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("class").value;
  var tamil = document.getElementById("tamil").value;
  var english = document.getElementById("english").value;

  // console.log('tamil', tamil);
  // console.log('english', english);
  // console.log("name", name);
  // console.log("id", id);

  // localStorage.setItem('tamilMark', tamil);
  // var tempTamil = localStorage.getItem('tamilMark');
  // console.log(tempTamil);

  var display_1 = document.getElementById("display_11");
  var display_2 = document.getElementById("display_22");
  var display_3 = document.getElementById("display_33");
  var display_4 = document.getElementById("display_44");

  if (name === "" || id === "" || tamil === "" || english === "") {
    display_1.style.display = "block";
    dispFtemplay_2.style.display = "block";
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

  // console.log(tamil, "tamil");
  // console.log(english, "english");

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
  myfunction_2(person);
}

// localStorage.setItem("array", JSON.stringify(person));

// localStorage.clear()

// localStorage.setItem("my_class", id)
// var my_class = localStorage.getItem("my_class");

// console.log(my_class);

// console.log(myArr[0].Name);
function updating_data() {
  var btntext = document.getElementById("submit");
  btntext.innerHTML = "Update";

  var clearingdata = document.querySelector(".submitting_btn");
  var clearbtn = document.createElement("button");
  clearbtn.innerHTML = "Cancel";

  clearbtn.type = "button";
  clearbtn.className = "btn btn-info";
  clearbtn.setAttribute("id", "clearing_id");
  clearingdata.appendChild(clearbtn);
  clearbtn.onclick = function clearing_dataz() {
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("tamil").value = "";
    document.getElementById("english").value = "";

    clearbtn.remove();
    this.remove();
    // console.log(e);
    edit_mode = false;

    changing_btn();
  };
}

function changing_btn() {
  var btntext = document.getElementById("submit");
  btntext.innerHTML = "submit";
}

function editing(e) {
  // console.log(e);
  // debugger;

  if (edit_mode == false) {
    updating_data();
  }
  edit_mode = true;

  var trData = e.parentNode.parentNode;
  console.log(trData, "asdfghjkl;sdfghjklsdfghjklsdfghjkl");
  console.log(e);
  index_no = trData.cells[2].getAttribute("data-index");

  console.log(index_no);
  // if () {
  //     person.push(details);
  //     edit_mode = false;

  // } else {
  //     edit_mode = false;
  // }

  // for (i = 0; i < person.length; i++) {
  //     i === indexof(i);
  // }
  // person[i].name = name;
  // var myValues = new Array();
  // var valueAtIndex1 = person[i];
  // console.log(valueAtIndex1);
  // SVGZoomAndPan
  // var pid = e;
  // // console.log("hai1234");
  // console.log(pid);

  // console.log(trData);
  // for (i = 0; i < 4; i++) {
  //     var x = trData.cells[i].innerHTML;
  //     // console.log('xxx', x);
  // }
  // //    var data1 = trData.cells[0].value
  // //     trData.cells[1].value
  // //     trData.cells[2].value
  // //     trData.cells[3].value

  document.getElementById("name").value = trData.cells[0].innerHTML;
  document.getElementById("class").value = trData.cells[1].innerHTML;
  document.getElementById("tamil").value = trData.cells[2].innerHTML;
  document.getElementById("english").value = trData.cells[3].innerHTML;
}

function deleting(e) {
  console.log("asfdgfghf");
  // var remove_row = e.parentNode.parentNode;
  // // console.log(remove_row, "heyyyyyyyyyyyy");
  // remove_row.remove();

  var trData = e.parentNode.parentNode;
  console.log(trData);
  index_no = trData.cells[2].getAttribute("data-index");
  person.splice(index_no, 1);

  // console.log(person);
  localStorage.setItem("personArr", JSON.stringify(person));
  myfunction_2(person);
}

// console.log(data - index[1], "12345");
// console.log(person, "baaskfboaahf");

// for (var i = person.length - 1; i >= 0; i--) {
//     var removing_data = remove_row.data - index[i]
//     if (person[i] === removing_data) {

//         person.splice(i, i);
//     }

// localStorage.removeItem('personArr[e]');
// remove_row.parentNode.removeChild();
// deleteRow(0)
// index_no = trData.cells[2].getAttribute('data-index');
// document.getElementById("tr").remove();

// document.getElementsByTagName("tr")[i].remove();
// localStorage.removeItem("remove_row");

// var table = document.getElementById("tr");

// localStorage.clear();

// };

// tr.td.first child.GETARRRIRTUBE.indexof(0).

function myfunction_2(person) {
  // console.log(person, "person");
  const table = document
    .getElementById("creating_table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  for (i = 0; i < person.length; i++) {
    // console.log(person[i]);
    // person[0];
    const tr = document.createElement("tr");
    // console.log(person);

    tr.setAttribute("data-index", i);
    // tr.setAttribute('data-random', Math.random());
    // tr.setAttribute('data-myName', 'vikas');

    tr.innerHTML = `
    <td scope="col">${person[i].Name}</td>
    <td scope="col">${person[i].Id}</td>
    <td  scope="col"data-index="${i}">${person[i].Tamil}</td>

    <td scope="col">${person[i].English}</td>
    <td scope="col">${person[i].Total}</td>
    <td scope="col">${person[i].Average}</td>
    <td scope="col"><button type="button" class="btn btn-info"  onclick=editing(this) class="edit">Edit</button></td>
    <td scope="col"><button type="button" class="btn btn-info"  onclick=deleting(this) class="edit">Delete</button></td>
    `;
    table.appendChild(tr);
  }

  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("tamil").value = "";
  document.getElementById("english").value = "";
}
