// task 1
// find adult people mean age >=18

let user = [
    {name:"A",age:20},
    {name:"B",age:18},
    {name:"C",age:23},
    {name:"D",age:28},
    {name:"E",age:16},
    {name:"F",age:19},
    {name:"G",age:15},
    {name:"H",age:21},
    {name:"I",age:22}
]
let useritem=user.filter(((item)=>{
    return item.age>=18
}))
console.log(useritem);
//--------
// user[0].totalmarks=100
// console.log(user);

//task2 question is add totalmarks

user.forEach((item)=>{
    item.totalmarks=100
})
console.log(user);

//task3
//find the no > 10 & even no also--
let num=[23,12,9,6,17,1,5,3,2,22,29,1,9,20]
let n=num.filter((item)=>{
  return  item>=10 && item%2==0
})
console.log(n);//[ 12, 22, 20 ]

//task4
//create array 
let people=['madhu','kk','keer','kadapa','sweets','frontend developer']
let p=people.filter((item)=>{
  return  item.length>4
})
console.log(p);//[ 'madhu', 'kadapa', 'sweets', 'frontend developer' ]

//task5
let user3=[
    {name:"W",age:20},
    {name:"X",age:18},
    {name:"Y",age:23},
    {name:"Z",age:28}
]
// let add=user.concat(user3)//1st method
// console.log(add);
let add1=[...user,...user3]//2nd method
console.log(add1);

//task5
//find average age--

let totaPeople=user.length
console.log(totaPeople);//9

let totaAge=user.reduce((a,c,index)=>{
    return a+c.age
},0)
console.log(totaAge);//182

let avgage=totaAge/totaPeople
console.log(avgage);//20.22222222222222


//task6
//diff b/w == and === 
let number=100
let str='100'
console.log(number==str);//true
console.log(number===str);//false








