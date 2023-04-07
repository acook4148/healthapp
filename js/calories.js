window.onload=set;

const dailyCals = 2000;

const goalCals = 3000
function set() {
    let bar = document.getElementById("myBar");
    let cals = document.getElementById("cals");
    cals.innerText = `Daily Total: ${dailyCals} Calories \n 
                        Goal: ${goalCals} Calories`;

    let percent = ((dailyCals*100.0)/goalCals).toString() + "%";
    bar.style.width = percent;
}

