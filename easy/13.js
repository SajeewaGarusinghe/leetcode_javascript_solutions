//_____________________13. Roman to Integer___________________

// var romanToInt = function (s) {
//   let symbolVal = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
//       sum += symbolVal[s[i] + s[i + 1]];
//       i++;
//     } else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
//       sum += symbolVal[s[i] + s[i + 1]];
//       i++;
//     } else if (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) {
//       sum += symbolVal[s[i] + s[i + 1]];
//       i++;
//     } else {
//       sum += symbolVal[s[i]];
//     }
//   }
//   return sum;
// };

// var romanToInt1 = function (s) {
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == 'I') {
//       if (s[i + 1] == 'V') {
//         sum += 4;
//         i++;
//       } else if (s[i + 1] == 'X') {
//         sum += 9;
//         i++;
//       } else {
//         sum += 1;
//       }
//     } else if (s[i] == 'X') {
//       if (s[i + 1] == 'L') {
//         sum += 40;
//         i++;
//       } else if (s[i + 1] == 'C') {
//         sum += 90;
//         i++;
//       } else {
//         sum += 10;
//       }
//     } else if (s[i] == 'C') {
//       if (s[i + 1] == 'D') {
//         sum += 400;
//         i++;
//       } else if (s[i + 1] == 'M') {
//         sum += 900;
//         i++;
//       } else {
//         sum += 100;
//       }
//     } else {
//       if (s[i] == 'V') {
//         sum += 5;
//       }

//       if (s[i] == 'L') {
//         sum += 50;
//       }

//       if (s[i] == 'D') {
//         sum += 500;
//       }
//       if (s[i] == 'M') {
//         sum += 1000;
//       }
//     }
//   }
//   console.log(sum);
//   return sum;
// };

// s = 'DM';

// romanToInt1(s);
// // s = "LVIII"
// // s = "MCMXCIV"

var romanToInt2 = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  // console.log(result);
  return result;
};

romanToInt2(s);
