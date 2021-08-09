function verificaFimPalavra(word, ending) {
  let resultado;
  for (let i = word.length - ending.length; i < word.length; i += 1){
    if (word[i] === ending[i - word.length + ending.length]){
      resultado = true;
    } else {
      resultado = false;
      break;
    }
  }
  return resultado;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));
