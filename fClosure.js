// closures involve the combination of functions and the scope in which they are defined. A closure allows a function to access variables from its scope, outer function scope, and the global scope. This creates a “closed-over” environment, preserving the state of the outer function even after it has finished executing.

// Here’s a brief breakdown of closures:
// Scope Chain: In JavaScript, each function has access to its variables, as well as variables from all its ancestor scopes, creating a chain of scopes known as the “scope chain.“
// Lexical Scoping: Closures are based on lexical scoping, which means that a function’s scope is determined by its position in the source code.
// Function Inside Function: When a function is defined inside another function, it forms a closure. The inner function has access to the outer function’s variables, even after the outer function has completed its execution.

function out() {
    let a = 1
    function inner() {
      return a
    }
    return inner
}
let get_inner_function = out()
console.log(get_inner_function());//1
console.log(get_inner_function());//1
console.log(get_inner_function());//1

//create closure
function out1(outerarg) {
    function inner(innerarg) {
      return outerarg+innerarg
    }
    return inner
}
let get_inner_func = out1(6)
console.log(get_inner_func(1));//7
console.log(get_inner_func(2));//8
console.log(get_inner_func(5));//11

//closure within loop
function out2(){
    let arr=[]
    let i
    for(i=0;i<3;i++){
        arr[i]=function(){
            return i
        }
    }
    return arr
}
let getarray=out2()
console.log(getarray[0]());//3
console.log(getarray[1]());//3
console.log(getarray[2]());//3

//closure
function out3(){
    function creclosure(value){
        return function(){
            return value
        }
    }
    let arr=[]
    let i
    for(i=0;i<3;i++){
        arr[i]=creclosure(i)
    }
    return arr
}
let getarr=out3()
console.log(getarr[0]());//0
console.log(getarr[1]());//1
console.log(getarr[2]());//2









// Scope: environment in which a variable or function is declared and can be accessed. JavaScript uses function-based scope meaning variables declared inside a function are locally scoped in while variables declared outside any function have global scope.

// The Closures occur in JavaScript when a function “remembers” its lexical scope even if it’s executed the outside that scope. In other words, a closure allows a function to access variables from its containing function and even after the containing function has finished executing.

//scope

let a;// Declare message in global scope
function scofun() {
    a = 100
    console.log(a);//100
}
scofun()
console.log(a);//100 // Now it's accessible globally

//closures
function outer() {
    let a = 'kumar'
    function inner() {
        console.log('Hello,' + a + '!');
    }
    return inner
}
let closure = outer()
closure()//Hello,kumar!
