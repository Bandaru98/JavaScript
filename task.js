// task 1
// find adult people mean age >=18

let user = [
    { name: "A", age: 20 },
    { name: "B", age: 18 },
    { name: "C", age: 23 },
    { name: "D", age: 28 },
    { name: "E", age: 16 },
    { name: "F", age: 19 },
    { name: "G", age: 15 },
    { name: "H", age: 21 },
    { name: "I", age: 22 }
]
let useritem = user.filter(((item) => {
    return item.age >= 18
}))
console.log(useritem);
//--------
// user[0].totalmarks=100
// console.log(user);

//task2 question is add totalmarks

user.forEach((item) => {
    item.totalmarks = 100
})
console.log(user);

//task3
//find the no > 10 & even no also--
let num = [23, 12, 9, 6, 17, 1, 5, 3, 2, 22, 29, 1, 9, 20]
let n = num.filter((item) => {
    return item >= 10 && item % 2 == 0
})
console.log(n);//[ 12, 22, 20 ]

//task4
//create array 
let people = ['madhu', 'kk', 'keer', 'kadapa', 'sweets', 'frontend developer']
let p = people.filter((item) => {
    return item.length > 4
})
console.log(p);//[ 'madhu', 'kadapa', 'sweets', 'frontend developer' ]

//task5
let user3 = [
    { name: "W", age: 20 },
    { name: "X", age: 18 },
    { name: "Y", age: 23 },
    { name: "Z", age: 28 }
]
// let add=user.concat(user3)//1st method
// console.log(add);
let add1 = [...user, ...user3]//2nd method
console.log(add1);

//task5
//find average age--

let totaPeople = user.length
console.log(totaPeople);//9

let totaAge = user.reduce((a, c, index) => {
    return a + c.age
}, 0)
console.log(totaAge);//182

let avgage = totaAge / totaPeople
console.log(avgage);//20.22222222222222


//task6
//diff b/w == and === 
let number = 100
let str = '100'
console.log(number == str);//true
console.log(number === str);//false

// task print only odd numbers
let odd = [23, 12, 9, 6, 17, 12, 5, 3, 2, 22, 29, 1, 9, 20]
let finodd = odd.filter((item) => {
    return item % 2 != 0
})
console.log(finodd);//[23, 9, 17, 5, 3, 29,  1, 9]

//task 7
let student = [
    { name: 'A', mark: 80 },
    { name: 'B', mark: 83 },
    { name: 'C', mark: 87 },
    { name: 'D', mark: 78 },
    { name: 'E', mark: 81 },
]
//foreach no need to write return keyword
//map need return keyword when we use {}
// map doesnot need return without curly brackets

// student.forEach((item)=>{
//      item.mark=item.mark+5;
// })
// console.log(student);

student.map((item) => item.mark = item.mark + 5)
console.log(student);
//here foreach & map are give same result
// [
//     { name: 'A', mark: 85 },
//     { name: 'B', mark: 88 },
//     { name: 'C', mark: 92 },
//     { name: 'D', mark: 83 },
//     { name: 'E', mark: 86 }
//   ]


//task8
// swap
let j = 10;
let k = 15;
console.log("j = ", j, " k = ", k);//j =  10  k =  15
function swap() {
    let temp = j;
    j = k;
    k = temp;
}
swap()
console.log("j = ", j, " k = ", k);//j =  15  k =  10


//task8
let user1={
'user name':'xyz'
}
console.log(user1["user name"]);


