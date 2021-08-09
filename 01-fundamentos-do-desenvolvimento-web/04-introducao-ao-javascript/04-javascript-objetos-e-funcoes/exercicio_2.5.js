function maisRepetido(arr) {
  let contMaior = 0;
  let contAtual = 0;
  let indexMaior = 0;

  for (let index in arr) {

    let numeroAtual = arr[index];

    for (let index2 in arr) {
      if (numeroAtual === arr[index2]) {
        contAtual += 1;
      }
    }

    if (contAtual > contMaior) {
      contMaior = contAtual;
      indexMaior = index;
    }
    contAtual = 0;
  }

  return arr[indexMaior];
}


console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
