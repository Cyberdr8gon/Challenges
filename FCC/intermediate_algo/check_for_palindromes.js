
function palindrome(str) {
  // Good luck!
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reverseStr = cleanStr.split("").reverse().join("");
  
  
  
  return cleanStr == reverseStr;
}



palindrome("eye");

