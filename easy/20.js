// ______________________20. Valid Parentheses______________________

var isValid = function (s) {
  let brackets = [];
  let obj = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      brackets.push(s[i]);
    } else if (obj[s[i]]) {
      if (brackets.pop() != obj[s[i]]) {
        return false;
      }
    }
  }
  return brackets.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('()'));
console.log(isValid('[()]{}{[()()]()}'));
