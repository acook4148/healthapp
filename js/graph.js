time = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

weight = [300, 290, 281, 275, 270, 267, 260, 258, 255, 250, 248, 245]

avgCalorie = [3500, 3200, 3000, 2950, 2900, 2800, 2800, 2750, 2720, 2750, 2700, 2600]

bodyFat = [25, 22, 21.7, 21.5, 21.1, 20.5, 20, 19, 18.8, 18.4, 18, 17]

bench = [150, 175, 200, 210, 215, 220, 225, 228, 230, 235, 236, 238]

const data = {
    "Time": time,
    "Body Weight": weight,
    "Average Calorie Intake": avgCalorie, 
    "Body Fat": bodyFat, 
    "Bench Press": bench
};


weightVtime = formatPoints(time, weight);

// plot(weightVtime)

function plot(pts, x, y) {
    JSC.Chart('chartDiv', {
        type: 'line',
        title_label_text: x + " vs " + y, 
        xAxis_label_text: x,
        yAxis_label_text: y,
        series: [
            {
                points: pts
            }
        ]
        });
}

function rebuild() {
    // test.destroy() to have default chart when screen loads and chart gets deleted when new one is added
    var x = document.getElementById('x').selectedOptions[0].value;
    var y = document.getElementById('y').selectedOptions[0].value;
    plot(formatPoints(data[x], data[y]), x, y);
}


function formatPoints(x, y) {
    points = []
    for (let i = 0; i < time.length; i++) {
        points.push({x: x[i], y: y[i]})
    }

    return points;
}