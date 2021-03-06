const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
  let needleFound = -1;
  for (let index in array) {
    if (array[index] === word) {
      needleFound = Number(index);
    }
  }
  return needleFound;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);