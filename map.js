// A Map in JavaScript is a collection of key-value pairs where keys can be any data type. Unlike objects, 
// keys in a Map maintain insertion order.
//  It provides methods to-------- set, get, delete, and iterate over elements
//  efficiently, making it useful for data storage and retrieval tasks.

// new Map( );
// new Map( [iterable_objects] );
// Return type: It returns a new map object.
// Parameters: An array or iterable object.

// //create map
// Passing an Array to new Map()
// Create a Map and use Map.set()

const map1 = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
    ['Tv', 40000],
    ['Mobile', 20000],
    ['wireless', 5000]
])
// console.log('Map1:', map1);
// Map1: Map(6) {
//     1 => 10,
//     2 => 20,
//     3 => 30,
//     'Tv' => 40000,
//     'Mobile' => 20000,
//     'wireless' => 5000
//   }


//Map.set()--- add elements to a Map with the set() method.

map1.set('laptop', 65000)
map1.set('Charger', 400)
// console.log('AddElements: ', map1);
// AddElements:  Map(8) {
//     1 => 10,
//     2 => 20,
//     3 => 30,
//     'Tv' => 40000,
//     'Mobile' => 20000,
//     'wireless' => 5000,
//     'laptop' => 65000,
//     'Charger' => 400
//   }


// //methods of JS
// set(key, value): Adds or updates an element with a specified key and value.
// get(key): Returns the value associated with the specified key.
// has(key): Returns a boolean indicating whether an element with the specified key exists.
// delete(key): Removes the element with the specified key.
// clear(): Removes all elements from the Map.
// size: Returns the number of key-value pairs in the Map.
//forEach()	The map with the given function executes the given function over each key-value pair.
//entries( )	Returning an iterator object which contains all the [key, value] pairs of each element of the map.



map1.set('animal', 'Lion')
map1.set('bird', 'Duck')
    .set('Place', 'Kadapa')
    .set('Movie', 'I')
    .set('Sweet', 'Jangri')
    .set('Like', 'Music')
// console.log(map1);
// Map(14) {
//     1 => 10,
//     2 => 20,
//     3 => 30,
//     'Tv' => 40000,
//     'Mobile' => 20000,
//     'wireless' => 5000,
//     'laptop' => 65000,
//     'Charger' => 400,
//     'animal' => 'Lion',
//     'bird' => 'Duck',
//     'Place' => 'Kadapa',
//     'Movie' => 'I',
//     'Sweet' => 'Jangri',
//     'Like' => 'Music'
//   }

console.log(map1.has('bird'));//true
console.log(map1.get('Like'));//Music
console.log(map1.size);//14
console.log(map1.delete('Sweet'));
console.log(map1.size);//13
// console.log(map1.clear());//Removal of all the elements from a map and making it empty.
// console.log(map1);//Map(0) {}


//------
//forEach()	The map with the given function executes the given function over each key-value pair.

const name = new Map([
    ['n', 'keer'],
    ['city', 'kadapa']
])
function fun(key, values) {
    console.log(values + '=>' + key);
}
name.forEach(fun)
// n=>keer
// city=>kadapa








