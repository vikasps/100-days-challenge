retriving();

function retriving() {
  var resumeform = JSON.parse(localStorage.getItem("completeform"));
  const table = document
    .getElementById("creating_table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  for (i = 0; i < resumeform.length; i++) {
    const tr = document.createElement("tr");
    tr.setAttribute("data-index", i);
    tr.setAttribute("class", "tr-section");
    tr.innerHTML = `
      <td scope="col"data-index="${i}">${resumeform[i].firstname}</td>
      <td scope="col">${resumeform[i].lastname}</td>
      <td scope="col">${resumeform[i].gender}</td>
      <td scope="col">${resumeform[i].phonenumber}</td>
      <td scope="col">${resumeform[i].email}</td>
      <td scope="col">${resumeform[i].password}</td>
      <td scope="col">${resumeform[i].address}</td>
      <td scope="col">${resumeform[i].address2}</td>
      <td scope="col">${resumeform[i].city}</td>
      <td scope="col">${resumeform[i].state}</td>
      <td scope="col">${resumeform[i].pincode}</td>
      <td scope="col">${resumeform[i].know_language}</td>
      <td scope="col">${resumeform[i].html}</td>
      <td scope="col">${resumeform[i].css}</td>
      <td scope="col">${resumeform[i].js}</td>
      <td scope="col"><button type="button" id="editid" onclick="edit(this)" class ="edit btn btn-success">Edit</button></td>
      <td scope="col"><button type="button"  class = "btn btn-success  class="delete">delete</button></td>
      `;

    table.appendChild(tr);
  }
}

function edit(prnt) {
  console.log(prnt);
  var trData = prnt.parentNode.parentNode;

  index_no = trData.cells[0].getAttribute("data-index");

  console.log(index_no, "indexxxx");

  // localStorage.setItem("editing", index_no);

  localStorage.setItem("editing", JSON.stringify(index_no));

  // checking remaining Storage

  // var editdata = JSON.parse(localStorage.getItem("completeform"));
  // console.log(editdata, "its edit modeeee");

  // console.log(editdata.firstname, "im firstname");

  // ended here

  // document.getElementById("firstname").value = trData.cells[0].innerHTML;
  // document.getElementById("lastname").value = trData.cells[1].innerHTML;
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
  location.href = "index_1.html";
}

// function test() {
//   var button = document.getElementById("edit2id");

//   var id = button.getAttribute("data-id");
//   console.log(id);
// }
