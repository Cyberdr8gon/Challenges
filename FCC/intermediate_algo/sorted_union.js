

function uniteUnique(arr) {
  let finalArr = arguments[0];
  
  for(let i = 1; i < arguments.length; i++) {
    finalArr = finalArr.concat(arguments[i].filter(function(el) {
      
      return (finalArr.indexOf(el) == -1);
    }));
  }

  
  return finalArr;
   
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

