
const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
  { id: 9, name: 'Kiwi' },
  { id: 10, name: 'Lemon' }
];

// Throttle function to limit the number of calls to the search function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args); // Run the function immediately if it hasn’t been run yet
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args); // Run after the timeout only if the specified time limit has passed
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Search function to filter fruits by name
function searchFruits(query) {
  const result = fruits.filter(fruit => 
    fruit.name.toLowerCase().includes(query.toLowerCase())
  );
  displayResults(result);
}

// Function to display search results
function displayResults(results) {
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = results.map(fruit => `<h2>${fruit.name}</h2>`).join('');
}

// Throttled version of the search function
const throttledSearch = throttle(searchFruits, 1000); // Throttling to 1 second (1000ms)

// Input event listener for throttled search
document.getElementById('searchInput').addEventListener('input', (e) => {
  throttledSearch(e.target.value);
});
