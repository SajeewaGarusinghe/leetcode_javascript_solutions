//69. Sqrt(x)

// let us find the square root of 25.

//     25 – 1 = 24
//     24 – 3 = 21
//     21 – 5 = 16
//     16 – 7 = 9
//     9 – 9 = 0

// Since, the subtraction is done for 5 times, hence the square root of 25 is 5.

var mySqrt = function (x) {
    if (x == 0) return 0;
    let odd = 1;
    let count = 0;
  
    do {
      odd += 2;
      x -= odd;
      count++;
    } while (x > 0);
  
    return count;
  };
  
  console.log(mySqrt(0));
  
  var mySqrt1 = function (x) {
    return (rezult = Math.floor(Math.sqrt(x)));
  };
  