function menor(arr) {
  let indice = 0;
  let atual = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < atual) {
      atual = arr[i];
      indice = i;
    }
  }
  return indice;
}

console.log(menor([2, 4, 6, 7, 10, 0, -3]));
