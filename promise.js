// A promise in JavaScript is like a container for a future value. It is a way of saying,
//  “I don’t have this value right now, but I will have it later.”

//The promise constructor takes only one argument which is a callback function
//callback function takes 2 parameters are resolve & reject

//promise methods are2 types .then() & .catch()

// promise has 3 states
// Pending: The promise is waiting for something to finish. For example, waiting for data to load from a website.
// Fulfilled: The promise has been completed successfully. The data you were waiting for is now available.
// Rejected: The promise has failed. Maybe there was a problem, like the server not responding.

let promise1 = new Promise(function (resolve, reject) {
   const x = 10
   const y = 10
    if (x === y) {
        resolve();
    } else {
        reject();
    }
})
promise1
    .then(function () {
        console.log('data loading');
    })
    .catch(function () {
        console.log('loading error');
    })
    

