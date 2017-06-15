let chars = "abcdefghijklmnopqrstuvwxyz";


function fearNotLetter(str) {
  let firstCharCode = str.charCodeAt(0);
  
  for(let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) !== (i + firstCharCode)) {
      return String.fromCharCode(i + firstCharCode);
    }
  }
  
  return undefined;
  
}

fearNotLetter("abce");

