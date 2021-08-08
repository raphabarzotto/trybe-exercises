let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersModificado = [];
for (let i = 0; i < numbers.length; i++) {
  if (i < numbers.length - 1) {
    numbersModificado[i] = (numbers[i] * numbers[i + 1]);
  } else {
    numbersModificado[i] = (numbers[i] * 2);
  }
}

console.log(numbersModificado.join(' '));
