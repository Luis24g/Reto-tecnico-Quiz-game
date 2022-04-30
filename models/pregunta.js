

export class Pregunta{
    /**
     * 
     * @param {string}   text Este es el enunciado de la pregunta
     * @param {string[]} choices Estas son las opciones de la pregunta
     * @param {string} answer Esta es la respuesta de la pregunta
     */
    constructor(text,choices,answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }
    /**
     * 
     * @param {string} choice La respuesta del jugador
     * @returns {boolean} Retorna true si la respuesta es correcta
     */
    correctAnswer(choice){
        return choice === this.answer;
    }
}

