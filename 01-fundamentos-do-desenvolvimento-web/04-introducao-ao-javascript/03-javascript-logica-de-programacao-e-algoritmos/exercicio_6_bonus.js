const num = 13;

let checkPrimo = true;

if (num < 2) {
  checkPrimo = false;
} else {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      checkPrimo = false;
      break;
    }
  }
}

if (checkPrimo) {
  console.log(`${num} é primo`)
} else {
  console.log(`${num} não é primo`)
}
