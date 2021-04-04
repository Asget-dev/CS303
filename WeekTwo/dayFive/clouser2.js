let x = 1;
function foo(y) {
  return function (z) {
    return 1 + 2 + 5;
  };
}
let f = foo(2); // f is clourse
console.dir(f);
f(5);
// console.log(foo(5));
