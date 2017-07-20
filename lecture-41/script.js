// should be defined
// "undefined" has been declared but not init.
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x is undefined");
} else {
  console.log("x has been defined");
}

x = null;
console.log(x);
