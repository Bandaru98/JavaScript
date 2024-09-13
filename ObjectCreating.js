
// An object in JavaScript is a collection of key-value pairs, where keys are strings (properties) and
//  values can be any data type. Objects can be created using object literals, constructors, or classes. 
//  Properties are defined with key-value pairs, and methods are functions defined within the object,
//   enabling encapsulation and organization of data and behavior.

//create object ways--4 ways

// Using object literals---1
// Creating object with a constructor---2
// Creating object with Object.create() method---3
// Using es6 classes---4

//object literals ---1

//object literal-- collection of key-value pairs enclosed within a pair of curly braces
//  let obj={
//     key:'value',
//     key1:'value1',
//     key2:'value2'
// }

// Creating js objects with object literal
let obj = {
    name: 'madhu',
    city: 'kadapa',
    state: 'AP'
}
console.log(obj);//{ name: 'madhu', city: 'kadapa', state: 'AP' }
//property accessor
console.log(obj.name);// using dot notation ---madhu
console.log(obj['city']);//using bracket notation ---kadapa


//object constructor: -----2
// Returns a reference to the object constructor function that has created the instance of an object. 
//constructor creates 2 ways  Object constructor function and  Using new keyword

// Object Constructor Function: it creates explicit function to take required values as parameters and assign them as properties of desired object
// function obj(value,value1,value2){
//     this.value=value;
//     this.value1=value1;
//     this.value2=value2;
// }

// Using New Keyword:
// New keyword in front of any constructor method or any built-in constructor method 
// ( such as Object, Date, String, etc) and creates a new instance of the following object by mounting it on memory.

// let obj=new Object()
// obj.key1=value1;
// obj.key2=value2;
// obj.key3=value3;

function objconstruct(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
}
let objcreat = new objconstruct('Keer', 25, 'kadapa')
console.log(objcreat);//objconstruct { name: 'Keer', age: 25, city: 'kadapa' }
//property accessor
console.log(objcreat.name);//keer
console.log(objcreat['age']);//25
console.log(objcreat.city);//kadapa

//difference b/w literal & constructor----
//  The only difference between the both is that object literals can take care of several key-value pairs at once and thus
//  is more convenient while on the other hand with the constructed-form objects, we must add the properties one-by-one in separate statements. 

// Creating object with Object.create() Method-----3

// The Object.create() method in JavaScript creates a new object using an existing object as its prototype. 
// This approach allows the new object to inherit properties and methods from the prototype object,enabling 
// inheritance-like behavior. It’s useful for creating objects with shared behaviors while maintaining unique properties.

// const coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     }
// };
// const me = Object.create(coder);
// me.name = 'Mukul';
// me.isStudying = true;
// me.printIntroduction();

let objcre = {
    isloggin: 'no',
    createfun: function () {
        console.log(`My Name is ${this.name} am I loggin: ${this.isloggin}`);
    }
}
let createobj = Object.create(objcre)
createobj.name = 'xyz'
createobj.isloggin = 'yes'
createobj.createfun()//My Name is xyz am I loggin: yes


// Using es6 classes----4
// Using ES6 classes to create objects in JavaScript involves defining a class with a constructor to initialize properties 
// and methods. Objects are then instantiated from the class using the new keyword, offering a more structured and OOP-like
//  approach to object creation.

//HERE USING NEW KEYWORD & CLASSES ALMOST SAME diffence is using class & in place of function here we use constructor

class Nameobj {
    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city
    }
}
let nameobj1 = new Nameobj('xyz', 20, 'banglore')
console.log(nameobj1);//Nameobj { name: 'xyz', age: 20, city: 'banglore' }
//property accessor
console.log(nameobj1.name); xyz
console.log(nameobj1['city']);//banglore

