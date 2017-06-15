
function sumPrimes(num) {
  
  let limitNum = num + 1;
  let primeArray = [];
  let finalVal = 0;
  
  for(let i = 2; i < limitNum; i++) {
    primeArray[i] = true;
  }
  
  let limit = Math.sqrt(limitNum);
  for(let i = 2; i < limit; i++) {
    if(primeArray[i] === true) {
      for(let j = i * i; j < limitNum; j +=i) {
        primeArray[j] = false;
      }
    }
  }
  
  for(let i = 2; i < limitNum; i++) {
    if(primeArray[i] === true) {
      finalVal += i;
    }
  }
  
  console.log(finalVal);
  return finalVal;
}

sumPrimes(10);
