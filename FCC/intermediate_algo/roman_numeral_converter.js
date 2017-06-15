
function convertToRoman(num) {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  let arr = [];
  let numCopy = num;
  let index = 0;
  
  while(numCopy > 0) {
    while(numbers[index] > numCopy) {
      index++;
    }
    
    arr.push(numerals[index]);
    numCopy -= numbers[index];
    
  }
  
  return arr.join("");
}

convertToRoman(36);

