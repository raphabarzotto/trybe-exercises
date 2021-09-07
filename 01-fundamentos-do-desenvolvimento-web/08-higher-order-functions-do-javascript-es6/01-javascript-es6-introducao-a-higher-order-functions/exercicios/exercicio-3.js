const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const certoErrado = (gabarito, resposta) => {
  if (resposta === gabarito) {
    return 1;
  } if (resposta === 'N.A') {
    return 0;
  }
  return -0.5;
};

const answersCheck = (gabaritoArray, respostasArray, callback) => {
  let nota = 0;
  for (let index = 0; index < gabaritoArray.length; index += 1) {
    const notaExercicio = callback(gabaritoArray[index], respostasArray[index]);
    nota += notaExercicio;
  }
  return `Nota final: ${nota}.`
};

console.log(answersCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, certoErrado));
