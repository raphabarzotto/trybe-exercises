const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const has = arr.some((currentName) => currentName === name);
  return has;
};

console.log(hasName(names, 'Ana'))
