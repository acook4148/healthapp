window.addEventListener('load', function () {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let datetime = new Date();
    const date = datetime.getDate();
    const month = datetime.getMonth();
    const day = datetime.getDay();
    document.getElementById("time").textContent = `Activity for ${weekdays[day]} ${months[month]}, ${date}`; 
  })