// An arrow function is essentially an anonymous function with a shorter syntax. They are often assigned to variables, making them reusable.
//Arrow Function without Parameters---
const arr = () => {
    console.log( "Im an arrow function" );
}
arr();

// Arrow Function with Single Parameters----
const square = x => x*x;
console.log(square(4));//output: 16

//Arrow Function with Multiple Parameters----
const arrow1 = ( x, y, z ) => {
    console.log( x + y + z )
}
arrow1( 1,2,3 );//6

// Arrow Function with Default Parameters----
const arrow2 = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}
arrow2( 10, 20 );//10 20 30

//Return Object Literals-------
// () => ({ key: value }) returns an object { key: value }, useful for immediate object creation and returning.
const fullname = (fname, lname) =>({ fname, lname});
    console.log(fullname("Sresta", "Jeslyn"));//{ fname: 'Sresta', lname: 'Jeslyn' }

// Async Arrow Functions------
// Arrow functions can be made asynchronous by adding the async keyword before the parameter list. 

// benefits of Arrow Functions
// Concise Syntax: Arrow functions reduce the amount of code needed for function expressions.
// Lexical this Binding: Arrow functions automatically bind this to the surrounding context, eliminating common issues when dealing with callbacks.
// Improved Readability: For shorter functions, arrow syntax can make your code more readable.
// Limitations of Arrow Functions----
// No prototype Property: Arrow functions do not have the prototype property, so they cannot be used as constructors.
// Cannot be Used with new: Since they lack a prototype, they cannot be used with the new keyword to create instances.
// Cannot be Generators: Arrow functions cannot be used as generator functions (function*) because they do not support the yield keyword.
// Anonymous Nature: Debugging can be harder because arrow functions are anonymous by default.
// No Own this, arguments, super, or new.target: Arrow functions do not have their own bindings for these properties, which can limit their use in some cases.