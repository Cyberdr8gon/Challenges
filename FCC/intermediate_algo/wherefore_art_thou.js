
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // didn't understand documentation for awhile T-T
  let keys = Object.keys(source);
  
  return collection.filter(function(el) {
    return keys.every(function(el2) {
      return el.hasOwnProperty(el2) 
               && (el[el2] == source[el2]);
    });
  });
  
  
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

