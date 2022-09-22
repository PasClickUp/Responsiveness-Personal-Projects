let start = document.querySelector('.begin')
let quizContainer = document.querySelector('.question-div')
let questionSpace = document.querySelector('.question')
let optionButtons = document.querySelector('.option-buttons')
let sortQuestions, currentQuestionIndex

start.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('May ALLAH assist us all')
    start.classList.add('hide')
    sortQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    displayQuestion(sortQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
    questionSpace.innerText = question.question
    question.options.forEach(option => {
        let button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('option')
        if (option.correct) {
            button.dataset.correct = option.correct
        }
        button.addEventListener('click', selectOption)
        optionButtons.appendChild(button)
    })
}
function selectOption() {

}

let questions = [
    {
        question: 'Who is the last prophet?',
        options: [
            { text: 'Prophet Issa', correct: false },
            { text: 'Prophet Muhammad', correct: true }
        ]
    }
]