function countBits(n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    let binary = i;
    let bits = 0;
    while (binary) {
      // check if last bit is a 1 or 0
      if (Math.floor(binary % 2) == 1) bits++;
      // shifts 1 bit to right
      binary = Math.floor(binary / 2);
    }
    ans.push(bits);
  }
  return ans;
}

console.log(countBits(5));
