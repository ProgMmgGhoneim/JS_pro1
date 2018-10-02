function check() {
  var q1 =document.getElementById('aQ1').value;
  var q2 =document.getElementById('aQ2').value;
  var q3 =document.quiz_form.Q3.value
  var q4 =document.quiz_form.Q4.value

  var c = 0;
  if(q1 == " " || q2 == " "){
    alert('you must enter the value for all questiom !')
  }else {
    if (q1 == "mmg") {
      c++;
    }
    if (q2 == "21") {
      c++;
    }
    if (q3 == "30") {
      c++;
    }
    if (q4 == "capital of Egypt") {
      c++;
    }
    document.getElementById('after_fin').style.visibility ="visible";
    document.getElementById('count').innerHTML= " you got "+ c +" correct";
    console.log(c);
  }

}
