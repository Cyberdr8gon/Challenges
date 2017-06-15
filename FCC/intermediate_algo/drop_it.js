
function dropElements(arr, func) {
  // Drop them elements.
  
  let copyArr = arr;
  
  while(copyArr.length && !func(copyArr[0])) {
    copyArr.shift();
  }
  
  console.log(copyArr);
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
