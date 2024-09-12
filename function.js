// normal(name) function
fun1()
function fun1() {
    console.log('x');
}
// fun1()

//anonymous function- have no hoising behaviour
// fun2()//ReferenceError: Cannot access 'fun2' before initialization
let fun2 = function () {
    console.log('anonymous function');
}
fun2()

//function with parameter & argument
function add(a, b) {
    console.log(a + b);
}
add(2, 10)//2,10 are arguments & a,b are parameters

//arrow function- compact syntax compared to normal function
let multiply = (a, b) => a * b;
console.log(multiply(10, 100));

//function with return keyword
function area(w, h) {
    let result = w * h
    return result
}
let a = area(10, 15)
console.log(a);

//function(IIFE -immediately involked function expression)--executes immediately after creation of function
(function () {
    console.log('this is iife function');
})();

//passing parameters to IIFE
(function (n) {
    console.log(n);
})(20);

//generator function
function* player() {
    yield `player 1`
    yield `player 2`
    yield `player 3`
}
let p = player()
console.log(p.next());//{ value: 'player 1', done: false }
console.log(p.next());//{ value: 'player 2', done: false }
console.log(p.next());//{ value: 'player 3', done: false }
console.log(p.next());//{ value: undefined, done: true }

//
