// Using square bracket notation
// Using loop(for or forEach or for…of) Method
// Using map() Method
// Using find() Method
// Using Destructuring Assignment
// Using filter Method

// Using square bracket notation----------
let array = [1, 2, 3, 4, 5]
let a = array[2]
console.log(a);//3

// Using loop(for or forEach or for…of) Method--------
let array1 = [1, 2, 3, 4, 5]
array.forEach((element, index) => {
    console.log('Index value is ' + `${index} ${element}`);
});
// Index value is 0 1
// Index value is 1 2
// Index value is 2 3
// Index value is 3 4
// Index value is 4 5

// Using Map Method--------
let array2 = [1, 2, 3, 4, 5, 6]
let a2 = array2.map((element, index) => {
    return ` ${index}: ${element}`;
});
console.log(a2);//[ ' 0: 1', ' 1: 2', ' 2: 3', ' 3: 4', ' 4: 5', ' 5: 6' ]

// Using find() Method--------
let array3 = [1, 2, 3, 4, 5, 6]
let a3 = array3.find((element, index) => element > 3);
console.log(a3);//4

// Using filter() Method--------
let array4 = [1, 2, 3, 4, 5, 6]
let a4 = array4.filter((element, index) => element > 3);
console.log(a4);//[ 4, 5, 6 ]

// Using Destructuring Assignment-------
let [fname, lname, city] = ['Jessy', 'Dhiya', 'kadapa']
console.log(fname);//Jessy
console.log(city);//kadapa


//-------------
// //move all zeroes at the end of array  -----------------
function pushZerosToEnd(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i];
    while (count < n)
        arr[count++] = 0;
}
let arr = [0, 1, 0, 3, 40, 0, 50, 0, 100];
let n = arr.length;
pushZerosToEnd(arr, n);
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");  // 1 3 40 50 100 0 0 0 0

//rotated array--------------------------
function rotate(array) {
    let temp = array[0]
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = temp;
    return array
}
console.log(rotate([1, 2, 3, 4, 5]));//[ 2, 3, 4, 5, 1 ]


