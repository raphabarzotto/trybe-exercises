let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0, len = numbers.length; i < len; i += 1) {
  soma += numbers[i];
}

console.log(`Soma = ${soma}`);
