//  118. Pascal's Triangle

var generate = function (numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  let result = [];
  for (raw = 1; raw <= numRows; raw++) {
    let arr = [];
    for (col = 0; col < raw; col++) {
      if (col == 0 || col == raw - 1) {
        arr.push(1);
      } else {
        arr.push(result[raw - 2][col - 1] + result[raw - 2][col]);
      }
    }
    result.push(arr);
  }
  return result;
};

console.log(generate(4));
