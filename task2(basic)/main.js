// Task1
console.log('Get date and Time');
var currentTime = new Date();
var day = currentTime.getDay();
var daylist=['sat','sun','mon','tus','wedn','tur','fri'];

console.log('Today is :'+daylist[day]);

var hour = currentTime.getHours();
hour = (hour >12) ? hour-12 : hour;
var pre = (hour>=12) ? 'PM' :'AM';
var minuts = currentTime.getMinutes();
var second = currentTime.getSeconds();

console.log('Current time is :'+ hour + ''+ pre +': '+minuts +': '+second+' ');
// console.log(' ________________________________-');
//Task2
function printwindow() {
  window.print()
}
// console.log('________________________________-');

// Task3
console.log('Get Date');
console.log(currentTime.getDate()+"/"+currentTime.getMonth()+'/'+currentTime.getFullYear());


//Task4
var side1 = 3;
var side2 = 4;
var side3 = 5;
var prei  = (side1+side2+side3)/2;
console.log("perimeter is :" +prei);
var area  = Math.sqrt(prei*((prei-side1)*(prei-side2)*(prei-side3)));
console.log('Area Is :' +area);

// Task 5

function rotate() {
  var text =document.getElementById('mmg').childNodes[0].data;
  setInterval(function ()
{
 text = text[text.length -1] + text.substring(0, text.length - 1);
  document.getElementById('mmg').childNodes[0].data = text;
  // console.log(text);
}, 300);
}
// Task 6
function leapBut(){
  var year =document.getElementById('year').value;
  var leap = document.getElementById('leap').textContent ;
  leap ='mmg'
  if (year % 4 ==0){
    if (year % 100 == 0) {
       if (year % 400 == 0) {
         leap ='True';
         console.log('leap year');
       }else {
         leap ='False';
         console.log('Not leap');
       }
    }else {
      leap ='True';
      console.log('leap year');
    }
  }else {
    leap ='False';
    console.log('Not leap year');
  }
}

// Task 7
// var cal ={
//   num1 : document.getElementById("firstNumber").value ,
//   num2 : document.getElementById("secondNumber").value,
//   multiplyBy :function()  {
//     document.getElementById("result").innerHTML = num1 * num2;
//
//   }
// }
function multiplyBy()
{
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
  console.log(num1+'------------'+num2);
}
function divideBy() {
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

// Task 8
console.log(document.URL);

// Task 9
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());


// TAsk 10
var audio = new Audio();
audio.src ='short.mp3';
audio.loop = true;

var timeout;
function setAlarm(button) {
  var ms =document.getElementById('alarmTime').valueAsNumber;
  if (isNaN(ms)) {
    alert('Enter the Time');
    return;

  }
  var alarm =new Date(ms);
  var alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes());
  var difference = alarmTime.getTime()- (new Date()).getTime();
  console.log(difference);
  console.log(alarmTime);
  if (difference <= 0) {
    alert('Time is pass');
    return;
  }

timeout = setTimeout(initAlarm,difference);
button.innerText='cancel';
button.setAttribute('onclick','cancelbutton(this)')

};

function cancelbutton(button) {
  button.innerText='Set Alarm';
  button.setAttribute('onClick','setAlarm(this)');
  clearTimeout(timeout);

}
function initAlarm() {
  audio.play();
  document.getElementById('alarmOption').style.display='';
};

function stop() {
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('alarmOption').style.display='none';

}
function snooze() {
  stop();
  setTimeout(initAlarm ,3600);
}
