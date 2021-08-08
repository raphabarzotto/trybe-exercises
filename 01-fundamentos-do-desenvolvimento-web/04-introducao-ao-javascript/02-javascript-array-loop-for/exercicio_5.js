let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = -Infinity;

for (let i = 0, len = numbers.length; i < len; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(`Maior número = ${maior}`);
