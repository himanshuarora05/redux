var redux = require('redux');

console.log('Starting redux example');

//pure function
function add(a , b) {
  return a + b;
}

// not a pure function, a could change
var a = 3;
function add(b) {
  return a + b;
}

var result;
function add (a, b) {
  result = a + b;
  return result;
}

function add(a, b) {
  return a + b + new Date().getSeconds();
}


function changeProp(obj){
  return {
    ...obj,
    name: 'Him'
  }
};

var res = changeProp({
  name: 'himanshu',
  age: 25
});

console.log(res);
