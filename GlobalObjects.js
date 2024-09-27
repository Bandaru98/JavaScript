
// Global objects play a important role in JavaScript development, offering a wide range of functionalities for various tasks

// JS encodeURI(), encodeURIComponent() and decodeURIComponent() Method
// JS eval() Method
// JS globalThis Property
// JS Global property
// JS Infinity
// JS Undefined vs Undeclared


const url='http://127.0.0.1:5500/Javascript/EcommerceJs/'
const encodeURL=encodeURI(url)
console.log(encodeURL);
//-----
const component = "Javascript library react"
const encodedComponent = encodeURIComponent(component); 
console.log(encodedComponent) 
//-----
const url1 = "http://127.0.0.1:5500/Javascript/EcommerceJs/"; 
const decodedURL = decodeURI(url1); 
console.log(decodedURL) 

//-----------
// eval()-----Direct and indirect eval ----
// eval(string);//syntax-----eval parameter as string

// Direct eval
let directEvalResult = eval("2 + 2");
console.log("Direct eval result:", directEvalResult);
 
// Indirect eval
// let indirectEval = "eval";
// let indirectEvalResult = window[indirectEval]("3 + 3");
// console.log("Indirect eval result:", indirectEvalResult);

//-------------

function func() {
	let a = 4;
	let b = 4;
	let value = eval(new String(a * b));
	console.log(value);
}
func();//[String: '16']

// -------------
function func1() {
	let a 
	let b
	let value = eval(new String(a + b));
	console.log(value);
}
func1();//[String: 'NaN']

//------Global property----// JavaScript Global Variables can be accessed outside any function or block. 
// They are declared within the window object or outside any block or scope.
function myFunction() {
    courseName = 'Js';
    console.log( courseName );
}
myFunction();
console.log( courseName );

//-------this----------
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};
person.greet(); 
//-----infinity-------------------
function test() { 
    console.log( 
        -3.645464512375121213E+1203466 + 
        "<br>"
        +3.4548643575312453512345E+1203466); 
} 
test(); 

// --------JS Undefined vs Undeclared----------
let xy
console.log(xy);//undefined
console.log(abc);//abc is not defined-----means undeclared

