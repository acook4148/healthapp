window.onload=set;

dailyCals = 1500;

goalCals = 3000
function set() {
    let bar = document.getElementById("myBar");
    let cals = document.getElementById("cals");
    cals.innerText = dailyCals + " Calories";

    bar.style.width = "50%";
}

