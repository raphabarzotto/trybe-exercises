let n = 7;

for (let i = 1; i <= n; i += 1) {
  let linha = '';
  for (let j = 0; j < n - i; j += 1) {
    linha += ' ';
  }
  for (let k = 0; k < i; k += 1) {
    linha += '*';
  }
  console.log(linha);
}
