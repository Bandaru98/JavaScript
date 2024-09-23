//  **Object.seal example:**

// When using `Object.seal()` on an object, it prevents new properties from being added or existing properties 
// from being deleted. However, you can still modify the values of existing properties.
// `delete` operation is not allowed on a sealed object, the `age` property will still be part of the object.
const user = {
    a: 'xyz',
    b: 'abc',
    age: 30
}
Object.seal(user)
console.log(user);//{ a: 'xyz', b: 'abc', age: 30 }
delete user.age
console.log(user);//{ a: 'xyz', b: 'abc', age: 30 }

// 2. **Multiply each number in an array by 3:**

let array = [1, 2, 3, 4, 5]
let ar = array.map(num => num * 3)
console.log(ar);//[ 3, 6, 9, 12, 15 ]

// 3. **Call the given promise function and handle the result:**

// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         reject('loaded successfully')
//     })
// }
// f1().then(result => console.log(result))
//     .catch(error => console.log(error))//loaded successfully


//4. **How do you create an array in JavaScript?**
//array literal
let arr = [1, 2, 3]
console.log(arr);//[ 1, 2, 3 ]
//array constructor
let arr1 = new Array(1, 2, 3, 4);
console.log(arr1);//[ 1, 2, 3, 4 ]

// 5.**What is a Callback in JavaScript?**

// function f2(Callback) {
//     setTimeout(() => {
//         Callback('using argument as function')
//     }, 1000)
// }
// f2((getdata) => {
//     console.log(getdata);//using argument as function
// })


//6. **What are Closures in JavaScript?**
function outervariable() {
    let outervar = 'closure retaine get access from outervariables even after fun execution'
    return function innervariable() {
        console.log(outervar)
    }
}
let closure = outervariable()
closure()//closure retaine get access from outervariables even after fun execution

//7.**What are the four basic principles of OOPS?**---encapsulation, abstraction, inheritence, polymorphism
//encapsulation---group of method and properties in single unit
class userdata1 {
    constructor(name) {
        this.name = name
    }
    getdata() {
        return `His name is ${this.name}`
    }
}
let d1 = new userdata1('xyz')
console.log(d1.getdata());//His name is xyz
//abstraction--hiding complex data 
class userdata2 extends userdata1 {
    constructor(name, from) {
        super(name)
        this.from = from
    }
    getfrom() {
        return `and he is from ${this.from}`
    }
}
let d2 = new userdata2('xyz', 'Kadapa')
console.log(d2.getfrom());//and he is from Kadapa
// inheritance: 
let d3 = new userdata2('xyzz', 'ap')
console.log(d2.getfrom());//and he is from ap
//polymorphism---- Ability to override the parent class method
class userdata3 extends userdata2 {
    constructor(name, from, city) {
        super(name, from)
        this.city = city
    }
    getdata() {
        return `His name is ${this.name} and he is from ${this.from} and he stays in ${this.city}`
    }
}
let d4 = new userdata3('xyz', 'Kadapa', 'banglore')
console.log(d4.getdata());//His name is xyz and he is from Kadapa and he stays in banglore