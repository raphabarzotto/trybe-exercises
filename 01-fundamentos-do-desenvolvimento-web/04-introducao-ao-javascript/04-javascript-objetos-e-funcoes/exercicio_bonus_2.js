const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  const resultado = [];

  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];
      if ((current % 2) === 0) {
        resultado.push(current);
      } 
    }
  }

  return resultado;
}

console.log(arrayOfNumbers(vector));
