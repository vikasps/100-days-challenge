console.log('I am in Java Script')

const form = document.getElementById("subjectForm")
const tBody = document.querySelector('.myMarks')
const calcButton = document.getElementById("calcButton")

const displayResult = document.getElementById("displayResult")
displayResult.style.display = 'None'

calcButton.addEventListener('click', readmarks)

form.addEventListener('submit', addSubject)

function addSubject(e) {

    const subject = document.getElementById('subject').value
    const maxMark = document.getElementById('maxMark').value
    const markScored = document.getElementById('markScored').value

    const tr = document.createElement('tr')
    let slno = countOfRows() + 1

    const data = `<td>${slno}</td><td>${subject}</td><td id="mmark">${maxMark}</td><td id="smark">${markScored}</td><td>${markScored}</td>`
    tr.innerHTML = data
    tBody.appendChild(tr)

    // readmarks()

    e.preventDefault()
}

function countOfRows(){
    const rowCount = tBody.childElementCount
    return rowCount
}

function readmarks(){

displayResult.style.display = 'Block'
const count =  tBody.childNodes.length
// console.log('Total element = ' + count)
let sum = 0;
for(i=0;i<count;i++) {
    // console.log(tBody.childNodes[i])
    childCount = tBody.childNodes[i].childNodes.length
    // console.log('Child Count ' + childCount)
    for(j=0;j<childCount;j++)
    {
        if(tBody.childNodes[i].childNodes[j].id == 'smark') {
            // console.log('The Value is ' + tBody.childNodes[i].childNodes[j].textContent)
            sum = sum + Number(tBody.childNodes[i].childNodes[j].textContent)
        }
    }
}

const total = document.getElementById("total")
const percent = document.getElementById("percent")
total.textContent = sum
percent.textContent = (sum / 500) * 100

if(percent.textContent>70){
    elgibility = `<div><span class='text-success font-weight-bold'>congratulations! </span>You are eligible</div>`
}else{
    elgibility = `<span class="h1 text-danger font-weight-bold">Sorry!</span> You are not eligible`
}

document.getElementById('eligibility').innerHTML = elgibility;
}

