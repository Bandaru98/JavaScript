
//number
let number='100'
console.log(typeof number);//string
let num=Number(number)
console.log(num);//100
console.log(typeof num);//number

//parseint
let mark='80.75'
let markint=parseInt(mark)
console.log(markint);//80-- only integer value

//parsefloat
let markfloat=parseFloat(mark)
console.log(markfloat);//80.75--- decimal value shows

//isfinite
console.log(Number.isFinite(10/10));//true
console.log(Number.isFinite(10/0));//false

//isinteger
console.log(Number.isInteger(90.200));//false
console.log(Number.isInteger(9));//true

//toprecision
let pre=40.181890
console.log(pre.toPrecision(3));//40.2

//tofixed
console.log(pre.toFixed(3));//40.182






