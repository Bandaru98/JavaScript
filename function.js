// A Function Definition or function statement starts with the function keyword and continues with the following.

// Function’s name.
// A list of function arguments contained in parenthesis and separated by commas.
// Statements are enclosed in curly brackets.

//JavaScript Function is a block of code that is designed to perform a task and executed when
//  it is been called or invoked.


// Function Declaration: It declares a function with a function keyword. The function declaration must have a function name.
function functionname() { }

// Function expressions: It is similar to a function declaration without the function name. it can be stored in a variable assignment. 
function functionname(a, b) {
    console.log(a + b);
}


// normal(name) function
fun1()
function fun1() {
    console.log('x');
}
fun1()


//anonymous function- have no hoisting behaviour
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


//arrow function- compact syntax compared to normal function.its comparatively easy implementation.
//  It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

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
// (function() { } )() 
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
// console.log(p.next());//{ value: 'player 1', done: false }
// console.log(p.next());//{ value: 'player 2', done: false }
// console.log(p.next());//{ value: 'player 3', done: false }
// console.log(p.next());//{ value: undefined, done: true }
console.log(p.next().value);//player1


//arrow using foreach--iterate array loop
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.forEach((item) => {
    if (item % 2 == 0) {
        console.log(item);
    }
})//2 4 6 8 10


//recursive function -function call it itself
let count = 3
function f5() {
    if (count > 0) {
        console.log('this is recursive function');
        count--;//without this infinite times executes the function
        f5();
    }
}
f5()
// this is recursive function
// this is recursive function
// this is recursive function


//function constructor--using instant new keyword here---
//  A function declaration is a regular function unless we create an instance of the function. 
// The main advantage of the function constructor is to initialize the member values of the javascript functions.
function People(name, city, no) {
    this.name = name
    this.city = city
    this.no = no
}
let peoplecon = new People('keer', 'kadapa', 1234567)
console.log(peoplecon.name);//keer
console.log(peoplecon.no);//1234567
console.log(peoplecon.city);//kadapa

//function binding()
// The bind() method creates a new function where this keyword refers to the parameter in the parenthesis.
//  This way the bind() method enables calling a function with a specified this value. 

let bindingfun = {
    name: 'xyz',
    city: 'kadapa',
    bindf: function () {
        console.log(this.name);
    }
}
let bindf1 = bindingfun.bindf.bind(bindingfun)
bindf1()//xyz

//ex 
let obj = {
    name: 'abc',
    article: 'html'
}
let obj1 = {
    name: 'xyz',
    article: 'css'
}
let obj2 = {
    name: 'klm',
    article: 'js'
}
function bindfun() {
    console.log(this.name + ' ' + this.article);
}
let bindf2 = bindfun.bind(obj)
bindf2()//abc html

let bindf3 = bindfun.bind(obj1)
bindf3()//xyz css

let bindf4 = bindfun.bind(obj2)
bindf4()//klm js

//function currying---
// Function currying is a concept in functional programming where a function with multiple arguments is transformed 
// into a sequence of functions, each taking a single argument. The result of each function is a new function that expects
//  the next argument in the sequence until all arguments have been provided, and finally, the original function is invoked 
//  with all the arguments.
//benefits: partial application, flexibility, readeability, memoization

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const adding = currying(10)
console.log(adding(6)(50));//66

//unary function---The word unary means single or mono which means it can be operated with only one parameter.

function unary(ope) {
    console.log(ope * 10);

}
unary(100)//1000
unary(5)//50

//pure function
// a pure function is a function that always produces the same output for the same input and has no side effects. 
// In other words, pure functions do not modify state outside their scope, such as modifying global variables, 
// changing the state of objects passed as arguments, or performing I/O operations. 
// Pure functions are deterministic--input & output are same no side effects

function calculateGST(productPrice) {
    return productPrice * 0.10;
}
console.log(calculateGST(30))//3

//ex
let taxvalue = 20;
function calculategst(productPrice) {
    return productPrice * (taxvalue / 100) + productPrice;
}
console.log(calculategst(15))//18

//first class function
// functions can be assigned to any other variable or passed as an argument or can be returned by another function.

const maths = {
    add: (a, b) => {
        // return a+b//8
        return `${a} + ${b} = ${a + b}`//2 + 6 = 8
    },
    substract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    divide: (a, b) => {
        if (b != 0) return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }
}
console.log(maths.add(2, 6));//2 + 6 = 8
console.log(maths.substract(2, 6));//2 - 6 = -4
console.log(maths.multiply(2, 6));//2 * 6 = 12
console.log(maths.divide(2, 6));//2 / 6 = 0.3333333333333333


//higher order functions----
// A callback function is a function passed as an argument to another function.
//  a higher-order function is the function that accepts, returns, or operates on other functions, including callbacks.

//parameters of higher order functions------
// higherOrderFunction: Takes a callback function, executes it, and performs operations.
// callback: A function passed as an argument, executed inside higherOrderFunction.
// callbackFunction(): Logs “Callback function is executed.”
// Invocation: Calls higherOrderFunction(callbackFunction), executing callbackFunction within higherOrderFunction.

// Higher-Order Functions are functions that can accept other functions as arguments, return functions, or both.
//  They enable abstraction and flexibility in code, allowing you to create reusable and modular functions for complex 
//  operations, making them essential in functional programming.

//function as an argument
function fun(name) {
    return `Hi ${name} `;
}
function funname(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}
funname(fun, 'Welcome', 'Js');

//function as return value
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));

//inline function--
// anonymous function and inline function is practically the same.Unlike normal functions,they are created at runtime.
let inlinefun = function (x, y) {
    console.log(x + y);
}
inlinefun(10, 20)//30

//ex
let inlinefunction = (a, b) => {
    console.log(a + b);
}
inlinefunction(30, 40)//70


// The setTimeout function--- delay before executing a specified function or code block.
// It is commonly employed for asynchronous programming and executing tasks after a certain period

//setTimeout function is often used in scenarios like handling animations, managing asynchronous operations, or simulating delays.
//   Additionally, it can be utilized in combination with closures for passing parameters to the callback function.
// Syntax: setTimeout(callback, delay);
// Parameters:
// callback: This is the function to be executed after the specified delay.
// delay: The time, in milliseconds, to wait before executing the callback function.

console.log('start');
setTimeout(()=>{
    console.log('Delay this message like asynchronous programming and executing tasks after a certain period');
},2000)
console.log('end');

