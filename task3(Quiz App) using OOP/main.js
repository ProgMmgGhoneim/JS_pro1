var questions =[
  new Question('what is your name ?',['A','B','C','D'],'A'),
  new Question('where are you from ?',['A','B','C','D'],'A'),
  new Question('how old are you ?',['A','B','C','D'],'A'),
  new Question('what is your hoppy ?',['A','B','C','D'],'A'),
  new Question('what? ',['A','B','C','D'],'A'),
];

var quiz = new Quiz(questions);

populate();

function populate() {
  if (quiz.isEnded()) {
    score()
  }else {
    // show question
    var que =document.getElementById('question');
    que.innerHTML=quiz.getQuestionIndex().text;

    console.log(quiz);
    // show Quiz
    var choic = quiz.getQuestionIndex().choice;
    for (var i = 0; i < choic.length; i++) {
      var element = document.getElementById('choice'+i);
      element.innerText = choic[i];
      guess('btn'+i,choic[i])

      }
      progress();
  }
}

function guess(id , choice) {
  var element = document.getElementById(id);
  element.onclick = function () {
    quiz.guess(choice);
    populate();

  }
}

function progress() {
  var prog = quiz.questionsIndex +1 ;
  var element = document.getElementById('progress')
  element.innerHTML= "Question "+prog+" of "+questions.length;
}

function score(){
  var score = "<h1> Score </h1>"
  score += "<h2 id='score'> your score is "+ quiz.score+"</h2>"
  var element = document.getElementById('quiz');
  element.innerHTML=score;

}
