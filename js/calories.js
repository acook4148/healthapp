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

    dailyCals += calories;
    set();

    //add to food log
    let newFood = document.createElement("li");
    newFood.appendChild(document.createTextNode(name + `: ${calories} Calories`));
    let foodLog = document.getElementById("foodLog");
    foodLog.appendChild(newFood);
}
