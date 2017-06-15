
function steamrollArray(arr) {
  
  return arr.reduce(function(acc, el) {
    return acc.concat(Array.isArray(el) ? steamrollArray(el) : el);
  }, []);
}


steamrollArray([1, [2], [3, [[4]]]]);

