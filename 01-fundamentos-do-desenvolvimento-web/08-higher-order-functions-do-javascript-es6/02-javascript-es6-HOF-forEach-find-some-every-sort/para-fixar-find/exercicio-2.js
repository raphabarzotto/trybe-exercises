const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const nameWithFiveLetters = names.find ((name) => name.length === 5);
  return nameWithFiveLetters;
};

console.log(findNameWithFiveLetters());
