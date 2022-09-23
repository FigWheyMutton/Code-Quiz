const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const remover = document.getElementById('countdown')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  Alertpt2()
}

function Alertpt2() {
  var timeLeft = 75;
  var downloadTimer = setInterval(function () {
    console.log(timeLeft)
    remover.classList.remove(hide)
    document.getElementById('countdown').innerText = timeLeft + ' second left'
    timeLeft = timeLeft - 1
  }, 1000);
  if (timeleft = 0){
    alert("Time's Up!")
  }
  }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Can a let variable be redeclard?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Which file does mac users have to add that windows users do not have to use? ',
    answers: [
      { text: 'gitignore', correct: true },
      { text: 'javascript.js', correct: false },
      { text: 'style.css', correct: false },
      { text: 'boolean', correct: false }
    ]
  },
  {
    question: 'What do you have to do to be able to see changes on browser from index?',
    answers: [
      { text: 'open another tab', correct: false },
      { text: 'Save!!', correct: true },
      { text: 'open git bash', correct: false },
      { text: 'use visual studios to close files', correct: false }
    ]
  },
  {
    question: 'style.css has to be the last stylesheet to be loaded when there are other stylesheets to be accessed?',
    answers: [
      { text: 'No', correct: false },
      { text: 'Yes', correct: true }
    ]
  }
]