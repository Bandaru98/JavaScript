//Removing Duplicate items in array----------

// Finding duplicate elements in an array means identifying and listing any values that appear more than once within the 
// array, helping to detect and manage redundant data or repeated elements within a collection of items.

// Using Nested For In Loop
// Using Sort() Method
// Using filter() Method
// Using a Single Loop
// Using a Set
// Using Reduce Method
// Using Map to Track Frequencies

//// Using Nested For In Loop------
let arr = [100, 2, 2, 1, 8, 1, 10, 10, 4, 5, 6, 6, 3, 7, 8, 7, 9, 10]
let duplicatearray = (inputarray) => {
    let dupelements = []
    for (let n1 in inputarray) {
        for (let n2 in inputarray) {
            if (n1 === n2) {
                continue
            } else {
                if (inputarray[n1] === inputarray[n2]) {
                    dupelements.push(inputarray[n1])
                }
            }
        }
    }
    return [...new Set(dupelements)]
}
console.log(duplicatearray(arr));

//using sort() method---------

let array = [0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 8, 15, 0, 10]
let duplicate = (input) => {
    input = input.sort((a, b) => a - b)
    let dup = []
    for (i in input) {
        if (input[i] === input[i - 1]) {
            dup.push(input[i])
        }
    }
    return [...new Set(dup)]
}
console.log(duplicate(array));

//Using filter() Method------------
let array1 = [0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 8, 15, 0, 10]
let duparr = (input) => {
    let dup = input.filter((item, index) => input.indexOf(item) !== index)
    return Array.from(new Set(dup))
}
console.log(duparr(array1));

// Using a Single Loop-----------
let array2 = [0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 8, 15, 0, 10]
let duparr2 = (input) => {
    let dup = []
    for (element of input) {
        if (input.indexOf(element) !== input.lastIndexOf(element)) {
            dup.push(element)
        }
    }
    return [...new Set(dup)]
}
console.log(duparr2(array2));

// Using a Set----------
let array3 = [100, 2, 2, 1, 8, 1, 10, 10, 4, 5, 6, 6, 3, 7, 8, 7, 9, 10]
let duparray3 = (input) => {
    let unique = new Set()
    let dup = []
    for (i = 0; i < input.length; i++) {
        if (unique.has(input[i])) {
            dup.push(input[i])
        }
        unique.add(input[i])
    }
    return Array.from(new Set(dup))
}
console.log(duparray3(array3));

// Using Reduce Method---------------
let array4 = [100, 2, 2, 1, 8, 1, 10, 10, 4, 5, 6, 6, 3, 7, 8, 7, 9, 10]
let duparr4 = (input) => {
    input = input.sort((a, b) => a - b)
    return input.reduce((accudup, cur, index) => {
        if (input[index] === input[index - 1]) {
            accudup.push(cur)
        }
        return Array.from(new Set(accudup))
    }, [])
}
console.log(duparr4(array4));

// Using Map to Track Frequencies------------
let array5 = [100, 2, 2, 1, 8, 1, 10, 10, 4, 5, 6, 6, 3, 7, 8, 7, 9, 10]
let duparr5 = (input) => {
    let itemmap = new Map()
    let dup = []
    input.forEach((item) => {
        if (itemmap.has(item)) {
            itemmap.set(item, itemmap.get(item) + 1)
        } else {
            itemmap.set(item, 1)
        }
    })

    itemmap.forEach((count, item) => {
        if (count > 1) {
            dup.push(item)
        }
    })
    return dup
}
let duparray = duparr5(array5)
console.log(duparray);

