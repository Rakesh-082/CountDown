let hour = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let timer = null ;
let [seconds,minutes,hours]= [0,0,0];

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0"+ hours : hours;
    let m = minutes < 10 ? "0"+ minutes : minutes;
    let s = seconds < 10 ? "0"+ seconds : seconds;

    hour.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch ,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours]= [0,0,0];
    hour.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
}