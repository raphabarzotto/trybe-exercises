function maiorNome(arr) {
  let retorno = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > retorno.length) {
      retorno = arr[i];
    }
  }
  return retorno;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
