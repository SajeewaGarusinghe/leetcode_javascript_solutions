// 9. Palindrome Number


var isPalindrome1 = function (x) {
    let str = x.toString();
    let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
      if (str[str.length - i - 1] !== str[i]) {
        return false;
      }
      newStr += str[i];
    }
    console.log(newStr);
    return true;
  };
  
  // console.log(isPalindrome1(1211213));
  
  //best solution is following
  
  var isPalindrome2 = (x) => {
    let copy = x;
    let rev = 0;
    while (copy > 0) {
      const end = copy % 10;
      rev = rev * 10 + end;
      copy = Math.floor(copy / 10);
    }
    console.log(x, rev);
    return rev == x;
  };
  
  // console.log(isPalindrome2(555666555));
  var isPalindrome = (x) => {
    // Special cases:
    // As discussed above, when x < 0, x is not a palindrome.
    // Also if the last digit of the number is 0, in order to be a palindrome,
    // the first digit of the number also needs to be 0.
    // Only 0 satisfy this property.
    if (x < 0 || (x % 10 == 0 && x != 0)) {
      return false;
    }
  
    let revertedNumber = 0;
    while (x > revertedNumber) {
      console.log(revertedNumber, x);
      revertedNumber = revertedNumber * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    console.log(revertedNumber, x);
  
    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
    // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    return x == revertedNumber || x == Math.floor(revertedNumber / 10);
  };
  
  console.log(isPalindrome(555666555));
  