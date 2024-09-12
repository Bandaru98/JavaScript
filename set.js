// In JavaScript, a new object called Set was introduced in the ES6 version. The Set object is similar to Map
//  but the major difference is that elements in the set are unique and repeated addition of the same type of elements
//  is not possible. The set can store any type of value whether primitive or objects. The elements of a set are iterable.
//   Elements are always iterated in the insertion order.

let set1 = new Set(["sumit","sumit","amit","anil","anish"]);
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
