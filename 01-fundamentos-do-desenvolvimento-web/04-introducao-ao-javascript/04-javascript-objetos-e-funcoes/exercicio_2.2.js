function maior(arr) {
  let indice = 0;
  let atual = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > atual) {
      atual = arr[i];
      indice = i;
    }
  }
  return indice;
}

console.log(maior([2, 3, 6, 7, 10, 1]));
