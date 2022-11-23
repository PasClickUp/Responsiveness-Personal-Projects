let start = document.querySelector('.begin')
let nextButton = document.querySelector('.after')
let quizContainer = document.querySelector('.question-div')
let questionSpace = document.querySelector('.question')
let optionButtons = document.querySelector('.option-buttons')
let sortQuestions, currentQuestionIndex

start.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log('May ALLAH assist us all')
    start.classList.add('hide')
    sortQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    displayQuestion(sortQuestions[currentQuestionIndex])
} not

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
function resetState() {
    nextButton.classList.add('after')
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild)
    }
}

function selectOption(e) {
    let selectedOption = e.target
    let correct = selectedOption.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(optionButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (sortQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('after')
    } else {
        start.innerText = 'Restart Game'
        start.classList.remove('hide')
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
let questions = [
    {
        question: 'Who is the last prophet?',
        options: [
            { text: 'Prophet Issa', correct: false },
            { text: 'Prophet Muhammad', correct: true }
        ]
    }
]