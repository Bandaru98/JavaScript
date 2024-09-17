// Function allows us to declare & pack a bunch of code in a block & reuse

//first class citizen--
// store functions in a variable.
// pass a function as an argument to another function.
// return a function from another function.

//function expression--- When a function is stored inside a variable, it is called a function expression
// Anonymous function expression 
const add = function (a, b) {
    return a + b;
}
console.log(add(3, 2)); // 5 
// Named function expression 
const subtractResult = function subtract(a, b) {
    return a - b;
}
console.log(subtractResult(3, 2)); // 1

// A function that takes other functions as arguments or returns a function is known as a Higher-order function. 
// A function that is passed as an argument into another function is known as a Callback function.

function length(name, callback) {
    callback(name)
}
let lengthin = function (name) {
    console.log(`name is ${name} & len is ${name.length}`);
}
// Passing `lengthin` as a callback function 
length('callback', lengthin)//name is callback & len is 8



//SCOPE determines the accessibility/visibility of a variable---
/*

  KEYWORDS             VAR                       CONST                   LET
  scope          global & function          block & function          block & function
  redeclare          yes                          no                      no
  reassign           yes                          no                      yes
  hoisted            yes                          no                      no

*/

//GLOBAL: variable declare outside of all functions---accessed anywhere in function----global variable 0r global function
//FUNCTION: variable declare inside a function----called local variables and  function scope
//BLOCK: variable declare inside a specific block of code--- access variable the specific block 

//Scope chain: seraching variable from local variable but its not found continue searching in function scopes and reaches global it happens scope chain---
let name = 'xyz'
function user(wish) {
    let wishes = 'Everyone'
    function user1() {
        console.log(`${wish} ${wishes} ${name}`)
    }
    user1()
}
user('hello')//hello Everyone xyz

//variable Shadowing: declare a variable with name as another variable in scope chain,
//                        the scope will shadow variable at outer scope called variable shadowing

let a = 'xyz'
var b = 'abc'
{
    let a = 'klm'; 
    var b = 'pqr';
    console.log(a);//klm
    console.log(b);//pqr
}
console.log(a);//xyz
console.log(b);//pqr

//ex
let a1 = 'xyz'
var b1 = 'abc'
function f(){
    let a1 = 'klm'; 
    var b1 = 'pqr';
    console.log(a1);//klm
    console.log(b1);//pqr
}
f()
console.log(a1);//xyz
console.log(b1);//abc

//Closure: ability of a function to remember the variables & functions that are declared in its outer scope
//or the combination of functions bundled together w.r.to its surrounded state or lexical environment

function closurefun(){
    let a=10
    return function(){
        console.log(a);    
    }
}
let inner=closurefun()
inner()//10

//note:closurefun calls the inner function along its lexical scope-- console.log(a);-- lexical scope’s reference. This is called closure---outer fun exection return function still holds the lexical scope

// Immediately-Invoked Function Expression(IIFE):
// syntax: (function task(){ console.log("Currently writing a blog on JS functions");})();

let wish=(function(){
    let name='welcome'//private variable
    return {
        method:function(){
            console.log(`Hello ${name} `);  
        }
    }
})();
console.log(wish.name);//undefined
wish.method()//Hello welcome

//Advantages:
//  Currying, Memoization, Module design pattern
//currying:currying function make a function that returns another function and that returning function uses the argument of the parent function too, so on running the parent function we get a new function which on run does some work with both the arguments.
//currying advantages: partial applications, flexibility, readeability, memoization

function multiply(a){
    return function(b){
        return function(c){
            console.log(a*b*c);      
        }
    }
}
multiply(2)(3)(2)//12

//ex
function Multiple(a,b){
    return a*b
}
function curryingmul(a){
    return function(b){
            return a*b
    }
}
let mul=curryingmul(10)
console.log(mul(2));//20









