window.onload=set;

let dailyCals = 2000;

const goalCals = 3000
function set() {
    let bar = document.getElementById("myBar");
    let cals = document.getElementById("cals");
    let percentHTML = document.getElementById("percent");
    let percent = Math.floor(((dailyCals*100.0)/goalCals)).toString() + "%";

    cals.innerText = `${dailyCals}/${goalCals} Goal`;
    percentHTML.innerText = percent;
    bar.style.width = percent;
}

function addFood() {
    let name = document.getElementById("food").value;
    let calories = parseInt(document.getElementById("calories").value);

    let error = document.getElementById("errorMessage");
    if (name === "" || isNaN(calories)) { 
        error.style.display = "block";
        return;
    }

    error.style.display = "none";
    dailyCals += calories;
    set();

    //add to food log
    let foodLog = document.getElementById("foodLog");

    let tr = foodLog.insertRow(-1);

    // Insert a cell in the row at index 0
    let td = tr.insertCell(0);
    let td2 = tr.insertCell(1);
    
    // Append a text node to the cell
    td.appendChild(document.createTextNode(name));

    td2.appendChild(document.createTextNode(calories));
}
