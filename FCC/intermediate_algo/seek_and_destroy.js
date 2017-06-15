
function destroyer(arr) {
  // Remove all the values
  let toRemove = [];
  for(let i = 1; i < arguments.length; i++) {
    toRemove.push(arguments[i]);
  }
  
  arr = arguments[0].map(function(el) {
    if(toRemove.indexOf(el) == -1) {
      return el;
    }
  });
    
  arr = arr.filter(function(el){
    return el !== undefined;
  });
  
  
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
