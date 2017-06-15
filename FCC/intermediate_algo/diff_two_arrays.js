

function diffArray(arr1, arr2) {
  
  let totalSet = [];
  // Same, same; but different.
  
  arr1.forEach(function(el) {
    if(totalSet.indexOf(el) == -1) {
      totalSet.push(el);
    }
  });
  
  arr2.forEach(function(el) {
    if(totalSet.indexOf(el) == -1) {
      totalSet.push(el);
    }
  });
  
  var newArr = totalSet.map(function(el){
    if(arr1.indexOf(el) == -1 || arr2.indexOf(el) == -1) {
      return el;
    }
  });
  
  return newArr.filter(function(el){
    return el !== undefined;
  });
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

