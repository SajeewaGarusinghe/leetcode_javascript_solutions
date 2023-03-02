// _____________________1. Two Sum_____________________

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let num1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 == target) {
        return [i, j];
      }
    }
  }
  return null;
};

var twoSum1 = function (nums, target) {
  const obj = {};
  for (i = 0; i < nums.length; i++) {
    let neededElement = target - nums[i];
    console.log(neededElement);
    if (obj[neededElement] !== undefined) {
      return [obj[neededElement], i];
    } else {
      obj[nums[i]] = i;
    }
    console.log(obj);
  }
  return [];
};

let nums = [2, 7, 11, 15];

console.log(twoSum1(nums, 9));