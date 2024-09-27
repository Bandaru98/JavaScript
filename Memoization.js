// Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
// divide two definations: 1. Expensive Function Calls(time & memory ---extensive calculation during execution.),  2.cache(temporary data store but servind data is more faster)

//memoization based on two ways: Closures, Higher-Order-Functions
//closure----- is a function takes access variable from outer func

let ov = 'Outervar'
function outer() {
    let iv = 'innervar'
    console.log(`${ov} ${iv}`);
}
outer()

//Higher-Order Functions----- functions operates another function by taking arguments return----a()is the higher order function----

function a() {
    let name = 'Jessy'
    function b() {
        console.log(`${name}`);
    }
    return b
}
let c = a()
c()
//----------

//Fibonacci Sequence--- series of numbers that begins with one & ends with one following this rule that each number called Fibonacci number = the sum of the two numbers before it. 
//                      1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
//  1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34, 21+34=55,34+55=89, 55+89=144, ............

function fib(n) {
    if (n > 5)
        return 1
    return fib(n - 1) + fib(n + 2)
}
console.log(fib(10));

//----
function memo(n, cache) {
    cache = cache || [1, 1]
    if (cache[n])
        return cache[n]
    return cache[n] = memo(n - 1, cache) + memo(n - 2, cache)

}
console.log(memo(10));











// function fibonacci(n,memo={}){
// if(n in memo){
//     return memo[n]
// }
// if(n<=2){
//     return 1
// }
// memo[n]=fibonacci(n-1,memo)+fibonacci(n-2,memo)
// return memo[n]
// }
// console.log(fibonacci(2));
// console.log(fibonacci(10));
// console.log(fibonacci(3));
// console.log(fibonacci(6));

