console.log(alert)
const form = document.getElementById("dataentry")
const tbody = document.querySelector('.loancalculator')
const calcbutton = document.getElementById("calcbutton")
calcbutton.addEventListener('click',calculateLoan)
form.addEventListener('calculate',calculate)





function dataentry(e){
    // e.preventDefault();
        const amount = document.getElementById('amount').value;

        const percent = document.getElementById('percent').value;
        const years = document.getElementById('years').value;
        var interest = (percent/100)*amount*years;

    }









