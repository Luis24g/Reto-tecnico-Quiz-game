//  import {data} from './data/preguntas';

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions=[
    {
        question: 'Cual de las siguientes opciones no es un editor de codigo',
        choice1: 'Vscode',
        choice2:'Sublime',
        choice3:'Word',
        choice4:'Atom',
        choice5:'Vim',
        answer: 3,
    },
    {  
       question:'Que significan las siglas www en una url?', 
       choice1:'world with webs',
       choice2:'world wide web',
       choice3:'word web wide',
       choice4:'wild wild west',
       choice5:'web wide wolf',
       answer: 2,
    },
    {
       question:'Que es el hardware?', 
       choice1:'Es la capacidad de almacenamiento',
       choice2:'El hermano del software',
       choice3:'Algo que se come',
       choice4:'Son los componentes fisicos',
       choice5:'Es la CPU',
       answer: 4,
    },
    {
       question:'Que es el software?', 
       choice1: 'Es lo que le da utilidad a los componentes fisicos',
       choice2:'El hermano del hardware',
       choice3:'Algo que se le echa a la ropa',
       choice4:'El sistema operativo',
       choice5:'Es un lenguaje de programación',
       answer: 1,
    },
    {
       question:'Cual es el color natural de los pollitos?', 
       choice1: 'Verde',
       choice2:'Amarillo',
       choice3:'Azul',
       choice4:'Rojo',
       choice5:'Todas las anteriores',
       answer: 2,
    },
    {
       question:'De que color es una esmeralda?', 
       choice1:'Rojo',
       choice2:'Amarillo',
       choice3:'Verde',
       choice4:'Purpura',
       choice5:'Todas las anteriores',
       answer: 3,
    },
    {
       question:'Cuantos planetas hay en el sistema solar', 
       choice1: '9',
       choice2:'8',
       choice3:'7',
       choice4:'1',
       choice5:'27',
       answer: 2,
    },
    {
       question:'Que tipo de pez es Nemo?', 
       choice1:'Volador',
       choice2:'Tiburoncin',
       choice3:'Leon',
       choice4:'Remora',
       choice5:'Payaso',
       answer: 5,
    },
    {
       question:'Cuantos dias tiene un año?', 
       choice1: '360',
       choice2:'1000',
       choice3:'27',
       choice4:'365',
       choice5:'1',
       answer: 4,
    },
    {
       question:'Donde vive papá Noel?', 
       choice1: 'En la selva',
       choice2:'En el desierto',
       choice3:'En el polo Norte',
       choice4:'En el catatumbo',
       choice5:'En tu casa',
       answer: 3,
    },
    {
       question:'Cuales son los colores de la bandera de Colombia?', 
       choice1:'Verde, Rojo, Amarillo',
       choice2:'Amarillo, Azul y Rojo',
       choice3:'Azul, Naranja, cafe',
       choice4:'Blanco, Rojo',
       choice5:'Negro',
       answer: 2,
    },
    {
       question:'Cual fue el primer nombre que se le dio al internet', 
       choice1:'Arpanet',
       choice2:'DSL',
       choice3:'Token Ring',
       choice4:'Wifi',
       choice5:'IBM',
       answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = questions.length

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
        // return window.location.assign('./score.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()