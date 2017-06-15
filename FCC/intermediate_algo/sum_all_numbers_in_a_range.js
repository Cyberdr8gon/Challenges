function min(x,y) {
  return (x >= y) ? y : x;
}

function max(x,y) {
  return (x < y) ? y : x;  
}


function sumAll(arr) {
  let low = min(arr[0],arr[1]);
  let high = max(arr[0],arr[1]);
  
  let accum = 0;
  for(let counter = low; counter <= high; counter++) {
    accum += counter;
  }
  return accum;
}

sumAll([1, 4]);
