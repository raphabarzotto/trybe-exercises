// Fonte: https://en.wikipedia.org/wiki/Chess_piece

const peca = 'Torre';

switch (peca.toLowerCase()) {
  case 'torre':
    console.log(`torre --> qualquer número de quadrados vazios para a frente, para trás, para a esquerda ou para a direita em uma linha reta.`);
    break;
  case 'bispo':
    console.log(`bispo --> qualquer número de quadrados vazios linha reta na diagonal.`);
    break;
  case 'rainha':
    console.log(`rainha --> qualquer número de quadrados vazios em qualquer direção: para frente, para trás, esquerda, direita ou diagonalmente, em linha reta.`);
    break;
  case 'rei':
    console.log(`rei --> exatamente um quadrado vazio em qualquer direção: para frente, para trás, para a esquerda, para a direita ou diagonalmente.`);
    break;
  case 'cavalo':
    console.log(`cavalo --> diagonal estendida de um canto de qualquer retângulo 2 × 3 de quadrados até o canto oposto mais distante.`)
    break;
  case 'peao':
    console.log(`peao --> avança exatamente um quadrado, ou opcionalmente, dois quadrados quando em seu quadrado inicial, em direção ao lado do adversário do tabuleiro.`);
    break;
  default:
    console.log(`Peça inválida`);
}