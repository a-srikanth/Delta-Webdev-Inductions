    var inputDay=null;
    var inputMonth=null;
    var inputYear=null;
    var inputHours=null;
    var inputMinutes=null;
    var inputSeconds=null;
    
    var myVar1;
    var myVar2;
    
    var eventDate;
    var eventMillis;

function startTimer(){
    inputDay = document.getElementById("dd").value;
    inputMonth = document.getElementById("mm").value;
    inputYear = document.getElementById("yy").value;
    inputHours = document.getElementById("h").value;
    inputMinutes = document.getElementById("m").value;
    inputSeconds = document.getElementById("s").value;
    
    if(inputDay==0 || inputMonth==0 || inputYear==0){
        window.alert("Please enter a specific date");
    }else{
        eventDate = new Date(inputYear,inputMonth-1,inputDay,inputHours,inputMinutes,inputSeconds,00);
        eventMillis = eventDate.getTime();
        
        document.getElementById("timer").style.display="block";
        document.getElementById("input").style.display="none";
        document.getElementById("b_pause").removeAttribute("disabled");
        document.getElementById("b_reset").removeAttribute("disabled");
        document.getElementById("b_start").setAttribute("disabled","disabled");
        startClock();
    }
}
function resetTimer(){
    document.getElementById("input").style.display="block";
    document.getElementById("timer").style.display="none";
    document.getElementById("b_pause").setAttribute("disabled","disabled");
    document.getElementById("b_resume").setAttribute("disabled","disabled");
    document.getElementById("b_start").removeAttribute("disabled");
    document.getElementById("b_reset").setAttribute("disabled","disabled");
    stopClock();
    
}
function pauseTimer(){
    document.getElementById("b_resume").removeAttribute("disabled");
    document.getElementById("b_pause").setAttribute("disabled","disabled");
    stopClock();
}
function resumeTimer(){
    document.getElementById("b_pause").removeAttribute("disabled");
    document.getElementById("b_resume").setAttribute("disabled","disabled");
    startClock();
}

function displayTime(){ 
    
    //Stores the date object for the current date and time 
    var currentDateTime = new Date();
    var currentMillis = currentDateTime.getTime();
    
    //remMillis stores the total number of milliseconds left for the 
    //event from the current time.
    var remMillis = eventMillis - currentMillis;
    
    var test = 01;
    //Convert the milliseconds into days, hours, minutes and seconds
    var remDays = Math.floor(remMillis/(1000*60*60*24));
    var remHours = Math.floor(remMillis/(1000*60*60))-(remDays*24);
    var remMinutes = Math.floor(remMillis/(1000*60))-(remDays*24*60)-(remHours*60);
    var remSeconds = Math.floor(remMillis/1000)-(remDays*24*60*60)-(remHours*60*60)-(remMinutes*60);
    
    //Set the value of the respective elements.
    document.getElementById("days").value = remDays;
    document.getElementById("hrs").value = remHours;
    document.getElementById("mins").value = remMinutes;
    document.getElementById("sec").value = remSeconds;
    
    //Give an alert when timer reaches zero
    if(remDays==0 && remHours==0 && remMinutes==0 && remSeconds==0){
        window.alert("The time has come!!!!");
        return null;
    }
    
    //Function used to run the function after every half second
    myVar2 = setTimeout(displayTime,500);
}
function startClock(){
    myVar1 = setTimeout(displayTime,500);
}
function stopClock(){
    window.clearTimeout(myVar1);
    window.clearTimeout(myVar2)
}

