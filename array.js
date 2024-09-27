// store multiple values in a single array - starts with an index vales starts with 0 1 2 .....

//sort
let array = ['M', 'K', 'A', 'S', 'B']
array.sort()
console.log(array);//[ 'A', 'B', 'K', 'M', 'S' ]

//push
let pusharray = ['M', 'K', 'A', 'S', 'B']
pusharray.push('madhu')
console.log(pusharray);//[ 'M', 'K', 'A', 'S', 'B', 'madhu' ]

//reverse
let revarr = ['M', 'K', 'A', 'S', 'B']
revarr.reverse()
console.log(revarr);//[ 'B', 'S', 'A', 'K', 'M' ]

//pop
let poparr = ['M', 'K', 'A', 'S', 'B']
poparr.pop()
console.log(poparr);//[ 'M', 'K', 'A', 'S' ]

//push
let pusharr = ['M', 'K', 'A', 'S', 'B']
pusharr.push('keer')
console.log(pusharr);//[ 'M', 'K', 'A', 'S', 'B', 'keer' ]

//shift
let sharr = ['M', 'K', 'A', 'S', 'B']
sharr.shift()
console.log(sharr);//[ 'K', 'A', 'S', 'B' ]

//unshift
let unsharr = ['M', 'K', 'A', 'S', 'B']
unsharr.unshift('Keer')
console.log(unsharr);//[ 'Keer', 'M', 'K', 'A', 'S', 'B' ]

//concat
let con = ['add variable values']
let con1 = ['here']
let c = con.concat(con1)
console.log(c);//[ 'add variable values', 'here' ]

//join
let jarr = ['madhu', 100, '@123']
let j = jarr.join(' ')
console.log(j);//madhu 100 @123

//splice
let splarr = ['madhu', 100, '@123']
splarr.splice(0, 1, 'k', 'abc')
console.log(splarr);//[ 'k', 'abc', 100, '@123' ]

//slice
let slarr = ['madhu', 100, '@123', 1, 2, 3, 4, 5]
let a = slarr.slice(1, 5)
console.log(a);//[ 100, '@123', 1, 2 ]

//isarray
let arr = ['madhu', 100, '@123', 1, 2, 3, 4, 5]
let isarr = Array.isArray(arr)
console.log(isarr)//true

//indexof & lastindexof
let indarr = [1, 2, 3, 6, 4, 5, 8, 10, 11, 89, 2, 6, 7]
let inarr = indarr.indexOf(6)
let inarray = indarr.lastIndexOf(6)
console.log(inarr);//3
console.log(inarray);//11

//find
let arrfind = [100, 20, 3, 4, 5, 6, 29, 13, 48, 59, 60, 25, 10, 15, 2, 9, 0, 35]
function fun(no) {
    return no >= 30//100
    // return no<=10//it writes 3
}
let findno = arrfind.find(fun)
console.log(findno);//100----this function writes first greater value it doesnot check the next values

//findindex
let arrfindin = [100, 20, 3, 4, 5, 6, 29, 13, 48, 59, 60, 25, 10, 15, 2, 9, 0, 35]
function fun(no) {
    return no >= 30
}
let findindex = arrfindin.findIndex(fun)
console.log(findno);//100 --- it returns first index number

//some
let arrsome = [100, 20, 3, 4, 5, 6, 29, 13, 48, 59, 60, 25, 10, 15, 2, 9, 0, 35]
let asome = arrsome.some(fun)
function fun(no) {
    return no >= 30
}
console.log(asome);

//foreach--- needs function it takes three parameters value,index & array--executes the value each and every value
let aryeach = [1, 7, 20, 18, 50]
aryeach.forEach((item) => {
    console.log("result: ", item * 10);
})
// result:  10
// result:  70
// result:  200
// result:  180
// result:  500

// ex-2 foreach
let areach = [1, 7, 20, 18, 50]
areach.forEach(abc)

function abc(item) {
    console.log("result: ", item * 10);
}
// result:  10
// result:  70
// result:  200
// result:  180
// result:  500

//filter
let arrfil = [100, 20, 3, 4, 5, 6, 29, 13, 48, 59, 60, 25, 10, 15, 2, 9, 0, 35]
function fun(no) {
    return no >= 50
}
let filteritem = arrfil.filter(fun)
console.log(filteritem);//[ 100, 59, 60 ]

//every
let arrevy = [100, 20, 3, 4, 5, 6, 29, 13, 48, 59, 60, 25, 10, 15, 2, 9, 0, 35]
let aevy = arrevy.every(fun)
function fun(no) {
    return no >= 30
}
console.log(aevy);//false------ every item is greater than 30 then it returns true otherwise returns false

//every ex-2
let arrevyy = [31, 400, 50, 35, 60]
let aevyy = arrevyy.every(fun)
function fun(no) {
    return no >= 30
}
console.log(aevyy);//true

//include
let incluarr = [1, 2, 4, 6, 7, 8, 'm', 'k', 's', 'b']
let incarr = incluarr.includes('k')
console.log(incarr);//true


//fill
let fiarr = [1, 2, 4, 6, 7, 8, 'm', 'k', 's', 'b']
let fillarr = fiarr.fill('madhu')
console.log(fillarr);//['madhu', 'madhu', 'madhu', 'madhu','madhu', 'madhu','madhu', 'madhu','madhu', 'madhu']

//tostring
let strarr = [1, 2, 4, 6, 7, 8, 'm', 'k', 's', 'b']
let starr = strarr.toString()
console.log(starr);//1,2,4,6,7,8,m,k,s,b


//map--3 parameters are value,index,array
let marr = [1, 2, 3, 4, 5, 7, 6]
function fun(x) {
    return x * 10
}
let maparray = marr.map(fun)
console.log(maparray);//[10, 20, 30, 40, 50, 70, 60 ]

//flat
let a1 = [1, [2, 3, [4, 5, 6, [8, 9], 10], 11, 12], 13]
let b = a1.flat(Infinity)//means all brackets remove
let bc = a1.flat(3)//3 means 3 brackets remove i mention 1 1 bracket remove
console.log(b);//[1,  2, 3,  4,  5, 6,  8, 9, 10, 11,  12, 13]
console.log(bc);//[1,  2, 3,  4,  5, 6,  8, 9, 10, 11,  12, 13]

//reduce
let rearray = [{ age: 100 }, { age: 30 }, { age: 50 }, { age: 20 }]
let red = rearray.reduce((acumulator, currentvalue, index) => {
    return acumulator + currentvalue.age
}, 0)
console.log(red);//200

//entries
let entryarr = [1, 2, 3]
let items = entryarr.entries()
for (let x of items) {
    console.log(x);  //[ 0, 1 ] [ 1, 2 ] [ 2, 3 ]
}

//-------------



