 
function sumFibs(num) {
  let finalSum = 1;
  let fib = 1;
  let prev1 = 1;
  let prev2 = 0;
  
  while(fib <= num) {
    finalSum += (fib % 2 == 1) ? fib : 0;
    if(fib == 0) {
      fib = 1;
    }
    prev2 = prev1;
    prev1 = fib;
    fib = prev1 + prev2;
  }
  
  console.log(finalSum);
  
  return finalSum;
}

sumFibs(4);

