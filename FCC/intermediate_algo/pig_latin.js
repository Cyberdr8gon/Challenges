
function translatePigLatin(str) {
  let splitStr = str.split("");
  let i = 0;
  
  while(i < splitStr.length && splitStr[i].match(/[^aeiou]/)) {
    i++;
  }
  
  if(i == splitStr.length) {
    return str + "ay";
  }
  
  
  let firstCluster = splitStr.slice(0, i).join("");
  let secondCluster = splitStr.slice(i).join("");
  
  
  
  
  return firstCluster.length !== 0 ? secondCluster + firstCluster + "ay" : str + "way";
}

translatePigLatin("consonant");

