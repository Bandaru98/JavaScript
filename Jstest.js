// const fun = function () {
//     console.log(this.name);
//     const f1 = () => {
//         console.log(this.name);
//     }
//     f1()
// }
// fun.call({ name: 'john' })


// for(var i=0;i<3;i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, i *  1000);
//     }) (i)
// }




// Example of variable declarations
// var x = 10;  // var is function-scoped or globally scoped if outside a function
// let y = 20;  // let is block-scoped (i.e., within the nearest set of curly braces {})
// const z = 30; // const is also block-scoped, but the value cannot be reassigned

// // Function to print numbers 1 to 4 with setTimeout
// function printNumbers() {
//     console.log("Inside the function:");
//     for (let i = 1; i <= 4; i++) {
//         // setTimeout to simulate a delay, printing each number after 1000ms * i
//         setTimeout(function() {
//             console.log(i); // Prints the value of i after each delay
//         }, i * 1000);
//     }
// }

// // Logging values of variables before calling the function
// console.log("Before calling function:");
// console.log(x); // Prints 10
// console.log(y); // Prints 20
// console.log(z); // Prints 30

// // Call the function to print numbers 1 to 4
// printNumbers();

// // Logging values of variables after calling the function
// console.log("After calling function:");
// console.log(x); // Prints 10 again
// console.log(y); // Prints 20 again
// console.log(z); // Prints 30 again


// let user={
//     id:23,
// name:'john',
// address:{
//     city:'kadapa'
// }
// }
// Object.defineProperty(user,{id:{writable:false}})
// user.id=1234
// console.log(user);

// Object.freeze(user.id)
// console.log(user.id);
// let {id,name}=user
// user.id=12345
// console.log(user);


// Define user object
// let user = {
//     id: 23,
//     name: 'john',
//     address: {
//         city: 'kadapa'
//     }
// };

// Function to recursively freeze an object, including nested properties
// function deepFreeze(obj) {
//     // Retrieve the property names defined on the object
//     let propNames = Object.getOwnPropertyNames(obj);

//     // Freeze properties before freezing the object itself
//     for (let name of propNames) {
//         let value = obj[name];

//         // If the property is an object, freeze it recursively
//         if (typeof value === "object" && value !== null) {
//             deepFreeze(value);
//         }
//     }

//     // Finally, freeze the original object
//     return Object.freeze(obj);
// }

// // Call deepFreeze to freeze user object and its nested properties
// deepFreeze(user);

// // Attempt to change a frozen property
// user.id = 1234; // This will not work since 'id' is frozen
// user.address.city = 'new city'; // This will not work since 'address' is frozen
// console.log(user);

// // Destructuring the user object
// let { id, name } = user;
// console.log(id, name); // Output: 23 'john'

// // Attempting to change destructured id will not affect the original user object
// id = 12345;
// console.log(user); // Output: user object remains unchanged with id: 23 and city: 'kadapa'


// console.log('a');
// setTimeout(() => {
//     console.log('b');

// })
// let array=['c','d']
// array.forEach((x) => 
//     console.log(x)
// )
// console.log('e');



// let obj=[{
//     key:'sample1',
//     data:'data1'
// },
// {
//     key:'sample2',
//     data:'data2'
// },
// {
//     key:'sample3',
//     data:'data3'
// },
// {
//     key:'sample4',
//     data:'data4'
// },
// {
//     key:'sample4',
//     data:'data4'
// }
// ]
// let output={} 
// obj.forEach((item,index)=>{
//     if(output[item.key]){
// output[item.key].push(item)
//     }else{
//         output[item.key]=[item]
//     }
// })
// console.log(output);


// let x=parseInt(Math.random()*5)
// console.log(x);



// for (let i = 0; i <= 3; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }


// console.log(x);
// let x=10
// function foo(){
//     let x=20
//     console.log(x);
// }
// foo()
// console.log(x);



// console.log(x);
// var x=10
// function foo(){
//    var x=20
//     console.log(x);
// }
// foo()
// console.log(x);



// let obj = {
//     id: 123,
//     name: 'Dhiya',
//     add: {
//         city: 'Plvd'
//     }
// }
// Object.seal(obj)
// console.log(obj);
// obj.name='jessy' // allow 
// console.log(obj);

// Object.freeze(obj)
// console.log(obj);
// obj.name='jessy' //not allow 
// console.log(obj);



// let str='Javascript'
// let strrev=str.split('').reverse(' ').join(' ')
// console.log(strrev);
// // 0r
// let string='Javascript'
// let reversestr=''
// for(let i=string.length-1;i>=0;i--){
//     reversestr+=string[i]
// }
// console.log(reversestr);


////descending order
// let num=[100,35,20,5,98,56,300,23,76]
// let i=num.sort((n1,n2)=>n1-n2)
// console.log(i);



//promise ---then ,catch, finally,  async, await [same topic]      settime out











