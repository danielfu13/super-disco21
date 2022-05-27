
//var todayDate = new Date();
//document.getElementById('current-date').innerHTML=todayDate;
var todayDate = new Date();
var date = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate();
var time = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
var dateTime = date+' '+time;
document.getElementById('current-date').innerHTML= dateTime;

var am9 = todayDate.getHours(9);
var am10 = todayDate.getHours(10);
var am11 = todayDate.getHours(11);
var pm12 = todayDate.getHours(12);
var pm1 = todayDate.getHours(13);
var pm2 = todayDate.getHours(14);
var pm3 = todayDate.getHours(15);
var pm4 = todayDate.getHours(16);
var pm5 = todayDate.getHours(17);
 
var currentHour = [am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];

