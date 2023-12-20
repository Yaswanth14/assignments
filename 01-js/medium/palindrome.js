/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split(" ").join("");
  str = str.replace(/[^a-z ]/g, '');

  if(str.length<2) return true;
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) return false;
    leftIndex++;rightIndex--;
  }
  return true;
}

module.exports = isPalindrome;
