// getting the elements
const startButton = document.querySelector(".start-btn");
const submitButton = document.querySelector(".submit-btn");
const nextButton = document.querySelector(".next-btn");
const finishButton = document.querySelector(".finish-btn");
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const welcome = document.querySelector(".welcome");
const answer = document.querySelector(".answer");
const answerContainer = document.querySelector(".answer-container");

const endQuiz = document.createElement("div");
const final = document.createElement("div");
const restartBtn = document.createElement("button");

// function to start the quizz
startButton.addEventListener("click", startQuizz);

function startQuizz() {
  question.classList.remove("hide");
  welcome.classList.add("hide");
  answer.classList.remove("hide");
  startButton.classList.add("hide");
  submitButton.classList.remove("hide");
  showQuestion();
}

// Array of questions
const questions = [
  {
    question:
      "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
    a: "1912",
    b: "1918",
    c: "1892",
    d: "1898",
    correct: "1912",
  },
  {
    question: "When is Haiti's independence day ?",
    a: "November 18th",
    b: "October 17th",
    c: "April 7th",
    d: "January 1st",
    correct: "January 1st",
  },
  {
    question: "Which metal was discovered by Hans Christian Oersted in 1825?",
    a: "Sodiunm",
    b: "Potassiunm",
    c: "Tutaniunm",
    d: "Aluminium",
    correct: "Aluminium",
  },
  {
    question: "When is Haiti's Flag day ?",
    a: "July 4th",
    b: "May 18th",
    c: "November 18th",
    d: "May 1st",
    correct: "May 18th",
  },
  {
    question: "What is the world’s smallest bird?",
    a: "Woodpecker",
    b: "Bee Hummingbird",
    c: "Swallow",
    d: "Swan",
    correct: "Bee Hummingbird",
  },
];

// function to show question
function showQuestion() {
  const answerHtml = document.querySelector(".answer");
  const questionText = document.querySelector(".question");
  let currentQuestionIndex = 0;

  // display the questions from the questions array
  function showQuestionFromQuestions(currentQuestionIndex) {
    questionText.innerHTML = questions[currentQuestionIndex].question;
    const answerText = `  <ul>
  <li>
    <input type="radio" id="option" name="answer" value="${questions[currentQuestionIndex].a}" />
    <label for="option-1">${questions[currentQuestionIndex].a}</label>
  </li>
  <li>
    <input type="radio" id="option" name="answer" value="${questions[currentQuestionIndex].b}" />
    <label for="option-2">${questions[currentQuestionIndex].b}</label>
  </li>
  <li>
    <input type="radio" id="option" name="answer" value="${questions[currentQuestionIndex].c}" />
    <label for="option-3">${questions[currentQuestionIndex].c}</label>
  </li>
  <li>
    <input type="radio" id="option" name="answer" value="${questions[currentQuestionIndex].d}" />
    <label for="option-4">${questions[currentQuestionIndex].d}</label>
  </li>
</ul>`;

    answerHtml.innerHTML = answerText;
  }
  showQuestionFromQuestions(currentQuestionIndex);

  // check radio value and answers
  let score = 0;
  function selectAnswer() {
    nextButton.classList.remove("hide");
    let answers = document.querySelectorAll("input[type=radio]");
    answers.forEach((answer) => {
      if (answer.checked) {
        console.log(questions[currentQuestionIndex].correct);
        if (answer.value == questions[currentQuestionIndex].correct) {
          answer.parentElement.style.backgroundColor = "#4bb543";
          console.log("Good");
          score += 1;
        } else {
          answer.parentElement.style.backgroundColor = "#a82e2e";
          console.log("Wrong");
        }
      } else {
        answer.disabled = true;
      }
    });
  }

  submitButton.addEventListener("click", selectAnswer);

// select the next question from the array by incrementing the currentQuestionIndex
  nextButton.addEventListener("click", function () {
    currentQuestionIndex = currentQuestionIndex + 1;
    if (questions.length > currentQuestionIndex) {
      showQuestionFromQuestions(currentQuestionIndex);
    } else {
      // display the score and end quizz if there is no question anymore
      answerContainer.classList.add("hide");
      quizContainer.classList.add("score-container");

      quizContainer.appendChild(endQuiz);
      endQuiz.after(final);
      final.classList.add("score");
      final.innerHTML = "You score is " + score + " out of 5";
      if (score > 2) {
        endQuiz.classList.add("success");
        endQuiz.innerHTML = "Success";
      } else {
        endQuiz.classList.add("failed");
        endQuiz.innerHTML = "Failed";


      }
      submitButton.classList.add("hide");
      nextButton.classList.add("hide");
      questionText.classList.add("hide");
    }

    nextButton.classList.add("hide");
  });
}
