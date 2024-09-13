// JSON (JavaScript Object Notation)----
// JSON (JavaScript Object Notation)is a handy way to share data. It’s easy for both people and computers to understand. 
// In JavaScript, JSON helps organize data into simple objects. Let’s explore how JSON works and why it’s so useful for
//  exchanging information.

//Json Object has 3 ways--

// Accessing JSON Object Values
// Looping through JSON Object
// Converting a JSON Text to a JavaScript Object

// 1. Accessing JSON Object Values---
// The object values can be accessed by using the dot (“.”) notation.We can also access objects by using bracket([]) notation.

let objjson, i;//here object created as name as objjson
objjson = {
    productname: 'watch',
    price: 8000,
    warranty: '1 year'
}
i = objjson
console.log(i);//{ productname: 'watch', price: 8000, warranty: '1 year' }
//product accessor or access particular data
i = objjson.productname
console.log(i);//watch

i = objjson['price']
console.log(i);//8000



// 2. Looping through JSON Object---
// Looping can be done in two ways:
// Looping of an object can be done by using a property for-in loop.
// For looping an object we can even use brackets (“[]”) in the for-in loop property.

let objjsonloop, a;
objjsonloop = {
    productname: 'headset',
    price: 3000,
    warranty: '1 year'
}
for (a in objjsonloop) {
    console.log(objjsonloop[a]);
}
// headset
// 3000
// 1 year

// 3. Converting a JSON Text to a JavaScript Object---
// To convert a JSON text to a JavaScript object, you can use the JSON.parse() method.


let jsonString = '{"productname": "mobile","price": 25000, "warranty": "1 year"}'
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject);//{ productname: 'mobile', price: 25000, warranty: '1 year' }
//get particular data
console.log(jsonObject['price']);//25000
console.log(jsonObject.productname);//mobile
