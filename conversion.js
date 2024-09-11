//implicit-- automatically converts
let b='200'
let a=100

console.log(b+a);//200100
console.log(b-a);//100

console.log(a+true);//101--true means 1
console.log(b+true);//200true
console.log(a+b+10);//100200010- string

console.log(typeof (b+a));//string
console.log(typeof (b-a));//number


//+ converts string & - converts number

//Explicit -- forcefully converts
let number='100'
console.log(typeof number);//string
let num=Number(number)
console.log(num);//100
console.log(typeof num);//number