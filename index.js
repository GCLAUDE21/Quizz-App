const viewQuestion = document.getElementById("question");
const guess0 = document.getElementById("choice0");
const guess1 = document.getElementById("choice1");
const guess2 = document.getElementById("choice2");
const guess3 = document.getElementById("choice3");
const btn = document.querySelectorAll("button");

class Question {
  constructor(question, proposition, réponse) {
    this.question = question;
    this.proposition = proposition;
    this.réponse = réponse;
  }
}

class Quiz {
  constructor(question) {
    this.questions = question;
    this.index = 0;
    this.score = 0;
  }

  answer = function (choice) {
    if (choice == this.questions[this.index].réponse) {
      this.score++;
    }
    this.index++;
    if (this.index == this.questions.length) {
      this.finish();
    } else {
      this.render();
    }
  };

  render = function () {
    viewQuestion.innerHTML = this.questions[this.index].question;
    guess0.innerHTML = this.questions[this.index].proposition[0];
    guess1.innerHTML = this.questions[this.index].proposition[1];
    guess2.innerHTML = this.questions[this.index].proposition[2];
    guess3.innerHTML = this.questions[this.index].proposition[3];
    progress.innerHTML =
      "Question " + (this.index + 1) + " / " + this.questions.length;
  };

  finish = function () {
    quiz.innerHTML = `
    <h1> Terminé ! </h1>
    <h2> Votre score : ${this.score} / ${this.questions.length}
    `;
  };
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau ?",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()",
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau ?",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()",
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()",
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche ?",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()",
  ),
];

const quizzJava = new Quiz(questions);
quizzJava.render();

btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    quizzJava.answer(e.currentTarget.querySelector("p").innerHTML);
  });
});
