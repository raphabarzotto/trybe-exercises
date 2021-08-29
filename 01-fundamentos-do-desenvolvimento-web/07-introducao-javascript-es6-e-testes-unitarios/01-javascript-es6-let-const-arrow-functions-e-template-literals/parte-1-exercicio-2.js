const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortOddsAndEvensBonus = () => {
  oddsAndEvens.sort((a, b) => a - b);

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
const sortedArrayBonus = sortOddsAndEvensBonus();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);