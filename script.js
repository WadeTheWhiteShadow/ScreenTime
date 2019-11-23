function displayTime(x){
  document.getElementById("TimeMessage").innerHTML = "Computer and phone time:";
  
  TimeString = parseInt(x / 60) + " Hours " + parseInt(x % 60) + " Minutes " + parseInt( ((x % 60) -parseInt(x % 60)) * 60) + " Seconds";
  
  document.getElementById("TotalTime").innerHTML = TimeString
};
var Time = 0;
function AddTime() { 
var Hours = +document.getElementById("Hours").value;
var Minutes = +document.getElementById("Minutes").value;
Time = Time + (Hours * 60) + Minutes * .6;
  timer_is_on = 0;  // stop timer 
  clearTimeout(t);  // when time is added
displayTime(Time);
document.getElementById("Hours").value = "";
document.getElementById("Minutes").value = "";
}
//Code Example at: 
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2 -->
var t;
var timer_is_on = 0;
var start;
var timepast = 0;
var newtime;
function timedCount() {
  t = setTimeout(timedCount, 1000);
  timepast = ((( start - Date.now() ) /1000) / 60);
  newtime = Time + timepast;
displayTime(newtime);
}
function startCount() {
  if (!timer_is_on) {
    start = Date.now();
    Time += timepast;
    timepast = 0;
    timer_is_on = 1;
    timedCount();
  }
  
}
function stopCount() {
  timer_is_on = 0;
  clearTimeout(t);
}
