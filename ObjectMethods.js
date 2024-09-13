//object.create--------
// The Object.create() method is used to create a new object and link it to the prototype of an existing object.

// Initialize an object with properties and method
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: true,
    num: function () {
        const no = this.d ? 'number' : 'not a number'
        console.log(`${this.a} ${this.b} ${this.c} ${this.d} ${no} `);
    }
}
let e = Object.create(obj)
e.num()//1 2 3 true number 
e.a = '01'
e.num()//01 2 3 true number

e.d = '4'  // if position is exist it will replace (overwrite), if position is not exist it will create
e.num()//01 2 3 4 number


//object.keys--------------
// Object.keys() creates an array containing the keys of an object.

let obj1={
    a: 1,
    b: 2,
    c: 3
}
// Get all keys of the object
let key=Object.keys(obj1)
console.log(key);//[ 'a', 'b', 'c' ]
 //iterate through keys
Object.keys(obj1).forEach(key=>{
    let value=obj1[key]
    console.log(`${key}: ${value}`);  
})
// a: 1
// b: 2
// c: 3

//Get the length of the keys
let len=Object.keys(obj1).length
console.log(len);//3


//object.values-------------
// Object.values() creates an array containing the values of an object.
const settime = {
    id: 1,
    time: `10-1-2019`,
    device: 'mobile',
    browser: 'Chrome'
};
// Get all values of the object
const values = Object.values(settime);
console.log(values);//[ 1, '10-1-2019', 'mobile', 'Chrome' ]


// object.entries----------
// Object.entries() creates a nested array of the key/value pairs of an object.
const entry = {
    id: 1,
    time: `10-1-2019`,
    device: 'mobile',
    browser: 'Chrome'
};
// Get the object key/value pairs
const entriesobj = Object.entries(entry);
console.log(entriesobj);
//   [
//     [ 'id', 1 ],
//     [ 'time', '10-1-2019' ],
//     [ 'device', 'mobile' ],
//     [ 'browser', 'Chrome' ]
//   ]

// Loop through the results

entriesobj.forEach(item=>{
let key=item[0]
let value=item[1]
console.log(`${key} : ${value}`);
})
// id : 1
// time : 10-1-2019
// device : mobile
// browser : Chrome

//object.assign()----------
// Object.assign() is used to copy values from one object to another.
const fullname = {
    firstName: 'Philip',
    lastName: 'Fry'
};
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
// Merge the objects
const character = Object.assign(fullname, details);
console.log(character);

const characters = {...fullname, ...details}
console.log(characters);
// {
//     firstName: 'Philip',
//     lastName: 'Fry',
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
//   }


// object.freeze---------
// Object.freeze() prevents modification to properties and values of an object, and 
// prevents properties from being added or removed from an object.
const user = {
	username: 'abc',
	password: '123'
};
// Freeze the object
const newUser = Object.freeze(user);
newUser.password = '*';
newUser.active = true;
console.log(newUser);//{ username: 'abc', password: '123' }

//object.seal---------------
// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.
//  This method is similar to Object.freeze(). Refresh your console before implementing the code below to avoid an error.
const user1 = {
	username: 'xyz',
	password: '123'
};
// Seal the object
const newUsers = Object.seal(user1);
newUsers.password = '***';
newUsers.active = true;
console.log(newUsers);//{ username: 'xyz', password: '***' }


//Object.getPrototypeOf----------------
//  is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.
const emp = ['Ron', 'April', 'Andy', 'Leslie'];
Object.getPrototypeOf(emp);
console.log(emp);//[ 'Ron', 'April', 'Andy', 'Leslie' ]
let s1=Object.getPrototypeOf(emp) === Array.prototype;
console.log(s1);//true


