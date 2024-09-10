// Promise 
let prom = new Promise(function (res, rej) {
    if (1) {
        res("Successful");
    } else {
        rej("Failed");
    }
})
let onfullfilment = (result) => {
    console.log(result);
}
let onreject = (error) => {
    console.log(error);
}
prom.then(onfullfilment);
prom.catch(onreject);


// Generator Function 

function* fun() {
    console.log("First Message");
    yield 'Yied No 1';
    console.log("Second Message");
    yield 'Yied No 2';
    console.log("Third MEssage");
    yield 'Yied No 3';
}
let gen = fun();
console.log(gen.next());

// -----

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

const promiseOne = new Promise(function (resolve, reject) {
    // Do async task
    // DB Call, Network, cryptograph
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promised Consumed");
})

// ---

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task2 is complete");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async Task2 resolve");
})

// ----

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "madhu", email: "keer6@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


// ----

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Keer", email: "keer6@gmail.com" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {  // first then return value is recive by second than
    console.log(username);
}).catch((Error) => {
    console.log(Error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


// ---

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "keerna", password: 123456789 })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// ----Problem---- 

console.log("Start");
function getName(name) {
    setTimeout(() => {
        console.log("Inside SetTimeOut");
        console.log(name);
    }, 2000);
}
const name1 = getName("Keer");
console.log(name1);
console.log("End");

//----Solution---- .....with  callback funtion (construction function)

console.log("Start");
function getName(name, cb) {
    setTimeout(() => {
        console.log("Inside SetTimeOut");
        cb(name);
    }, 2000);
}
getName("Keerna", (name1) => { console.log(name1) });
console.log("End");


// ---

console.log("Start");
function getName(name, cb) {
    setTimeout(() => {
        console.log("Inside Name SetTimeOut");
        cb(name);
    }, 2000);
}
function getHobbies(name, cb) {
    setTimeout(() => {
        console.log("Inside Hobbies SetTimeOut");
        cb(["music", "news", "cleaning"]);
    }, 1000)
}
getName("Keerna", (nm) => { console.log(nm), getHobbies(nm, (hobby) => { console.log(hobby) }) });
console.log("End");


// with Promise 
let promi = new Promise((res, rej) => {
    let x = true;
    if (!x) {
        res("Solved");
    } else {
        rej("Reject");
    }
}).then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
}).finally(() => {
    console.log("Cleaned");
})

// another way to promise produce

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Name SetTimeOut");
            resolve(name);
        }, 2000);
    })
}
function getHobbies(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Hobbies SetTimeOut");
            resolve(["music", "news", "cleaning"]);
        }, 1000)
    })
}

// promise consume

getName("Keer")
    .then((nm) => getHobbies(nm))
    .then((hobby) => console.log(hobby))


// another way to consume promise 

async function showHobbies() {
    let nm = await getName("Suraj")
    let hobby = await getHobbies(nm);
    console.log(hobby);
}

// (async and awit) consume promise with error handling 

async function showHobbies() {
    try {
        let nm = await getName("Suraj")
        let hobby = await getHobbies(nm);
        console.log(hobby);
    } catch {
        console.log("Something wrong");
    }
}

showHobbies();
