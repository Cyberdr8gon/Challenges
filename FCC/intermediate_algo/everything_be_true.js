
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(el) {
    return (Object.keys(el)).indexOf(pre) != -1 && el[pre];
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

