
function addTogether() {
  let args = [...arguments];
  if(!args.every(function(el){
    return typeof el === typeof 2;
  })) {
    return undefined;
  }
  
  return args.length == 2 ? args[0] + args[1] : function(x) {
    return addTogether(x, args[0]);
  };
  
}

addTogether(2,3);

