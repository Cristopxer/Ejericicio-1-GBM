const palindrome = (str) => {
  if (str.length < 1) return "Function must have more than 0 characteres";
  strRev = str.split("").reverse().join("");
  return str === strRev
    ? `${str} is a palindrome`
    : `${str} is not a palindrome`;
};
console.log(palindrome("ANA"));
