function romanoParaDecimal(numeroRomano) {
  numeroRomano = numeroRomano.toLowerCase();
  let soma = 0;
  let atual = 0;
  let prox = 0;
  let atualValor = 0;
  let proxValor = 0;
  const numerosRomanos = {
    'i': 1,
    'v': 5,
    'x': 10,
    'l': 50,
    'c': 100,
    'd': 500,
    'm': 1000
  }

  for (let i = 0; i < numeroRomano.length; i += 1) {
    atual = numeroRomano[i];
    prox = numeroRomano[i+1];
    atualValor = numerosRomanos[numeroRomano[i]];

    if (prox) {
      proxValor = numerosRomanos[numeroRomano[i+1]];
    } else {
      proxValor = 0;
    }

    if (proxValor <= atualValor) {
      soma += atualValor;
    } else {
      soma -= atualValor;
    }


  }
  return soma;
}

console.log(romanoParaDecimal('MCMLXXXVI')) // 1986
console.log(romanoParaDecimal('DCCCLXXXV')) // 885
console.log(romanoParaDecimal('MMMDCXVIII')) // 3618
console.log(romanoParaDecimal('IV')) // 4
