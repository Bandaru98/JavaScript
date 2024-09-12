//reserve keywords
// ----var,let,const ---we cannot use this type of words--in variable declaration, function declaration 


/*

  KEYWORDS             VAR                       CONST                   LET
  scope          global & function          block & function          block & function
  redeclare          yes                          no                      no
  reassign           yes                          no                      yes
  hoisted            yes                          no                      no

*/


// //let-- redeclaration is not possible

// let a=10
// let a=10//cannot declare block scoped variable
//a=10 //it allowed
// console.log(a);// Identifier 'a' has already been declared

// ex 1
let b11 = 10;
function f() {
    let b1 = 95
    console.log(b1);//95
    console.log(b11);//10
}
f();
// console.log(b1);//ReferenceError: b1 is not defined 
console.log(b11);//10

//ex 2

let b2 = 18
function f1() {
    if (true) {
        let b22 = 19
        console.log(b22);//19
    }
    // console.log(b22);//ReferenceError: b22 is not defined
}
f1()
console.log(b2);//18

//ex-3
let b3=15
if (true){
    let b3=155
    console.log(b3);//155
}
console.log(b3);//15

//ex 4
// console.log(b4);//ReferenceError: Cannot access 'b4' before initialization
let b4=1000


// //const-- redeclaration is not possible ---not defined

// const ab = 'm'
// const b = 'k'
// console.log(ab);
// console.log(b);

//ex 1

const cd=25
function f3(){
    cd=20//TypeError: Assignment to constant variable.
    console.log(cd); 
}
f3()


// //var--redeclaration & reassignment is possible

//ex

// var x = 10
// var x = 100
// var x = 1
// console.log(x);



//var use it anywhere in our code but var variable inside a function u can use it in with in the function
//ex 1
var a1 = 100
function fun() {
    var b1 = 10
    console.log(a1, b1);  //100 10
}
fun()
console.log(a1);//100

//ex 2

function fun1() {
    var ab = 1
    console.log(ab);//1 

}
fun1()
// console.log(ab); // ReferenceError-- ab is not defined bcz --var variable inside a function u can use it in with in the function

//ex 3
var a3 = 10
var a3 = 8
a3 = 105
console.log(a3); //105 -redeclare variable with same name in same scope it doesnot give error in var





