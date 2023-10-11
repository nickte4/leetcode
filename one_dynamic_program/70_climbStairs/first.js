/*
    neetcode explanation: https://www.youtube.com/watch?si=0VmPCb_9GjzOYhro&embeds_referring_euri=https%3A%2F%2Fneetcode.io%2F&source_ve_path=MTM5MTE3LDI4NjYzLDI4NjYzLDI4NjYzLDI4NjY0LDE2NDUwNg&feature=emb_share&v=Y0lT9Fck7qI
    time: O(n)
    space: O(1)
*/
function climbStairs(n) {
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}
