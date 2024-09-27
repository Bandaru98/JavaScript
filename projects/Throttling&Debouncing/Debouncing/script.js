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
  
  // Debounce function
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // Search function to filter fruits by name
  function searchFruits(query) {
    const result = fruits.filter(fruit => 
      fruit.name.toLowerCase().includes(query.toLowerCase())
    );
    displayResults(result);
  }

  // Function to display search results as h2
  function displayResults(results) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = results.map(fruit => `<h2>${fruit.name}</h2>`).join('');
  }

  // Debounced version of the search function
  const debouncedSearch = debounce(searchFruits, 300);

  // Input event listener for debounced search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });