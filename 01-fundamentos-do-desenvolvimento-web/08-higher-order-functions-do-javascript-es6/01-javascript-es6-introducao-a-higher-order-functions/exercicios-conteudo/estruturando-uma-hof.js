// Crie uma função que retorne a string 'Acordando!!' ;

const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!' ;
const breakfast = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => 'Partiu dormir!!';

// doingThings que imprima no console as outras
const doingThings = (callback) => {
  console.log(callback());
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
