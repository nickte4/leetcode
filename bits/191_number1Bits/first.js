function hammingWeight(n) {
  let bits = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    const hasBit = (n & mask) !== 0;
    if (hasBit) bits++;
    mask <<= 1;
  }
  return bits;
}

// n    = 1011
// mask = 0001 (first iter.)
// mask = 0010
// mask = 0100
// mask = 1000 (last iter.)

// n & mask at each iter. to check if that bit is a 1 or 0

let binaryTest1 = 0b00000000000000000000000000001011;
let binaryTest2 = 0b11111111111111111111111111111101;
console.log(hammingWeight(binaryTest2));
