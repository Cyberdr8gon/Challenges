
function pairElement(str) {
  
  return str.split("").map(function(el) {
    switch(el) {
      case "G":
        return [el, "C"];
      case "T":
        return [el, "A"];
      case "A":
        return [el, "T"];
      case "C":
        return [el, "G"];
    }
  });
}

pairElement("GCG");

