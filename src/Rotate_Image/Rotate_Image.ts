/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const length: number = matrix.length;

  for (let i: number = 0; i < length; i++) {
    for (let j: number = i + 1; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);