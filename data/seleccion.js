import {Pregunta} from '../models/pregunta.js';
import {data} from './preguntas.js';


//Creamos un nuevo arreglo aleatorio del pool de preguntas para que no salgan las mismas cada partida
// let shuffled = data
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value);

 
export const preguntas= data.map(pregunta => new Pregunta(pregunta.question, pregunta.choices,pregunta.answer));
