let seconds = document.getElementById('seconds');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let date = new Date();
let dateMinutes = date.getMinutes();
let dateSeconds = date.getSeconds();
let dateHours = date.getHours();
console.log(dateHours, dateMinutes, dateSeconds);
let fullHour ="Activation time: " +dateHours + ' : ' +dateMinutes+' : ' + dateSeconds;
document.getElementById("intimehour").innerHTML = fullHour;
/*seconds.style.animationPlayState = "paused";
minutes.style.animationPlayState = "paused";
hours.style.animationPlayState = "paused";*/
if(dateHours>12){
    dateHours = dateHours - 12;
}
//pregntar como editar estado de steps segun segundos o minutos pasados
let currentHour = (dateHours*60) + (dateMinutes*1);
let percentHours = (360 / 43200) * (currentHour * 60);
let percentMin = dateMinutes * 6;
let percentSec = dateSeconds * 6;
seconds.style.transform = "rotateZ(" + percentSec + "deg)";
minutes.style.transform = "rotateZ(" + percentMin + "deg)";
hours.style.transform = "rotateZ(" + percentHours + "deg)";
seconds.style.mozTransform = "rotateZ(" + percentSec + "deg)";
minutes.style.mozTransform = "rotateZ(" + percentMin + "deg)";
hours.style.mozTransform = "rotateZ(" + percentHours + "deg)";
seconds.style.webkitTransform = "rotate(" + percentSec + "deg)";
minutes.style.webkitTransform = "rotate(" + percentMin + "deg)";
hours.style.webkitTransform = "rotate(" + percentHours + "deg)";
/*seconds.style.animationPlayState = "running";
minutes.style.animationPlayState = "running";
hours.style.animationPlayState = "running";*/
