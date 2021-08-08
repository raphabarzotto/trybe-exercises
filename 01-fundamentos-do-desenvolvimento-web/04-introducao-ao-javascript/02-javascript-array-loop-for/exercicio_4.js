let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0, len = numbers.length; i < len; i += 1) {
  soma += numbers[i];
}

const media = soma / numbers.length;

if (media > 20) {
  console.log(`Média aritimética = ${media}, valor maior que 20`);
} else {
  console.log(`Média aritimética = ${media}, valor menor ou igual a 20`);
}
