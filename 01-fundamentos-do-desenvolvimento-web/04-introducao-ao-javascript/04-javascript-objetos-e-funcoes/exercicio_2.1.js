function verificaPalindromo(stringPalindromo) {
  let retorno = false;
  let meio = Math.ceil(stringPalindromo.length / 2);
  let inicio = stringPalindromo.slice(0, meio);
  let fim = stringPalindromo.slice(meio - 1, stringPalindromo.length);
  let fimreverso = '';
  for (let i = 0; i < fim.length; i += 1){
    fimreverso += fim[fim.length - 1 - i];
  }
  if (inicio === fimreverso) {
    retorno = true;
  }
  return retorno;
}

console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("desenvolvimento"));
