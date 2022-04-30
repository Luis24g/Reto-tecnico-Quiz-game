import {preguntas} from './data/seleccion.js';
import {Quiz} from './models/quiz.js';
import {Render} from './models/render.js'

function main() {
    const quiz= new Quiz(preguntas);
    const ui = new Render();

    ui.showQuestion(quiz.getQuestionIndex().text);
    console.log(quiz.getQuestionIndex().text);
}

main();


