// 344. Reverse String
// var reverseString = function (s) {
//   return s.reverse();
// };

// var reverseString = function (s) {
//   let newStr = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     newStr.push(s[i]);
//   }
//   return newStr;
// };

s = ['h', 'e', 'l', 'l', 'o'];

var reverseString = function (s) {
  i = 0;
  j = s.length - 1;

  while (i < j) {
    if (s[i] != s[j]) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
    i++;
    j--;
  }
  return s;
};
console.log(reverseString(s));
