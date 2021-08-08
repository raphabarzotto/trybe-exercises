let arr = [];

for (let i = 0; i < 25; i += 1) {
  arr.push(i + 1);
}

let arrDivididoPor2 = [];

for (let i = 0, len = arr.length; i < len; i += 1) {
  arrDivididoPor2.push(arr[i] / 2);
  console.log(arrDivididoPor2[i]);
}
