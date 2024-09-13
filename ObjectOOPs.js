// Object-Oriented Programming-- OOPS

// Object: An Object is a unique entity that contains properties and methods. 
// For example “a car” is a real-life Object, which has some characteristics like color, type, model,
//  and horsepower and performs certain actions like driving. 

// The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods.
//  An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether 
//  it is a function, array, or string. 

// OOPs Concept in JavaScript----Object, Classes, Encapsulation, Abstraction,Inheritance, Polymorphism
//The STRUCTURE or building blocks, of object-oriented programming include the Classes, Objects, Methods & Attributes

//Principles 
// The seven concepts of object-oriented programming (OOP) are: 

// Encapsulation: The process of wrapping properties and functions within a single unit called Encapsulation 
// Abstraction: Simplifies complex systems by focusing on relevant details and discarding less important ones. 
// Inheritance: Allows an object to acquire the properties and behavior of another object. This supports reusability and simplifies maintenance. 
// Polymorphism: Allows objects to take on many forms, meaning that the properties of an object can change with the context. 
// Modularity: Subdivides a system into smaller, independent modules based on functionality. 
// Association: Represents a "using" relationship between two or more objects. 
// Composition: One of the seven concepts of OOP.


//Benefits of oops
// Modularity. Encapsulation enables objects to be self-contained, making troubleshooting and collaborative development easier.
// Reusability. Code can be reused through inheritance, meaning a team does not have to write the same code multiple times.
// Productivity. Programmers can construct new programs quickly through the use of multiple libraries and reusable code.
// Easily upgradable and scalable. Programmers can implement system functionalities independently.
// Interface descriptions. Descriptions of external systems are simple, due to message-passing techniques that are used for object communication.
// Security. Using encapsulation and abstraction, complex code is hidden, software maintenance is easier and internet protocols are protected.
// Flexibility. Polymorphism enables a single function to adapt to the class it is placed in. Different objects can also pass through the same interface.
// Code maintenance. Parts of a system can be updated and maintained without needing to make significant adjustments.
// Lower cost. Other benefits, such as its maintenance and reusability, reduce development costs.

//----
// Note: A Method in javascript is a property of an object whose value is a function. 
// The object can be created in two ways in JavaScript: Object Literal, Object Constructor

//object literal--

let obj = {
    fname: 'abc',
    lname: 'xyz',
    // A Method in javascript is a property of an object whose value is a function. 
    getfun: function () {
        return (`Full name is ${obj.fname} ${obj.lname}`)
    },
    //object with in object
    details: {
        phno: 1234567890,
        address: 'xxxxxxx'
    }
}
console.log(obj.getfun());//Full name is abc xyz
console.log(obj.details);//{ phno: 1234567890, address: 'xxxxxxx' }
console.log(obj.details.phno);//1234567890

//object constructor---

function objcons(fname, lname) {
    this.fname = fname
    this.lname = lname
}
// Creating new instances of person object
let objconstructor1 = new objcons('ab', 'cd')
let objconstructor2 = new objcons('ef', 'gh')
console.log(objconstructor1.fname);//ab
console.log(`${objconstructor2.fname} ${objconstructor2.lname}`);//ef gh

//Object.create()
//  Object.create() Method creates a new object, using an existing object as the prototype of the newly created object.
let objcre = {
    isloggin: false,
    createfun: function () {
        console.log(`My Name is ${this.name} am I loggin: ${this.isloggin}`);
    }
}
let createobj = Object.create(objcre)
createobj.name = 'xyz'
createobj.isloggin = true
createobj.createfun()//My Name is xyz am I loggin: yes


// Using ES6 classes to create objects in JavaScript involves defining a class with a constructor to initialize properties 
// and methods. Objects are then instantiated from the class using the new keyword, offering a more structured and OOP-like
//  approach to object creation.

// Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are 
// instances of the class or the concrete implementation. 

//HERE USING NEW KEYWORD & CLASSES ALMOST SAME diffence is using class & in place of function here we use constructor

class Clobj {
    constructor(proname, proprice, prowarranty) {
        this.proname = proname
        this.proprice = proprice
        this.prowarranty = prowarranty
    }
    getdetails() {
        console.log(`Product name is ${proname} its price is ${proprice} & warranty is ${prowarranty}`);
    }
}
let getdata = new Clobj('Watch', 5000, '1 Year')
let getdata1 = new Clobj('Mobile', 5000, '1 Year')
// console.log(getdata);//Clobj { proname: 'Watch', proprice: 5000, prowarranty: '1 Year' }
console.log(getdata['proname']);//Watch
console.log(getdata1.proname);//Mobile

//using Prototype
// Traditional Way of defining an Object and simulating them as classes.--------

function Clobj1(proname, proprice, prowarranty) {
    this.proname = proname
    this.proprice = proprice
    this.prowarranty = prowarranty
}
Clobj1.prototype.getdetails = function () {
    console.log(`Product name is ${proname} its price is ${proprice} & warranty is ${prowarranty}`);
}

let getdata01 = new Clobj1('Laptop', 50000, '1 Year')
let getdata02 = new Clobj1('Wireless', 5000, '1 Year')
console.log(getdata01);//Clobj1 { proname: 'Laptop', proprice: 50000, prowarranty: '1 Year' }
console.log(getdata01['proname']);//laptop
console.log(getdata02.proname);//Wireless

//Encapsulation-----

class Enc {
    constructor(name) {
        this.name = name;
    }
    addAddress(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name}, 
            Address is: ${this.add}`);
    }
}
let person1 = new Enc('xyz');
person1.addAddress('bng');
person1.getDetails();
// Name is xyz,
//             Address is: bng

//Abstraction------
function abs(f, n) {
    this.f = f;
    this.n = n;
    let fun1 = function () {
        console.log(`${f} ${n}`);
    }
    this.fun2 = function () {
        console.log(`${f} ${n}`);
    }
}
let absaccess = new abs('abc', 'xyz')
// console.log(absaccess);//abs { f: 'abc', n: 'xyz' }
// console.log(absaccess.fun1);//abc xyz
// console.log(absaccess.fun2());//undefined

//Inheritence
// Inheritance example
class person {
	constructor(name) {
		this.name = name;
	}
	// method to return the string
	method() {
		return (`Name of person: ${this.name}`);
	}
}
class student extends person {
	constructor(name, id) {
		super(name);
		this.id = id;
	}
	method() {
		return (`${super.method()}, Student ID: ${this.id}`);
	}
}
let student1 = new student('xyz', 2);
console.log(student1);//student { name: 'xyz', id: 2 }
console.log(student1.method());//Name of person: xyz, Student ID: 2





