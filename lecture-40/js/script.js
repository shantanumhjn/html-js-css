// All variables are dynically typed
// 2 mains scopes:
// 1) global
// 2) function (lexical)
//
// All js code runs inside some execution context
// Each function invocation gets its own execution context
// each execution context has:
// 1) reference to its variables
// 2) this
// 3) reference to outer context
// scope chain used to retrieve variables from outer scopes.

var message = "in global";
console.log("global: message = " + message);

// function can be defined in the 2 ways below:
var a = function () {
  var message = "inside a";
  // message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message);
  }

  b();
}

// function b () {
//   console.log("b: message = " + message);
// }

a();
