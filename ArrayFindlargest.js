// 1. Using Brute force Approach
// 2. Using Math.max() and apply() Methods
// 3. Using reduce() Method
// 4. Using sort() Method
// 5. Using Recursion
// 6. Using the forEach Method
// 7. Using the Spread Operator
// 8. Using Array.prototype.every Method

// 1. Using Brute force Approach----------
function largest(arr) {
    let i;
    let max = arr[0]// maximum in arr[] of size n
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
    }
    return max
}
let arr = [100, 29, 30, 50]
console.log(largest(arr));
//or
console.log(largest([100, 29, 30, 50]));

// 2. Using Math.max() and apply() Methods-------------
function lar(arr1) {
    if (arr.length === 0) {
        console.log('Array is empty');
    } else {
        return Math.max.apply(null, arr1)
    }
}
console.log(lar([10, 29, 30, 50]));

// 3. Using reduce() Method---------------
function lar(arr2) {
    if (arr2.length === 0) {
        console.log('Array is empty');
    } else {
        return arr2.reduce((a, c) => (a > c) ? a : c)
    }
}
let arr2 = [10, 29, 30, 50]
console.log(lar(arr2));

// 4. Using sort() Method------------
function lar1(arr3) {
    if (arr3.length === 0) {
        console.log('Array is empty');
    } else {
        arr3.sort((a, b) => b - a)
        return arr3[0]
    }
}
let arr3 = [10, 29, 30, 50]
console.log(lar1(arr3));

// 5. Using Recursion-----------
function lar2(arr4, n, i) {  // in arr[] of size n, last index
    if (i == n - 1) {
        return arr4[i];
    }
    let recMax = lar2(arr4, n, i + 1);
    return Math.max(recMax, arr4[i]);
}
const arr4 = [22, 65, 1, 39];
const n = arr4.length;
console.log(lar2(arr4, n, 0));

// 6. Using the forEach Method------------
function lar3(arr5) {
    let max = arr[0]
    arr5.forEach(element => {
        if (element > max) {
            max = element
        }
    });
    return max
}
console.log(lar3([22, 65, 1, 39]));

// 7. Using the Spread Operator--------------
function lar3(arr6) {
    if (arr6.length === 0) {
        console.log('Array is empty');
    }
    return Math.max(...arr6)
}
console.log(lar3([22, 75, 1, 39]));

// 8. Using the filter----------
function lar1(arr7) {
    let max = arr7[0]
    if (arr7.length === 0) {
        console.log('Array is empty');
    }
    arr7.filter(n => {
        if (n > max) {
            max = n
        }
    })
    return max
}
console.log(lar1([10, 29, 30, 50]));

// 9. Using Array.prototype.every Method------------
function lar4(arr8) {
    let max = arr8[0]
    arr8.every(n => {
        if (n > max) {
            max = n
        }
        return true//continue checking all elements
    })
    return max
}
console.log(lar4([10, 100, 30, 50]));

