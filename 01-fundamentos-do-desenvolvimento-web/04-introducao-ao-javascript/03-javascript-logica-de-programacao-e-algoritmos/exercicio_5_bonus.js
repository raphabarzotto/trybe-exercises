let n = 12;

for (let i = 1; i <= n; i += 2) {
  let linha = '';
  for (let j = 0; j < (n - i) / 2; j += 1) {
    linha += ' ';
  }
  for (let k = 0; k < i; k += 1) {
    if (k == 0 || k == i - 1 || i == n || i == n - 1) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
}
