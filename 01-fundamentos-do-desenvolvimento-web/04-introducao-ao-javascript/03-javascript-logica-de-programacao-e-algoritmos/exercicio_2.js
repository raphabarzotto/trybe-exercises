let n = 7;

for (let i = 1; i <= n; i += 1) {
  let linha = '';
  for (let j = 0; j < i; j += 1) {
    linha += '*';
  }
  console.log(linha);
}
