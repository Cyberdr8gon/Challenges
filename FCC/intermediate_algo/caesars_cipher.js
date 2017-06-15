
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) { // LBH QVQ VG!
  
  
  return str.split("").map(function(el) {
    return (el.match(/[A-Z]/)) ? chars[(chars.indexOf(el) - 13 + 26) % 26] : el;
  }).join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

