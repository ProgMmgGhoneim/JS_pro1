function Question(text ,choice , answer) {
  this.text =text;
  this.choice = choice;
  this.answer =answer;
};
Question.prototype.correcrAnswer = function(choice) {
  return choice == this.answer;

};
