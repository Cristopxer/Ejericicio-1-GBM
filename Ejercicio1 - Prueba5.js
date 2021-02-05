const palindrome = (str) => {
  if (str.length < 1) return "Function must have more than 0 characteres";
  strRev = str.split("").reverse().join("").toLowerCase();
  return strRev.replace(/ /g, "") === str.replace(/ /g, "").toLowerCase()
    ? `${str} is a palindrome`
    : `${str} is not a palindrome`;
};
console.log(palindrome("Do geese see God"));
