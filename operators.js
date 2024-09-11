//operators are used to perform logical and mathematical computations
//Arithmetic Operators, Assignment Operators, Comparison Operators, String Operators,
// Logical Operators, Bitwise Operators, Ternary Operators, Type Operators

//    10       +       20
//  operand operator operand


// arithmetic
let a = 100;
let b = 10;
let c = a + b
console.log(c);//110
let d = a - b
console.log(d);//90
let e = a * b
console.log(e);//1000
let f = a / b
console.log(f);//10
let g = a % b
console.log(g);//0

//increment
let x = 10
// x++//11
x--//9
let z = x
console.log(z);

//exponential
let xy = 2
let zx = xy ** 2
console.log(zx);//4


let zy = Math.pow(10, 2);//Math.pow(x,y)
console.log(zy);//100

//operator precedence means more operators

let n = 100 + 50 * 3;
console.log(n);//250

let n1 = 100 - 50 * 3;
console.log(n1);//-50

let n2 = 100 * 50 / 3;
console.log(n2);//1666.6666666666667


//conditions

// if any one is true it executes
if (10 % 2 || 10 % 3) {
    console.log('success');
}

// !- converts reverse condition
if (!true) {
    console.log('data');
}//no result

// if two conditions are true it executes
if (true && 10 / 5) {
    console.log(10);
}//10

if (10 % 2 && 10 % 5) {
    console.log('ss');
}//both conditions are 0 treat as a false thats why its not execute 


//comparison
//! not equal
if (5 != 2) {
    console.log('xyz');
}//xyz
//!== datatype and value checking
if (5 !== '5') {
    console.log('xyzzz');
}//xyzzz

if (5 == '5') {
    console.log(5);
}//5

if (5 === '5') {
    console.log(100);
}//value is same but different datatype thats y not executes


//arithmetic-- post & pre increment

//nums++ takes first = operator then ++ operator

let nums = 3
let postInc = nums++; //  first assign 3 in postInc and the nums become 4
console.log("1:", postInc); // 3
console.log("2:", nums); // 4

//numSS takes ++ first then = operator
let numSS = 3
let preInc = ++numSS; // first numSS become 4 and assing 4 to preInc
console.log("1:", preInc); // 4
console.log("2:", numSS); // 4

//example
let postPre = 4;
postPre++;//4 takes ++ first the value is 5
let fs = ++postPre;
console.log(fs) //6
console.log(postPre); //6

//conditional or ternary
// syntax => condition ? (statement 1) : (statement 2)
let age = 20
age > 25 ? console.log('u can vote') : console.log('u cannot vote');//u cannot vote

//nullish operator- 
// always returns right side value---if left hand value is null and undefined otherwise ---return lefthand value
console.log(null ?? 5);//5
console.log(undefined ?? 100);//100
console.log(10 ?? 50);//10

















