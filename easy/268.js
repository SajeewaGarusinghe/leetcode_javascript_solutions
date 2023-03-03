// 268. Missing Number

// var missingNumber = function (nums) {
//   let n = nums.length;
//   let addition = 0;
//   for (let i = 0; i < nums.length; i++) {
//     addition += nums[i];
//   }
//   let missingNum = (n * (n + 1)) / 2 - addition;
//   return missingNum;
// };

var missingNumber = function (nums) {
    let n = nums.length;
    let sum = nums.reduce((add, val) => add + val, 0);
    return (n * (n + 1)) / 2 - sum;
  };
  
  nums = [3, 0, 1];
  console.log(missingNumber(nums));
  