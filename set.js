// In JavaScript, a new object called Set was introduced in the ES6 version. The Set object is similar to Map
//  but the major difference is that elements in the set are unique and repeated addition of the same type of elements
//  is not possible. The set can store any type of value whether primitive or objects. The elements of a set are iterable.
//   Elements are always iterated in the insertion order.


// ["sumit","amit","anil","anish"]
let set1 = new Set(["sumit","sumit","amit","anil","anish"]);
console.log(set1);//Set(4) { 'sumit', 'amit', 'anil', 'anish' }

// it contains 'f', 'o', 'd'
let set2 = new Set("fooooooood");
console.log(set2);

// it contains [10, 20, 30, 40]
let set3 = new Set([10, 20, 30, 30, 40, 40]);

 // it is an  empty set
let set4 = new Set();