// 136. Single Number

var singleNumber = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      if (!obj[nums[i]]) {
        obj[nums[i]] = 1;
      } else {
        delete obj[nums[i]];
      }
    }
    return Object.keys(obj)[0];
  };
  
  nums = [4, 1, 2, 1, 2];
  
  console.log(singleNumber(nums));
  
  // Concept of XOR:
  //  x^y^x = (x^x)^y = 0^y = y
  
  // const a = 5;        // 00000000000000000000000000000101
  // const b = 3;        // 00000000000000000000000000000011
  
  // console.log(a ^ b); // 00000000000000000000000000000110
  
  var singleNumber1 = function (nums) {
    let uniqueNum = 0;
    nums.forEach((element) => {
      uniqueNum ^= element;
    });
    return uniqueNum;
  };
  
  console.log(singleNumber1(nums));
  