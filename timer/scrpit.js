let timer = document.getElementById("timer");
let seconds = 0
let minutes = 0
let time;
let is_time_running = false;
function startBtn(){
    if(is_time_running==true){
        return
    }
    is_time_running=true
    time = setInterval(function(){
        seconds++;
        if(seconds==60){
            minutes++;
            seconds = 0;
        }
        let min;
        if(minutes<10){
            min = "0"+minutes
        }else{
            min = minutes
        }
        let sec;
        if(seconds<10){
            sec="0"+seconds
        }else{
            sec=seconds
        }
        
        timer.textContent = min+":"+sec;
    },1000)
}


function stopBtn(){
    clearInterval(time)
    is_time_running=false
}

function resetBtn(){
    seconds = 0;
    minutes = 0
    timer.textContent = "00:00";
    clearInterval(time)
    is_time_running=false
}
