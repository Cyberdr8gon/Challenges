
function myReplace(str, before, after) {
  
  let splitStr = str.split(" ");
  let foundStringIndex = str.toLowerCase().split(" ").indexOf(before.toLowerCase());
  
  splitStr[foundStringIndex] = (splitStr[foundStringIndex] == splitStr[foundStringIndex].toLowerCase()) ? after.toLowerCase() : after.toLowerCase().charAt(0).toUpperCase() + after.slice(1);
  
  
  return splitStr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

