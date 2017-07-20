// string concatination
var string = "Hello";
string += " World";
// string = string + " World";
console.log(string + "!");


// regular math operators: +, -, *, /
console.log((5 + 4) / 3);
// returns a special symbol NaN, meaning not a number
console.log(undefined / 5);
function test1 (a) {
  return (a/5);
}
var x = test1(); // no arguments
console.log(x);


// equality
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}
x = "4";
// auto type conversion
if (x == y) {
  console.log("x='4' is equal to y=4");
}

// strict equality, checks type also
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
} else {
  console.log("Strict: x='4' is NOT equal to y=4");
}
