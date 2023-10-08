function numIslands(grid) {
  let islands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        islands++;
        explore(row, col, grid);
      }
    }
  }
  return islands;
}

// main function is to EXPLORE the rest of the island and
// turn their cells into water.
// takes a cell in a grid with a "1", turns it into a "0"
// and explores any of the left, right, up, and down 1's
function explore(row, col, grid) {
  // exit out of this function if we are out of bounds or
  // cell is in water ('0')
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  // otherwise, explore it!
  // first, set current spot to '0'
  grid[row][col] = "0";

  // explore in all four directions
  // right
  explore(row, col + 1, grid);
  // left
  explore(row, col - 1, grid);
  // down
  explore(row + 1, col, grid);
  // up
  explore(row - 1, col, grid);
}
