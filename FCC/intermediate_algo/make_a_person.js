
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
  
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
    
    this.setLastName = function(el) {
      lastName = el;
    };
    
    this.setFirstName = function(el) {
      firstName = el;
    };
  
    this.setFullName = function(el) {
      firstName = el.split(" ")[0];
      lastName = el.split(" ")[1];
    };
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

