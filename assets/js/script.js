var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

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
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
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
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
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

var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<scripting>', correct: false },
            { text: '<javascript>', correct: false },
            { text: '<js>', correct: false }
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function = myFunction()', correct: false },
            { text: 'function:myFunction()', correct: false },
            { text: 'function myFunction()', correct: true },
            { text: 'function MyFunction()', correct: false }
        ]
    },
    {
        question: 'How do you write an IF statement in JavaScript?',
        answers: [
            { text: 'if i == 5 then', correct: false },
            { text: 'if i = 5 then', correct: false },
            { text: 'if (i==5)', correct: true },
            { text: 'if i = 5', correct: false }
        ]
    },
    {
        question: 'How does a WHILE loop start?',
        answers: [
            { text: 'while (i <=10; i++)', correct: false },
            { text: 'while i = 1 to 10', correct: false },
            { text: 'while (i <=10)', correct: true },
            { text: 'while i <10', correct: false }
        ]
    },
    {
        question: 'How does a FOR loop start?',
        answers: [
            { text: 'for (i <=5; i++)', correct: false },
            { text: 'for (i = 0; i <=5)', correct: false },
            { text: 'for i = 1 to 5', correct: false },
            { text: 'for (i = 0; i <=5; i++)', correct: true }
        ]
    },
    {
        question: 'How can you add a comment in JavaScript?',
        answers: [
            { text: '//This is a comment', correct: true },
            { text: '<!--This is a comment-->', correct: false },
            { text: '**This is a comment', correct: false },
            { text: '(-This is a comment-)', correct: true }
        ]
    },
    {
        question: 'How do you round the number 7.25 to the nearest integer?',
        answers: [
            { text: 'Math.rnd(7.25)', correct: false },
            { text: 'Math.round(7.25)', correct: true },
            { text: 'round(7.25)', correct: false },
            { text: 'MATH.round(7.25)', correct: false }
        ]
    },
    {
        question: 'Which event occurs when the user clicks on the HTML element?',
        answers: [
            { text: 'onclick', correct: true },
            { text: 'onmouseclick', correct: false },
            { text: 'onoverclick', correct: false },
            { text: 'onmouseover', correct: false }
        ]
    },
    {
        question: 'Is JavaScript case sensitive?',
        answers: [
            { text: 'No', correct: false },
            { text: 'Yes', correct: true },
        ]
    },
    {
        question: 'JavaScript is the same as Java.',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    }
]