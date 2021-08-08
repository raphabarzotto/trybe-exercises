const custoProduto = 1000;
const precoVenda = 1200;

const imposto = 0.2;
const produtosVendidos = 1;

if (custoProduto < 0 || precoVenda < 0) {
  console.log('Valores Inválidos');
} else {
  const impostoSobreCusto = custoProduto * imposto;
  const lucroPorVenda = precoVenda - custoProduto - impostoSobreCusto;
  const lucroTotal = produtosVendidos * lucroPorVenda;
  console.log(`${produtosVendidos} produtos vendidos com lucro de: ${ lucroTotal } reais`);
}