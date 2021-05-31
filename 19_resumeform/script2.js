var storedArr = JSON.parse(localStorage.getItem("completeform"));
console.log(storedArr);
var resumeform;
resumeform = storedArr;
tablerendering(this);
function tablerendering(resumeform) {
  const table = document
    .getElementById("creating_table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  for (i = 0; i < resumeform.length; i++) {
    const tr = document.createElement("tr");
    tr.setAttribute("class", "tr-section");
    tr.innerHTML = `
      <td scope="col">${resumeform[i].firstname}</td>


  }
}


