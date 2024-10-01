
// let fruit=['apple','banana','guava']
// console.log(/apple/.test(fruit));//true----test refers whether its available or not-----true or false
// console.log(/Apple/.test(fruit));//false 
// console.log(/Apple/i.test(fruit));//true----i is incasesensitive


// let info = 'My name is Jeslyn'
// console.log(/is/.test(info));//true
// //match method return array with index array values
// console.log(info.match(/is/));//[ 'is', index: 8, input: 'My name is Jeslyn', groups: undefined ]


// let user = 'My name is Jeslyn & my city name is kadapa'
// // console.log(user.match(/is/));//[ 'is', index: 8, input: 'My name is Jeslyn & my city name is kadapa', groups: undefined ]
// // // g means global -it takes wherever the value it shows
//  console.log(user.match(/is/g));//[ 'is', 'is' ]
//  console.log(user.match(/Is/g));//null ----------------------g
//  console.log(user.match(/Is/ig));//[ 'is', 'is' ]-----------------ig


// let fruits3='banana-2dozen, mango-2kg, egg-3piece'
// console.log(/\d/.test(fruits3));//true
// console.log(fruits3.match(/\d/));//['2',index: 7, input: 'banana-2dozen, mango-2kg, egg-3piece',groups: undefined ]
// console.log(fruits3.match(/\d/g));//[ '2', '2', '3' ]


// [pbh] it is a p latter b latter and h  latter----
//  pbh it pbh word------

// let city='Kadapa is better than bng'
// console.log(/^k/i.test(city));//true
// console.log(/^is/.test(city));//false
// console.log(/ng$/.test(city));//true

// console.log(city.match(/[n]/g));//[ 'n', 'n' ]-------------without g takes first value



// let username='madhavi5'
// console.log(/[0-9]/.test(username));//treat as digit number--------[0-9] or/\/d are same
// console.log(/\d/.test(username));//treat as digit number

// console.log(/d/.test(username));//treats as word


// let username = 'Madhavi78'
// if(/\d/.test(username)){
//     console.log('user by mistake put number(s)');
// }else{
//     console.log('user name is correct');
// }


// let x = 560067
// console.log(/[5-6]{2}[0-9]{4}/.test(x));


// let y=1234567890
// console.log(/[0-2]{1}[0-9]{9}/.test(y));


// let bikeReg = '8bng4567'
// console.log(/^[a-z]{3}[0-9]{4}/.test(bikeReg));


// let fruits='apple, banana, orange'
// let fru = fruits.replace('apple','fru')
// console.log(fru);


// let username='    Jeslyn'
// console.log(username.trim());

























