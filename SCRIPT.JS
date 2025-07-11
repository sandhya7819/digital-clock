function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours :hours;
    minutes = minutes < 10 ? "0" + minutes :minutes;
    seconds = seconds < 10 ? "0" + seconds :seconds;
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    let greeting = "";
    if(now.getHours() >=5 && now.getHours() <12){
        greeting = "GOOD MORNING...SANDHYA !";
    } else if(now.getHours() >=12 && now.getHours() <5){
        greeting = "GOOD AFTERNoON...SANDHYA !";
    }else if(now.getHours() >=5 && now.getHours() <8){
        greeting = "GOOD EVENING...SANDHYA !"
    }else{
        greeting = "GOOD NIGHT...SANDHYA !"
    }
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("digitalClock").textContent = timeString;
  
}
updateClock();
setInterval(updateClock,1000);
// Want me to show a version with AM/PM too? Or you wanna try this much first? 💖







