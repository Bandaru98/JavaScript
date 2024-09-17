// In JavaScript, a new object called Set was introduced in the ES6 version. The Set object is similar to Map
//  but the major difference is that elements in the set are unique and repeated addition of the same type of elements
//  is not possible. The set can store any type of value whether primitive or objects. The elements of a set are iterable.
//   Elements are always iterated in the insertion order.

let set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);
console.log(set1);//Set(4) { 'sumit', 'amit', 'anil', 'anish' }

let set2 = new Set("fooooooood");
console.log(set2);//{'f', 'o', 'd'}

let set3 = new Set([10, 20, 30, 30, 40, 40]);
console.log(set3);// {10, 20, 30, 40}

let set4 = new Set();
console.log(set4);//{}

//ex
// Create a Set with unique values
const set5 = new Set([1, 10, 20, 30, 'Tv', 'Mobile', 'wireless']);
console.log('Set1:', set5);//Set1: Set(7) { 1, 10, 20, 30, 'Tv', 'Mobile', 'wireless' }

// Adding elements to the Set
set5.add('laptop');
set5.add('Charger');
console.log('AddElements: ', set5);
// AddElements:  Set(9) {
//     1,
//     10,
//     20,
//     30,
//     'Tv',
//     'Mobile',
//     'wireless',
//     'laptop',
//     'Charger'
//   }

// Chaining add operations (This works only if Set is returned by .add(), otherwise you can’t chain)
set5.add('animal').add('bird').add('Place').add('Movie').add('Sweet').add('Like');
console.log(set5);
// Set(15) {
//     1,
//     10,
//     20,
//     30,
//     'Tv',
//     'Mobile',
//     'wireless',
//     'laptop',
//     'Charger',
//     'animal',
//     'bird',
//     'Place',
//     'Movie',
//     'Sweet',
//     'Like'
//   }

// Checking if a value exists in the Set
console.log(set5.has('bird')); // true

// Size of the Set
console.log(set5.size); // 14 (The Set will now have 14 elements)

// Deleting an entry
console.log(set5.delete('Sweet')); // true

// Size after deletion
console.log(set5.size); // 13

// Clearing all entries from the Set
// set5.clear();
// console.log(set5); // Empty set

// Using forEach to iterate through Set elements
set5.forEach(value => {
    console.log(value);
});



// Convert Array to Set in JavaScript
// means transforming an array into a Set object, which stores unique values and automatically removes duplicates. This is done using the new Set(array) constructor. It’s a useful way to clean up arrays and ensure data uniqueness in JavaScript.

// Using spread Operator
// Using the Set Constructor

// Using spread Operator
// Using the Set Constructor

let array = [1, 1, 2, 2, 2, 2, 5, 5, 8]
function dup() {
    let set = new Set(array)
    console.log(JSON.stringify([...set]));
}
dup()//[1,2,5,8]

// Using the Set Constructor
let array1 = [1, 1, 2, 2, 2, 2, 5, 5, 8]
let set = new Set(array1)
let newarray = Array.from(set)
console.log(set);//Set(4) { 1, 2, 5, 8 }
console.log(newarray);//[ 1, 2, 5, 8 ]

//union of two sets---------union set is the combination of two elements
// Using spread Operator
// Using add() Method

// Using spread Operator
let arr1=new Set([1,2,3,4,5])
let arr2=new Set([6,7,8])
let union=new Set([...arr1,...arr2])
console.log(union);//Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// Using add() Method
function unionfun(a1,a2){
let union=new Set(a1)
for(let n of a2){
    union.add(n)
}
return union
}
let a1=new Set([1,2,3])
let a2=new Set([4,5,6])
console.log(unionfun(a1,a2));//Set(6) { 1, 2, 3, 4, 5, 6 }


// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
function f() {
    console.log('Hello');
  } 
  setTimeout(f, 1000);//Hello
//with arguments
function f1(a,b){
    console.log(a+b);
}
setTimeout(f1,1000,10,20)//30
