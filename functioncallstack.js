// The call stack is a fundamental concept in JavaScript’s runtime environment. It is a mechanism that keeps track of the 
// execution context of functions in a program. When a function is called, a new frame is pushed onto the top of the call stack, 
// representing the context of that function’s execution. When the function completes, 
// its frame is popped off the stack, allowing the program to return to the context of the calling function.

// Here are key points about the call stack:

// Function Calls:
// When a function is called, a new frame is created and pushed onto the top of the call stack.
// This frame contains information about the function, including its arguments and local variables.
// Execution Context:
// The call stack maintains the execution context of the currently executing function.
// It keeps track of which line of code is being executed and the values of local variables.
// Last In, First Out (LIFO):
// The call stack operates on a Last In, First Out (LIFO) basis. The last function called is the first to complete and be removed from the stack.
// Recursion:
// Recursion involves a function calling itself. Each recursive call adds a new frame to the call stack.
// If not managed properly, recursion can lead to a stack overflow, where the call stack becomes too large.

function f1(){
    console.log('welcome byf1');
}
function f2(){
    f1()//welcome byf1
    console.log('welcome byf2');
}
f2()//welcome byf2


//callback
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([10,20]);
    }, 1000)
}
const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    console.log(sum);
}
mainFunction(add);//30