// let ary = new Array(0, 1, 2, 3, 4);
// //ary.push(5)
// //console.log(ary); // [ 0, 1, 2, 3, 4, 5 ]

// ary.pop();
// //console.log(ary); // [ 0, 1, 2, 3 ]

// let ary1 = [0, 1, 2, 3, 4]
// //console.log(ary1); // [0, 1, 2, 3, 4]


// let arySlice = ary1.slice(1, 3) // Slice
// //console.log("Array Slice => ",arySlice); // [1, 2]
// //console.log("Orignal Array after slice => ",ary1); // [0, 1 ,2, 3, 4]

// let arySplice = ary1.splice(1, 3) // Splice 
// //console.log("Array Splice => ",arySplice); // [1, 2, 3]
// //console.log("Orignal Array after splice => ",ary1); // [0, 4]


// let ary2 = [11, 12, 15, 16];
// ary2.splice(2, 0, 13, 14); // Splice
// //console.log(ary2); // [11, 12, 13, 14, 15, 16]



// let aisa = ["India", "Sri Lanka", "Nepal"];
// let africa = ["Kenya", "Namibia", "Zimbabwe"];

// //aisa.push(africa);
// //console.log(aisa); // [ 'India', 'Sri Lanka', 'Nepal', [ 'Kenya', 'Namibia', 'Zimbabwe' ] ]

// let asaf = aisa.concat(africa);
// //console.log(asaf); // [ 'India', 'Sri Lanka', 'Nepal', 'Kenya', 'Namibia', 'Zimbabwe' ]

// let asNaf = [...aisa, ...africa];
// //console.log(asNaf);


// let subAry = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];
// let subAry_new = subAry.flat(Infinity);
// console.log(subAry_new);

// console.log(Array.isArray("Suraj"));
// console.log(Array.from("Suraj"));

// console.log(Array.from({ name: "Suraj" }));


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));


// let array=[1,2,'m','@123',0]
// console.log(array);//literal

// let array1=new Array('mango','apple')
// console.log(array1);//constructor

//sort

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.sort()
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.sort((a,b)=>a-b)
// console.log(ary1);

//push

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.push('zzz')
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.push(100)
// console.log(ary1);

//reverse

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.reverse()
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.reverse()
// console.log(ary1);

//shift

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.shift()
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.shift()
// console.log(ary1);

//unshift

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.unshift('start')
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.unshift(111)
// console.log(ary1);

//pop

// let ary=['abc','def','abd','xyz','klm','pqr','bcd','cha']
// ary.pop()
// console.log(ary);

// let ary1=[10,9,3,2,9,12,25]
// ary1.pop()
// console.log(ary1);

//concat

// let ary=['abc','def','abd','xyz']
// let ary1=['klm','pqr','bcd','cha']
// let array=ary.concat(ary1)
// console.log(array);

// let ary2=[1,2,3]
// let ary3=[100,1000]
// let array1=ary2.concat(ary3)
// console.log(array1);

//slice

// let ary=['abc','def','abd','xyz']
// let ary1=ary.slice(3)
// console.log(ary1);

// let a=[1,2,3,4,5,6]
// let b=a.slice(3)
// console.log(b);

//splice

// let a = [1, 2, 3, 4, 5, 6];
// a.splice(3, 0, 'madhu'); // Add 'madhu' at index 3 without removing any element
// console.log(a); // Output: [1, 2, 3, 'madhu', 4, 5, 6]

// let a = [1, 2, 3, 4, 5, 6];
// let b = a.splice(2, 3); // Remove 3 elements starting from index 2
// console.log(b); // Output: [3, 4, 5]
// console.log(a); // Output: [1, 2, 6]

// let a = ['1', 's', 'ff'];
// a.splice(1, 1, 'ccc'); // Remove 1 element at index 1 and add 'ccc'
// console.log(a); // Output: ['1', 'ccc', 'ff']

//join

// let a = [1, 2, 3, 4, 5, 6];
// let b=a.join('')
// console.log(b);
// let c=a.join(' ')
// console.log(c);

//isArray

// let a = [1, 2, 3, 4, 5, 6];
// let b=Array.isArray(a)
// console.log(b);





