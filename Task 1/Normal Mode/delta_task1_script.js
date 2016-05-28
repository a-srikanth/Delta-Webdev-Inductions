//Stores the date object for the specified event
var eventDate = new Date(2017,04,14,00,00,00,00);

var eventMillis = eventDate.getTime(); 
function displayTime(){
    //Stores the date object for the current date and time 
    var currentDateTime = new Date();
    
    var currentMillis = currentDateTime.getTime();
    
    //remMillis stores the total number of milliseconds left for the 
    //event from the current time.
    var remMillis = eventMillis - currentMillis;
    
    //Convert the milliseconds into days, hours, minutes and seconds
    var remDays = Math.floor(remMillis/(1000*60*60*24));
    var remHours = Math.floor(remMillis/(1000*60*60))-(remDays*24);
    var remMinutes = Math.floor(remMillis/(1000*60))-(remDays*24*60)-(remHours*60);
    var remSeconds = Math.floor(remMillis/1000)-(remDays*24*60*60)-(remHours*60*60)-(remMinutes*60);
    
    //Set the value of the respective elements.
    document.getElementById("days").value = remDays-31; //remDays-31 is given to account for the error of 31 days given by getTime function
    document.getElementById("hrs").value = remHours;
    document.getElementById("mins").value = remMinutes;
    document.getElementById("sec").value = remSeconds;
    
    //Give an alert when timer reaches zero
    //Here remDays=31 is used due to error given by the getTime function.
    if(remDays==31 && remHours==0 && remMinutes==0 && remSeconds==0){
        window.alert("The time has come!!!!");
        return null;
    }
    
    //Function used to run the function after every half second
    setTimeout(displayTime,500);
}
function startClock(){
    setTimeout(displayTime,500);
}
startClock();
