// 137. Single Number II

var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  for (const key in obj) {
    if (obj[key] == 1) return key;
  }

  return null;
};

nums = [0, 1, 0, 1, 0, 1, 99];

console.log(singleNumber(nums));

function singleNumber1(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
}

//there is another method for this using bitwise operators
//https://leetcode.com/problems/single-number-ii/solutions/43295/detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers/?orderBy=most_votes
