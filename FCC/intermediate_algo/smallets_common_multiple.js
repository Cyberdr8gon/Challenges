function gcd(x, y) {
  
  while(true) {
    if(x === 0) {
      return y;
    }
    y %= x;
    if(y === 0) {
      return x;
    }
    x %= y;
  }
  
}

function lcm(x, y) {
  let greatest = gcd(x,y);
  return (greatest ? (x / greatest * y) : (0));
}

function smallestCommons(arr) {
  let max = (arr[0] > arr[1]) ? (arr[0]) : (arr[1]);
  let min = (max == arr[0]) ? arr[1] : arr[0];
  
  let rangeOfNumbers = [];
  
  for(let i = min; i <= max; i++) {
    rangeOfNumbers.push(i);
  }
  
  
   
  return rangeOfNumbers.reduce(lcm);
}


smallestCommons([1,5]);

