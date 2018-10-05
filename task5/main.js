
var inText =document.getElementById('password') ;
var checkboxIn = document.getElementById('checkbox');
var pastext =document.getElementById('pastext');
checkboxIn.onclick = function () {
  if (this.value === 'Show') { //checkboxIn.checked == true
    inText.setAttribute('type','text');
    this.setAttribute('value','Hide');
    pastext.textContent ="Hide Password";
  }else {
    inText.setAttribute('type','password');
    this.setAttribute('value','Show')
    pastext.textContent ="Show Password";

  }
}
// //////////////////////////////////

var task2In =document.getElementById("task2In");
task2In.onfocus =function () {
  this.setAttribute('data-store',this.getAttribute('placeholder'))
  this.placeholder=''

}

task2In.onblur =function () {
  this.placeholder=this.getAttribute('data-store')
  this.setAttribute('data-store','')

}
// /////////////////////////////////
var task3In =document.getElementById('task3In') ,
    task3Btn =document.getElementById('task3Btn'),
    task3Text =document.getElementById('task3Text');

var i =0;
task3Btn.onclick =function () {
  console.log(task3In.value);
  if (task3In.value !="") {
    var task3Intereval =setInterval(function () {
      task3Text.textContent +=task3In.value[i].toUpperCase();
      i+=1;
      if (i>(task3In.value).length-1) {
        clearInterval(task3Intereval);
      }
    },800);
  }else {
    alert('Enter the Value ,please')
  }
}
// ///////////////////////////
var RGB ='rgb('+
          Math.floor(Math.random()*255) +','+
          Math.floor(Math.random()*255) +','+
          Math.floor(Math.random()*255) +"," +
          Math.ceil(Math.random() * 10) / 10 +')';

console.log(RGB);
var task4Text =document.getElementById('task4Text').style.background=RGB;

// ////////////////////////
var task5In = document.getElementById('task5In') ,
    task5TextArea = document.getElementById('task5TxtArea');

task5In.onkeyup = function () {
  document.getElementById('task5Text').textContent=this.value
}
task5TextArea.onkeyup =function () {
  document.getElementById('Task5P').textContent=this.value
  console.log(task5TextArea.textContent);

}
// //////////////////////////
var task6In =document.getElementById('task6In'),
    task6Btn =document.getElementById('task6Btn');

task6Btn.onclick = function () {
  window.location.assign(task6In.value)
}

// //////////////////////////
var topBtn = document.getElementById('topBtn'),
    downBtn= document.getElementById('downBtn');

window.onscroll =function () {
  if (window.pageYOffset>=400) {
    topBtn.style.display='inline';
    downBtn.style.display='none';
    topBtn.onclick =function () {
    window.scrollTo(0,0)
    }
  }else {
    topBtn.style.display='none';
    downBtn.style.display='inline';
    downBtn.onclick =function () {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }
}
// //////////////////////////

var task8Ch =document.getElementById('task8Ch');
task8Ch.onclick =function () {
  if (task8Ch.checked) {
    document.addEventListener('contextmenu',function(e){
      e.preventDefault();
      alert(' Right Click Is Not avialble')
    })
  }
}
