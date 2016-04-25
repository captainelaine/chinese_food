var solution = ["1A", "2A","3C","4A","5D","6A","7B","8B"];
var correctAnswers = 0;
var correctMessage = document.getElementById("correctMessage");

function collectAnswers() {
  var quiz = document.forms;

  for (i = 0; i < (quiz.length - 1); i++) {

    var question = document.getElementsByName("q" + i);

    for (j = 0; j < question.length; j++) {

      if (question[j].checked && question[j].value == solution[i]) {

        question[j].parentElement.style.fontWeight = "bold";

        correctAnswers++;
      } else if (!question[j].checked && question[j].value == solution[i]) {

        question[j].parentElement.style.fontWeight = "bold";
        question[j].parentElement.style.color = "red";
      }
    }
  }

  if (correctAnswers == 1) {
    var answerPlural = "answer.";
  } else {
    var answerPlural = "answers."
  }
  correctMessage.textContent = "You finished with " + correctAnswers + " correct " + answerPlural;
}

var submit = document.querySelector("input[type='submit']");
var quiz = document.forms;

submit.addEventListener("click", function() {
  event.preventDefault();
  collectAnswers();
}, false);
