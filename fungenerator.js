// A generator function uses the yield keyword to generate values, pausing execution and sending values to the caller. 
// It retains the state to resume execution after yield, continuing immediately after the last yield run.

// Generator functions return a generator object.Generator objects are used either by calling the next method on the generator object or using the generator object in a “for of” loop 
// The Generator object is returned by a generating function and it conforms to both the iterable protocol and the iterator protocol.

function* fun() {
    yield 10;
    yield 100;
    yield 200;
}
let gen = fun()
console.log(gen.next().value);//10
console.log(gen.next().value);//100
console.log(gen.next().value);//200


//series of naturalnumbers printing with the help of loop
function* naturalnum() {
    let naturalNumber = 1
    //infinite generation
    while (true) {
        yield naturalNumber++
    }
}
let gene = naturalnum()
for (i = 0; i < 5; i++) {
    console.log(gene.next().value)
}
// 1
// 2
// 3
// 4
// 5


//array creating
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
function* generator(arr) {
    let i = 0;
    while (i < arr.length) {
        yield arr[i++]
    }
}
const it = generator(array);
console.log(it.next().value);//a
console.log(it.next().value);//b
console.log(it.next().value);//c

//ex
const arr = [10, 'name', 'city', 'like', 3, 'rain'];
function* generat() {
    yield 1;
    yield* arr;
    yield 2;
}

for (let value of generat()) {
    console.log(value);
}
//1
// 10
// name
// city
// like
// 3
// rain
// 2

let createiterable = {
    *[Symbol.iterator]() {
        yield 'madhu';
        yield 'keer';
        yield 'b';
    }
}

for (let values of createiterable) {
    console.log(values);
}
// madhu
// keer
// b

//ex
function* firstGenerator() {
    yield 2;
    yield 3;
    yield 4;
}
function* secondGenerator() {
    yield 1;
    yield* firstGenerator();
    yield 5;
}
for (let value of secondGenerator()) {
    console.log(value)
}
// 1
// 2
// 3
// 4
// 5


//ex
function* generator() {
    yield 'a';
    return 'result';
    yield 'b';
}

let genite = generator();
console.log(JSON.stringify(genite.next()));// {value: "a", done: false}
console.log(JSON.stringify(genite.next())); // {value: "result", done: true}