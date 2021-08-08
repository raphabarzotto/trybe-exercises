let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = Infinity;

for (let i = 0, len = numbers.length; i < len; i += 1) {
  if (numbers[i] < menor) menor = numbers[i];
}

console.log(`Menor Número = ${menor}`);
