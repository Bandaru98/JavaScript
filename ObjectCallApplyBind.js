/*
Bind: stores in another variable
call: just pass the method as arguments --- using for add methods & properties in objects to another objects
apply: same as call only difference is --- using value as []
*/

let obj = {
    fname: 'xyz',
    lname: 'abc',
    city: 'kdp'
}

// obj.welcome = function(){
//     console.log(`Welcome ${this.fname}`);
// }


// obj.welcome()

let obj1 = {
    fname: 'efg',
    lname: 'klm',
    objmethod: function () {
        return `${this.fname} ${this.lname}`
    }
}
// let usebind = obj1.objmethod.bind(obj)
// console.log(usebind());
// console.log(obj1.objmethod.call(obj));

let obj2 = {
    info: function (hobby1, hobby2) {
        console.log(`My name is ${this.fname} and hobby is ${hobby1} and ${hobby2}`);
    }
}
// obj2.info.call(obj1,'Cricket','Football')
// obj2.info.apply(obj1,['Tennis','Badminton'])

let myHobbies = obj2.info.bind(obj, 'Cricket', 'Football')
// myHobbies()


//ex----

let object1 = {
    fruit: 'guava',
    vegetable: 'beetroot',
    method: function () {
        console.log(`fruit name is ${this.fruit} & vegetable is ${this.vegetable}`);
    }
}
let object2 = {
    fruit: 'apple',
    vegetable: 'carrot'
}
// object1.method.call(object2)

let object3 = {
    vegetable: 'potato',
    fruit: 'grapes',
    method1: function (difffruit1, difffruit2, difffruit3) {
        console.log(`fruit name is ${this.fruit} & vegetable is ${this.vegetable} and also ${difffruit1}, ${difffruit2} & ${difffruit3}`);
    }
}
// object3.method1.call(object2, 'banana', 'kiwi', 'orange')
// object3.method1.apply(object2, ['pineapple', 'mango', 'watermelon'])
let object4 = object3.method1.bind(object2, 'pineapple', 'mango', 'watermelon')
// object4()


//ex-----------------
let Person1 = {
    name: 'ABC',
    age: 20,
    city: "Bangalore",
    info: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    },
}

let Person2 = {
    name: 'XYZ',
    age: 22,
    city: "Mumbai",
    // __proto__:Person1
}
// Person2.info()                    //one method-----proto means permanently syntax differs
// Person1.info.call(Person2)         // another method-----like rent type


// Person2.__proto__=Person1           //second method----proto means permanently syntax differs
// Person2.info()


// Object.setPrototypeOf(Person2,Person1)   //third method------
// Person2.info()





//ex--------------------

// Object.prototype.wel = function(){
//     console.log(`Welcome Users`);  
// };
//this wel method available for all objects in our code & array also
// let md = {
//     city:"sjdfjs"
// }
// let ary = [12,5,67,9]
// ary.wel()
// Person1.wel()
// Person2.wel()
// md.wel()

//ex-----------------------

//create obj with constructor-----

function Employee(name, age) {
    this.name = name
    this.age = age
}
let Employee1 = new Employee('Rohit', 25)
console.log(Employee1.name);

Employee.prototype.welcome = function () {
    console.log(`Welcome ${this.name}`);
}
Employee1.welcome()

//ex----------

class user{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }
    meth(){  // dynamic method
        console.log(`Full name is ${this.fname} ${this.lname}`);
    }
    static private(){   //static method
        console.log('This is Private');
    }
}
let user1=new user('Jeslyn','Dhiya')
// user1.meth()

user.private()

// class user2 extends user{
//     constructor(fname,lname,city){
//         super(fname,lname)
//         this.city=city
//     }
//     meth1(){
//         console.log(`Full name is ${this.fname} ${this.lname} and from ${this.city}`);
//     }
// }
// let user3=new user2('Jeslyn','Dhiya','plvd')
// user3.meth1()

