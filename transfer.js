let transfer = (arr) => {
  if (arr.length === 0) return [];

  const numRows = arr.length;
  const numCols = arr[0].length;

  const result = [[]];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (result[j] == undefined) result[j] = [];
      result[j][i] = arr[i][j];
    }
  }

  console.log(result);
  return result;
};

transfer([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]);
