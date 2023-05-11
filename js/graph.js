const time = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const weight = [300, 290, 281, 275, 270, 267, 260, 258, 255, 250, 248, 245]

const avgCalorie = [3500, 3200, 3000, 2950, 2900, 2800, 2800, 2750, 2720, 2750, 2700, 2600]

const bodyFat = [25, 22, 21.7, 21.5, 21.1, 20.5, 20, 19, 18.8, 18.4, 18, 17]

const bench = [150, 175, 200, 210, 215, 220, 225, 228, 230, 235, 236, 238]

const data = {
    "Time": time,
    "Body Weight": weight,
    "Average Calorie Intake": avgCalorie, 
    "Body Fat": bodyFat, 
    "Bench Press": bench
};


weightVtime = formatPoints(time, weight);
// let chart = null;
// plot(weightVtime)

function plot(pts, x, y) {
    chart = JSC.Chart('chart', {
        type: 'line',
        title_label_text: x + " vs " + y, 
        xAxis_label_text: x,
        yAxis_label_text: y,
        // defaultPoint_legendEntry_checkbox_enabled: false,
        series: [
            {
                points: pts
            }
        ]
        });
}

function custom() {
    let customGraph = document.getElementById("custom");
    customGraph.style.display = "block";
}

function rebuild(xaxis, yaxis) {
    // if (chart != null) {
    //     chart.destroy(); // to have default chart when screen loads and chart gets deleted when new one is added

    // }
    

    if (xaxis === "custom") {
        xaxis = document.getElementById('x').selectedOptions[0].value;
        yaxis = document.getElementById('y').selectedOptions[0].value;
    }

    let error = document.getElementById("errorMessage");

    if (xaxis === yaxis) { 
        error.style.display = "block";
        return;
    }
    error.style.display = "none";

    let customGraph = document.getElementById("custom");
    customGraph.style.display = "none";
    
    
    plot(formatPoints(data[xaxis], data[yaxis]), xaxis, yaxis);
}


function formatPoints(x, y) {
    points = []
    for (let i = 0; i < time.length; i++) {
        points.push({x: x[i], y: y[i]})
    }

    return points;
}