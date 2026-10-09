
let budget = 0;

// Store multiple expense records in an array.
let expenses = [];

// Format amounts as Kenyan shillings.
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate total expenses using a loop.
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// Display feedback based on the budget situation.
function updateBudgetMessage(total) {
    const messagePanel = document.getElementById("budget-message");
    const panel = document.querySelector(".message-panel");
    const remaining = budget - total;

    panel.classList.remove("warning", "danger");

    if (budget <= 0) {
        messagePanel.textContent = "Please set a budget to get started.";
    } else if (total > budget) {
        messagePanel.textContent =
            "Warning! You are over budget by " +
            formatMoney(total - budget) + ".";
        panel.classList.add("danger");
    } else if (total === budget) {
        messagePanel.textContent =
            "You have used your entire budget. No balance remains.";
        panel.classList.add("warning");
    } else if (total >= budget * 0.8) {
        messagePanel.textContent =
            "Careful! You have used at least 80% of your budget. " +
            formatMoney(remaining) + " remains.";
        panel.classList.add("warning");
    } else {
        messagePanel.textContent =
            "Good job! You are within budget. " +
            formatMoney(remaining) + " remains.";
    }
}

// Update the dashboard totals and expense records.
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = budget - total;

    document.getElementById("total-budget").textContent =
        formatMoney(budget);

    document.getElementById("total-expenses").textContent =
        formatMoney(total);

    document.getElementById("remaining-balance").textContent =
        formatMoney(remaining);

    document.getElementById("expense-count").textContent =
        expenses.length + (expenses.length === 1 ? " record" : " records");

    displayExpenses();
    updateBudgetMessage(total);
}

// Display all expense records using a loop.
function displayExpenses() {
    const tableBody = document.getElementById("expense-table-body");

    // Clear old rows before drawing the latest records.
    tableBody.replaceChildren();

    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No expenses added yet.";

        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.setAttribute("aria-label", "Delete " + expense.name);

        // Remember which expense this button belongs to.
        deleteButton.addEventListener("click", function () {
            expenses.splice(i, 1);
            updateDashboard();
        });

        actionCell.appendChild(deleteButton);

        row.append(
            nameCell,
            categoryCell,
            amountCell,
            actionCell
        );

        tableBody.appendChild(row);
    }
}

// Handle the budget form.
document.getElementById("budget-form").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const budgetInput = document.getElementById("budget-input");
        const newBudget = Number(budgetInput.value);

        if (!Number.isFinite(newBudget) || newBudget <= 0) {
            alert("Please enter a budget greater than zero.");
            return;
        }

        budget = newBudget;
        updateDashboard();
    }
);

// Handle adding a new expense.
document.getElementById("expense-form").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("expense-name");
        const categoryInput = document.getElementById("expense-category");
        const amountInput = document.getElementById("expense-amount");

        const name = nameInput.value.trim();
        const category = categoryInput.value;
        const amount = Number(amountInput.value);

        if (budget <= 0) {
            alert("Please set your budget before adding expenses.");
            return;
        }

        if (name === "" || category === "") {
            alert("Please enter the expense name and select a category.");
            return;
        }

        if (!Number.isFinite(amount) || amount <= 0) {
            alert("Please enter an expense amount greater than zero.");
            return;
        }

        // Add a new record to the expenses array.
        expenses.push({
            name: name,
            category: category,
            amount: amount
        });

        updateDashboard();

        // Clear the form after a successful addition.
        event.target.reset();
        nameInput.focus();
    }
);

// Display the initial dashboard.
updateDashboard();