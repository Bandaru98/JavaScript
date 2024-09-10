// 2 types of objects------Constructor & Literal
// Constructor(singleton)---------------Object.create()---const name=user Object()
// Literal ----------const mySym=Symbol('key1')

const user = {
    name: 'Madhu',// key assume as a string - "name"
    'full name': 'madhavi bandaru',
    mySym: 'mykey1',
    age: 26,
    city: 'kadapa',
    email: 'bandaru@6gmail.com',
    isloggedin: false,
    lastlogindays: ['Mon', 'Tues', 'Wednes']
}

// there are two type to access the object

console.log(user.name);
console.log(user['name']);
console.log(user['full name']);
// also change the value
user.name='Keerthi'
console.log(user.name);

// Object.freeze(user);// we can not change the value

user.welcome = function () {
    console.log('Welcome Javascript users');
}

console.log(user.welcome);//[Function (anonymous)]--------pass the function reference to that object
console.log(user.welcome());//function execute---------------undefined
user.welcome()//-------Welcome Javascript users

user.welcome2 = function () {
    console.log('Welcome Javascript user ' + this.name);// this reference to the object
}
user.welcome2()// Welcome Javascript user Madhu-------------


// Object merge or assign-------

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'c',
    4: 'd'
}
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({},obj1,obj2)//Object.assign(target, sources)
// console.log(obj3);
const obj3={...obj1,...obj2}
console.log(obj3);

// Some other Object Properties-----------

const newuser = {
    name: 'madhavi',
    city: 'kadapa',
    email: 'bandaru@6gmail.com'
}
console.log(Object.keys(newuser));//[ 'name', 'city', 'email' ]------return value in arryay data type
console.log(Object.values(newuser));//[ 'madhavi', 'kadapa', 'bandaru@6gmail.com' ]------return array data type
console.log(Object.entries(newuser));//[[ 'name', 'madhavi' ],[ 'city', 'kadapa' ],[ 'email', 'bandaru@6gmail.com' ]]----return key & values
console.log(newuser.hasOwnProperty('city'));//true---------give boolean values


// Object de-structure--------------

const stu={
    name: 'madhavi',
    city: 'kadapa',
    email: 'bandaru@6gmail.com',
    qualification:'B.Tech',
    workexp:'2 Years'
}

const {workexp}=stu
console.log(workexp);//2 Years
const {workexp:exp}=stu
console.log(exp);//2 Years


// Object Descripter -----------------

Math.PI = 5
console.log(Math.PI);//3.141592653589793
const Mathdescriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(Mathdescriptor);//{value: 3.141592653589793, writable: false,enumerable: false, configurable: false }

//------

const mobile = {
    model_No: "SM-Galaxy_M14",
    price: 14000,
    isAvailable: true
}
const mobileDes = Object.getOwnPropertyDescriptor(mobile, "model_No")
console.log(mobileDes);// {value: 'SM-Galaxy_M14',writable: true, enumerable: true,configurable: true}

Object.defineProperty(mobile, "model_No", {writable: false, enumerable: false, })
const mobileDesChange = Object.getOwnPropertyDescriptor(mobile, "model_No")
console.log(mobileDesChange);