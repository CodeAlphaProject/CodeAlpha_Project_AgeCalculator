const todayInput = document.querySelector('.date input');
const birthInput = document.querySelector('.birth input');
const calculate = document.getElementById('btn1');
const clear = document.getElementById('btn2');
const resultTable = document.querySelector('.result table tr:last-child');
//CLEAR FUNCTION
clearFields();
//CALCULATE AGE
function calculateAge() {
    const today = new Date(todayInput.value);
    const birth = new Date(birthInput.value);

    if (!today || !birth || today < birth) {
        alert("Pleace Enter the valid date");
        return;
    }
    let months = today.getMonth() - birth.getMonth();
    let years = today.getFullYear() - birth.getFullYear();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    resultTable.cells[0].textContent = years;
    resultTable.cells[1].textContent = months.toString().padStart(2, '0');
    resultTable.cells[2].textContent = days.toString().padStart(2, '0');
}
//CLEAR FUNCION
function clearFields() {
    todayInput.value = '';
    birthInput.value = '';
    resultTable.cells[0].textContent = '';
    resultTable.cells[1].textContent = '';
    resultTable.cells[2].textContent = '';
}
