// Using JavaScript array() constructor
// Using apply() and map() Methods
// Using JavaScript Array.from() Method
// Using for loop
// Using the spread syntax with Array.fill()
// Using the Array.prototype.keys() Method

// Using JavaScript array() constructor----
let array = new Array()
console.log(array.length);//0
console.log(array);//[]

// Using apply() and map() Methods-------
let arr = Array.apply(null, Array(3)).map(function () { })
console.log(arr.length);//3
console.log(arr);//[ undefined, undefined, undefined ]
//ex
let arr1 = Array.apply(null, Array(3)).map(function (x, i) { return i })
console.log(arr1.length);//3
console.log(arr1);//[ 0, 1, 2 ]

// Using JavaScript Array.from() Method------------
let arr2 = Array.from(Array(5))
console.log(arr2.length);//5
console.log(arr2);//[ undefined, undefined, undefined, undefined, undefined ]
//ex
let arr3 = Array.from('Javascript')
console.log(arr3.length);//10
console.log(arr3);//[ 'J', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']
//ex
let arr4 = Array.from('Java'.repeat(3))
console.log(arr4.length);//12
console.log(arr4);//['J', 'a', 'v', 'a','J', 'a', 'v', 'a', 'J', 'a', 'v', 'a']
//ex
let arr5 = Array.from({ length: 4 }, (x, i) => i)
console.log(arr5.length);//4
console.log(arr5);//[ 0, 1, 2, 3 ]

// Using for loop---------------
let size = 3;
let arr6 = []
for (i = 0; i < size; i++) {
    arr6.push('k')
}
console.log(arr6);//[ 'k', 'k', 'k' ]

// Using the spread syntax with Array.fill()----------------
let size1 = 5
let arr7 = [...Array(size1).fill(1)]
console.log(arr7.length);//5
console.log(arr7);//[ 1, 1, 1, 1, 1 ]

// Using the Array.prototype.keys() Method-----------
let size2 = 10
let arr8 = Array.from(Array(size2).keys())
console.log(arr8.length);//10
console.log(arr8);//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]