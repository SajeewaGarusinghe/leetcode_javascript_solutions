// 412. Fizz Buzz

var fizzBuzz = function (n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 == 0) {
        if (i % 5 == 0) {
          res.push('FizzBuzz');
        } else {
          res.push('Fizz');
        }
      } else if (i % 5 == 0) {
        res.push('Buzz');
      } else {
        res.push(i.toString());
      }
    }
    return res;
  };
  
  console.log(fizzBuzz(5));// [ 1, 2, "Fizz", 4, "Buzz" ]
  
  
  var fizzBuzz1 = function(n) {
    let arr = []
  for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FizzBuzz")
  } else if (i % 3 === 0) {
    arr.push("Fizz")
  } else if (i % 5 === 0) {
   arr.push("Buzz")
  } else {
    arr.push(i.toString())
  }
  }
  return arr
  
  };