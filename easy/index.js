var findDuplicate = function (nums) {
  let sum = nums.reduce((total, val) => (total += val));
  let n = nums.length - 1;
  return sum - (n * (n + 1)) / 2;
};

nums = [1, 3, 4, 2, 2];

console.log(findDuplicate(nums));
