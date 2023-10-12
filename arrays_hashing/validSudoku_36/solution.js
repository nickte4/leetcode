// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

/*
    runtime: O(row*col), space: O(row*col)
    currBox functions off of a greater index where each 3x3 subbox has
    a [i, j] coordinate ranging from 0 to 2.
    currently don't understand currBox.
*/
function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let box = new Set();

    for (let j = 0; j < 9; j++) {
      let currRow = board[i][j];
      let currCol = board[j][i];
      let currBox =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (
        (currRow != "." && row.has(currRow)) ||
        (currCol != "." && col.has(currCol)) ||
        (currBox != "." && box.has(currBox))
      ) {
        return false;
      }
      row.add(currRow);
      col.add(currCol);
      box.add(currBox);
    }
  }
  return true;
}

let boardOne = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(boardOne));
