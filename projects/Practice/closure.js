// Closures

// Currying 

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
// let data1=add(2);
// let data2=data1(3);
// let data3=data2(4);
let data = add(2)(3)(4);  // value of a retain it call lexical scope 
console.log(data); // Currying

// -----

let userObj = {
    name: "Keerna",
    age: 26
}
function userinfo(obj) {
    return function (info) {
        return obj[info];
    }
}
let res = userinfo(userObj);
console.log(res('name'));

// -----

// Callback Function 

function username() {
    console.log("Keer");
}
function fun(callback) {
    callback();
}
fun(username);

// Callback Function 

function intro(age) {
    console.log("My name is Keer & I'm " + age + " years old");
}
function userinfo(a, cb) {
    cb(a);
}
userinfo(26, intro);


// Memoization 

let sum = 0;
function cal(n) {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const memoize = (fun) => {
    let cache = {};
    return function (...arg) {
        let n = arg[0];
        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            console.log("calculating first time");
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}
console.time();
const eff = memoize(cal);
console.log(eff(5));
console.timeEnd();

