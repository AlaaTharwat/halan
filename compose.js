const increment = (x) => x + 1;
const square = (x) => x * x;

compose = (f1, f2) => (value) => f2(f1(value));

console.log(compose(increment, square)(6));

console.log(compose(square, increment)(6));
