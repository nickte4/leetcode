// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/

/*
    runtime: O(log m * n), space: O(1), where m is rows, n is cols
    uses binary search to find the possible row, then binary search
    again on the possible row
*/
function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // binary search to find which row to perform binary search on
  let top = 0;
  let bot = rows - 1;
  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  // if top overlapped bot (no valid row found)
  if (!(top <= bot)) {
    return false;
  }

  // binary search on possible row w/ target
  let row = Math.floor((top + bot) / 2);
  let l = 0;
  let r = cols - 1;
  while (l <= r) {
    let midIdx = Math.floor((l + r) / 2);
    if (target > matrix[row][midIdx]) {
      l = midIdx + 1;
    } else if (target < matrix[row][midIdx]) {
      r = midIdx - 1;
    } else {
      return true;
    }
  }
  return false;
}

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(searchMatrix(matrix));
