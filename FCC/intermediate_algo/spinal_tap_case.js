
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  let newStr = str.replace(/[A-Z]|\s[A-Za-z]/g, "-$&").replace(/[\s_]/g, "").toLowerCase();
  
  
  return newStr[0] == "-" ? newStr.substr(1) : newStr;
}

spinalCase('This Is Spinal Tap');

