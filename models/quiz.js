// @ts-check
import {Pregunta} from './pregunta.js';
export class Quiz{

    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Pregunta[]} preguntas 
     */
    constructor(preguntas){
        this.preguntas = preguntas
    }
    
    getQuestionIndex(){
        return this.preguntas[this.questionIndex];
    }

    /**
     * 
     * @param {string} answer Se comprueba si la opción seleccionada es la correcta
     */
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score+=100;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.preguntas.length===this.questionIndex;
    }
  
}