 

//__________________26. Remove Duplicates from Sorted Array_____________

// var removeDuplicates = function (nums) {
//   prev = nums[0];

//   let i = 1;

//   while (nums.length > i) {
//     console.log(`i=${i}     nums=  ${nums}  prev= ${prev} nums[i]= ${nums[i]}`);
//     if (nums[i] === prev) {
//       nums.splice(i, i);
//     } else {
//       prev = nums[i];
//       i++;
//     }
//   }
//   return nums;
// };

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// // let nums = [0,0, 1, 1, 1, 2];

// console.log(removeDuplicates(nums));

var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
  };