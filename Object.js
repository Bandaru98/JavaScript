// an object is a collection of related data and functions, known as properties and methods, respectively. Properties are
// “key: value” pairs that store data, while methods are functions associated with the object that can manipulate its properties.
// or
// An object is a complex data structure that allows you to store collections of data. It is used to group related data 
// and functionality together, consisting of properties (key-value pairs) and methods (functions).

//creating Object

let obj = {
    name: 'madhu',
    city: 'kadapa',
    state: 'AP'
}
obj.age = 26
console.log(obj);//{ name: 'madhu', city: 'kadapa', state: 'AP', age: 26 }
obj.name = 'keer'
console.log(obj);//{ name: 'keer', city: 'kadapa', state: 'AP', age: 26 }

// { } – Curly braces define the object.
// "name", "city", "state" - These are the keys (properties) of the object. Keys are always strings.
// "madhu", 'kadapa, "AP" - These are the corresponding values associated with each key.
// : - Colon(:) separates keys and values.
// , - Comma(,) separates different key-value pairs within the object.


//ex1
let person = {
    name: 'abc',
    from: 'AP',
    job: 'it sector',
    passion: 'Successful businessman',
    company: function () {
        console.log(`His name is ${person.name} from ${person.from} and working in ${person.job} and his dream is ${person.passion.split(' ')[1]} `);
    }
}
person.company()//His name is abc from AP and working in it sector
//ex2


// objects can inherit properties from their prototypes. These are known as inherited properties. 
// To check if a property is an object’s own property (not inherited),
let obj1 = {
    id: 1
}
console.log(obj1.hasOwnProperty('id'));//true
console.log(obj1.hasOwnProperty('name'));//false


//property attributes--

// writable: When true, the property’s value can be changed
// enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
// configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its
//                 attributes (other than [[Value]], or changing [[Writable]] to false) will fail.

let obj2 = {
    name: 'madhu'
}
Object.defineProperty(obj2, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
})
console.log(obj2);//{ name: 'madhu' }


//Iterating Over All Keys of an Object & delete object
let obj3 = {
    name: 'xyz'
}
let objcreate = Object.create(obj3)
objcreate.stay = 'kdp'
objcreate.learn = 'js'
objcreate.age = 25
console.log(objcreate);//{ stay: 'kdp', learn: 'js', age: 25 }

for (let keys in objcreate) {
    console.log(keys);//stay learn age name --- gettoing keys
}
//delete object
delete objcreate.age
console.log(objcreate);//{ stay: 'kdp', learn: 'js' } --here age is deleted
console.log(objcreate.age);//undefined


//  Defining Global Variables to be owned by Objects:
//  This is mostly done on methods, the process is fairly simple we will define our function as we are used to,and while defining
//  the function to be a member of the object properties we will just give the name of the function as the value of one key. 


function wishes() {
    console.log('have a nice day');
}
let obj4 = {
    greeting: wishes,//here function-Name as Value.
    bywhom: function () { //define the function as explicitly
        console.log('xxxxxxxxxx');
    }
}
obj4.greeting()//have a nice day
obj4.bywhom()//xxxxxxxxxx

