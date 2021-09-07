const numberCheck = (randomNumber, myNumber) => randomNumber === myNumber;

const lotteryResult = (myNumber, callback) => {
  const number = Math.round((Math.random() * 5) + 1);

  return callback(number, myNumber) ? 'Parabéns, você ganhou' : 'Tente Novamente';
};

console.log(lotteryResult(4, numberCheck));
