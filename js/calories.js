window.onload=set;

const dailyCals = 2000;

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

