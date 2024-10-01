
let expenseform = document.getElementById('expenseform');
let expenselist = document.getElementById('expenselist');
let totalamount = document.getElementById('totalamount');
let filtercategory = document.getElementById('filtercategory');

let expenses = [];

expenseform.addEventListener('submit', (e) => {
    e.preventDefault();
    let expense = document.getElementById('expense').value;
    let eamount = parseFloat(document.getElementById('eamount').value);
    let ecategory = document.getElementById('ecategory').value;
    let edate = document.getElementById('edate').value;

    let newExpense = {
        id: Date.now(),
        expense,
        eamount,
        ecategory,
        edate
    };

    expenses.push(newExpense);
    displayExpenses(expenses);
    updateTotalAmount();
    expenseform.reset(); // Clear the form inputs
});

expenselist.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = parseInt(e.target.dataset.id);
        expenses = expenses.filter(expense => expense.id !== id);
        displayExpenses(expenses);
        updateTotalAmount();
    }
    // Add edit functionality as needed
});

filtercategory.addEventListener("change", (e) => {
    const category = e.target.value;
    if (category === "") {
        displayExpenses(expenses);
    } else {
        const filteredExpenses = expenses.filter(expense => expense.ecategory === category);
        displayExpenses(filteredExpenses);
    }
});

function displayExpenses(expenses) {
    expenselist.innerHTML = "";
    expenses.forEach(expense => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${expense.expense}</td>
            <td>$${expense.eamount.toFixed(2)}</td>
            <td>${expense.ecategory}</td>
            <td>${expense.edate}</td>
            <td>
                <button class="delete-btn" data-id="${expense.id}">Delete</button>
            </td>
        `;
        expenselist.appendChild(row);
    });
}

function updateTotalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.eamount, 0);
    totalamount.textContent = total.toFixed(2);
}
