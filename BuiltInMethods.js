// // What are built-in methods?
// // A JavaScript method is a property containing a function definition. In other words,
// //  when the data stored on an object is a function we call that a method.

// // To differenciate between properties and methods, we can think of it this way:

// //  A property is what an object has, while a method is what an object does.


// useful methods for Date, Math, String, Array and Object

// Date
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds
// since 1 January 1970 UTC.

//Date() ---represents current date & time---new Date().toString()
//  new Date() ----called as a constructor, returns a new Date object.
//   Date.now() -----Returns the numeric value corresponding to the current time
//    Date.parse() ----date and returns the number of milliseconds

// Math
// Math is a built-in object that has properties and methods for mathematical constants and functions.

//Math.round(num) ----rounded to the closest integer
// Math.floor(num) --- previous integer.
//  Math.ceil(num) ---next integer
//   Math.sqrt(x) & Math.cbrt(x) ---- square root of x and the cube root of x
//    Math.PI ---pi value

// String
// The String object is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form, and JavaScript provides a number of useful string built-in methods.

//string.length()
// string.toUpperCase()
//  string.toLowerCase()
//   string.split(separator, limit)----- (“JavaScript is great”).split(“ “) will return [“JavaScript”, “is”, “great”].
//    string.replace(searchFor, replaceWith)

// Array
// The simplest way to describe Arrays is that they list-like objects. Something super important about arrays is that they are indexed, meaning that you can access specific values by the index or the location they hold in the list.

// array.length
//  array.push() --- add items to the end of an array
//   array.pop() ----Removes the last item of an array.
//    array.forEach() --- Executes the same code for each element of an array.
//     array.map() -----called an array, it takes an argument of a callback function and returns a new array.
//      array.filter() -----Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array


// Objects
// It is a bit funny to say that we can use built-in methods for Object objects, but hey I did not make the rules. We can also take advantage of built-in methods for Objects. Objects are used to store various keyed collections, or key and value pairs.

//Object.keys(obj) ----keys
// Object.values(obj)  ----values
//  Object.entries(obj) ---both key & value
//   Object.fromEntries(arr) ---Returns the new object.

// Looping Through Objects ----iterating thorough Arrays with .forEach(), for...in will execute a given block of code for each property in an object.

//------------
//other methods-------------------


// The term "global objects" (or standard built-in objects) here is not to be confused with the global object.
// Here, "global objects" refer to objects in the global scope.

// The global object itself can be accessed using the this operator in the global scope. In fact,
// the global scope consists of the properties of the global object, including inherited properties, if any.

// Other objects in the global scope are either created by the user script or provided by the host application.
// The host objects available in browser contexts are documented in the API reference.


// Standard objects by category---------------

// Value properties-----------
// These global properties return a simple value. They have no properties or methods.
// globalThis, Infinity, NaN, undefined

// Function properties--------------
// These global functions—functions which are called globally,rather than on an object—directly return their results to the caller.

// eval()
// isFinite()
// isNaN()
// parseFloat()
// parseInt()
// decodeURI()
// decodeURIComponent()
// encodeURI()
// encodeURIComponent()
// escape() Deprecated
// unescape() Deprecated

// Fundamental objects------------
// These objects represent fundamental language constructs.

// Object
// Function
// Boolean
// Symbol

// Error objects------------------
// Error objects are a special type of fundamental object.They include the basic Error type, as well as several specialized error types.

// Error
// AggregateError
// EvalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError
// InternalError Non-standard

// Numbers and dates--------------------
// These are the base objects representing numbers, dates, and mathematical calculations.

// Number
// BigInt
// Math
// Date

// Text processing---------------------
// These objects represent strings and support manipulating them.

// String
// RegExp

// Indexed collections------------------------
// These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

// Array
// Int8Array
// Uint8Array
// Uint8ClampedArray
// Int16Array
// Uint16Array
// Int32Array
// Uint32Array
// BigInt64Array
// BigUint64Array
// Float16Array
// Float32Array
// Float64Array

// Keyed collections--------------------
// These objects represent collections which use keys. The iterable collections (Map and Set)
//  contain elements which are easily iterated in the order of insertion.

// Map
// Set
// WeakMap
// WeakSet

// Structured data-----------------------
// These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

// ArrayBuffer
// SharedArrayBuffer
// DataView
// Atomics
// JSON

// Managing memory------------------
// These objects interact with the garbage collection mechanism.

// WeakRef
// FinalizationRegistry

// Control abstraction objects-------------------
// Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).

// Iterator
// AsyncIterator
// Promise
// GeneratorFunction
// AsyncGeneratorFunction
// Generator
// AsyncGenerator
// AsyncFunction
// Reflection
// Reflect
// Proxy

// Internationalization-------------------------
// Additions to the ECMAScript core for language-sensitive functionalities.

// Intl
// Intl.Collator
// Intl.DateTimeFormat
// Intl.DisplayNames
// Intl.DurationFormat
// Intl.ListFormat
// Intl.Locale
// Intl.NumberFormat
// Intl.PluralRules
// Intl.RelativeTimeFormat
// Intl.Segmenter