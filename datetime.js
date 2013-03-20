
try {
var time, hour, minute, second, displaytime, date, date2, months, years, displaydate;

document.write("<p id='timeDisplayer' > </p> <p id='dateDisplayer'> </p>");

function displayTime(){
time = new Date();
hour = time.getHours();
minute = time.getMinutes();
second = time.getSeconds();
displaytime = "<p id='time'>" + hour + ":" + minute + ":" + second + "</p>";
document.getElementById("timeDisplayer").innerHTML= displaytime;
}
setInterval("displayTime()", 1000);

function displayDateEvents(){
date = new Date();
date2 = date.getDate();
months = date.getMonth() + 1;
years = date.getYear() + 1900;
displaydate = "<p id='date'>" +  date2 + "/" + months + "/" + years + "</p>";
document.getElementById("dateDisplayer").innerHTML=displaydate;
}
setInterval("displayDateEvents()", 1000);

}
catch(err){
alert("Hey you have did some error : " + "Please Check it : " + err.message);
}
/* digi0ps 
			github.com/digi0ps
			about.me/digi0ps
			ask.fm/digi0ps
			twitter.com/digi0ps 		*/ 