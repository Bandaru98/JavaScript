// In JavaScript, this keyword refers to the current object in context. Its value depends on how 
// it’s used: in methods, it refers to the object; in global scope, it refers to the global object.

// Note: this is not a variable. It is a keyword. You cannot change the value of this.

// The this keyword refers to different objects depending on how it is used----
// When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.
// In a function under strict mode, this becomes undefined.
// During an event, this points to the element that triggered the event.
// Methods such as call(), apply(), and bind() can reassign this to any desired object.

//using this in a method-------

let chinnari = {
    name: 'Jeslyn',
    age: 2,
    child() {
        console.log('Chinnari name is ' + this.name + ' and her ' + this.age + ' years old ');

    }
}
chinnari.child()//Chinnari name is Jeslyn and her 2 years old 

//using this in a function---------
// the behavior of the this keyword varies depending on how the function is invoked.

function wish() {
    console.log('Hello, my name is ' + this.name);
};
let baby = {
    name: 'dhiya',
    sayhi: wish
};
let baby1 = {
    name: 'Jessy'
};
wish()//Hello, my name is undefined
baby.sayhi()//Hello, my name is dhiya
wish.call(baby1)//Hello, my name is Jessy

// Using this alone---------
// When used alone in JavaScript, outside of any specific context, 
// the behavior of the this keyword depends on whether the code is running in strict mode or not.

console.log(this);//{}

//Implicit binding---------
// When we call a function as a method of the object this keyword refers to the calling object

let baby2 = {
    name: 'Sresta',
    age: 2,
    met: function () {
        return `Hello ${this.name}, baby's ${this.age} years old`
    }
}
console.log(baby2.met());//Hello Sresta, baby's 2 years old

//explicit binding---------
// When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default 
// reference is changed to the object called using the above-specified methods.

function vote() {
    if (this.age > 18) {
        console.log('u can vote');
    } else {
        console.log('u can not vote');
    }
}
let voter = { age: 25 }
let voter1 = { age: 15 }
vote.call(voter)//u can vote
vote.call(voter1)//u can not vote

// Default Binding-------
// When this keyword is used in global scope this is set to window object.

let age = 20
function agefun() {
    return this.age;
}
console.log(agefun());//undefined

// Arrow Function Binding----------
// When this is used in the arrow function then this has lexical scope so without
//  the function keyword this is unable to refer to the object in the outer scope.

let baby3 = {
    name: 'Jessy',
    age: 2,
    met: () => {
        return `Hello ${this.name}, baby's ${this.age} years old`
    }
}
console.log(baby3.met());//Hello undefined, baby's undefined years old


// The precedence order of this keyword is
// JavaScript bind() Method
// JavaScript call() and apply() Method
// JavaScript Object Method
// JavaScript Global Scope


// Call() Method: The call method is basically used to invoke the function with different this object. 
// In JavaScript, this refers to an object. It depends on how we are calling a particular function. In the global scope, 
// this refers to the global object window. Inside function also this refers to the global object window.

//call method parameters---Objectinstance & arguments
// object.objectMethod.call(objectInstance, arrayOfArguments)

function wish() {
    console.log('Hello, my name is ' + this.name);
};
let baby5 = {
    name: 'dhiya',
    sayhi: wish
};
let baby6 = {
    name: 'Jessy'
};
wish()//Hello, my name is undefined
baby5.sayhi()//Hello, my name is dhiya
wish.call(baby6)//Hello, my name is Jessy

//Passing parameter with the call method
function wish(hobby,like) {
    console.log('Hello, my name is ' + this.name + ' '+hobby+' '+like);
};
let baby7 = {
    name: 'dhiya',
    sayhi: wish
};
let baby8 = {
    name: 'Jessy'
};
wish()//Hello, my name is undefined
baby7.sayhi()//Hello, my name is dhiya
wish.call(baby8,'running','rhymes')//Hello, my name is Jessy running rhymes


// Apply() method: Just like the call method we can also bind the function to any object.
//  Using apply( ) method also we can invoke a given function with different objects.

// object.objectMethod.apply(objectInstance, arrayOfArguments)

function wish() {
    console.log('Hello, my name is ' + this.name);
};
let bab = {
    name: 'dhiya',
    sayhi: wish
};
let bab1 = {
    name: 'Jessy'
};
wish()//Hello, my name is undefined
bab.sayhi()//Hello, my name is dhiya
wish.apply(bab1)//Hello, my name is Jessy

//Passing parameter with the apply method----
function wish(hobby,like) {
    console.log('Hello, my name is ' + this.name+ ' '+hobby+' '+like);
};
let bab2 = {
    name: 'dhiya',
    sayhi: wish
};
let bab3 = {
    name: 'Jessy'
};
wish()//Hello, my name is undefined
bab2.sayhi()//Hello, my name is dhiya
wish.apply(bab3,['playing','dance'])//Hello, my name is Jessy playing dance

// The bind() method ------creates a new function based on the function on which it is called.
//  Using the bind() method, we can pre-configure this keyword and arguments for the function using the syntax
//const newFunction = oldFunction.bind(thisArg, arg1, ag2, ..., argN)

let baby4 = {
    name: 'Jessy',
}
let babydet = function (age, city) {
    console.log(`${this.name} ${age} ${city}`);

}
babydet(2, 'kadapa')//undefined 2 kadapa
let babydetails = babydet.bind(baby4)
babydetails(2, 'AP')//Jessy 2 AP
let detail = babydetails.bind(baby4, 2, 'plvd')
detail()//Jessy 2 plvd





