function updateClock(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds= now.getSeconds()
    let date = now.toDateString()
    let ampm = hours >=12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 -> 12 
    // checks if hours is truthy (i.e., not 0)
    // If hours is 0 (which happens when the original hour was 12 or 24), it sets hours to 12

    hours = hours < 0 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeStr
    document.getElementById("date").textContent = date
}

setInterval(updateClock, 1000);
updateClock() // Run on Load 