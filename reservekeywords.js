//reserve keywords
// ----var,let,const ---we cannot use this type of words--in variable declaration, function declaration 

//let-- redeclaration is not possible
// let a=10
// let a=10//cannot declare block scoped variable
// console.log(a);// Identifier 'a' has already been declared

//const-- redeclaration is not possible ---not defined
const ab='m'
const b='k'
console.log(ab);
console.log(b);

//var--redeclaration & reassignment is possible
var x=10
var x=100
var x=1
console.log(x);




