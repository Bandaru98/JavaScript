
// console.log('a');
// setTimeout(()=>{
//     console.log('b');
// },0)
// console.log('c');

//task
// console.warn('warn message')
// console.error('error message')

// let user={
//     name:'xyz',
//     city:'bng',
//     age:25
// }
// console.table(user);

// console.group('player')
// console.log('virat');
// console.log('rohit');
// console.log('hardik');
// console.log('gill');
// console.groupEnd('player');
// console.log('rahul');

console.time()
function time(a, b) {
    console.log(a + b);

}
time(10, 0)
console.timeEnd();


//------------------
// **How do you debug JavaScript code?**
//    - Using `console.log()` to output values at various stages
//    - Using debugging tools in browsers like Chrome DevTools
//    - Placing breakpoints in the browser debugger to pause code execution
//    - Using `debugger;` statement to programmatically pause execution
//    - Using error handling with `try...catch`