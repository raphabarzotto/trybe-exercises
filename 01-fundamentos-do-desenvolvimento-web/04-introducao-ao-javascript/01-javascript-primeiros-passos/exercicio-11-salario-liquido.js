const salarioBruto = 5000;

// INSS
let aliquotaINSS = null;
if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else { 
  aliquotaINSS = 570.88;
}
const salarioBase = salarioBruto - aliquotaINSS;

// IR
let aliquotaIR = null;
let deducaoImposto = null;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
  deducaoImposto = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = salarioBase * 0.075;
  deducaoImposto = 142.80;
} else if (salarioBase <= 3750.05) {
  aliquotaIR = salarioBase * 0.15;
  deducaoImposto = 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = salarioBase * 0.225;
  deducaoImposto = 636.13;
} else {
  aliquotaIR = salarioBase * 0.275;
  deducaoImposto = 869.36;
}
const salarioLiquido = salarioBase - (aliquotaIR - deducaoImposto);

console.log(`Salário Líquido = R$ ${salarioLiquido}`);