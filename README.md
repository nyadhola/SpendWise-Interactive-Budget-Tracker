
# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is a budgeting application that helps users manage their money by setting a budget, recording expenses, and tracking their remaining balance.

## Improvements Made This Week

- Added a form for setting a monthly budget.
- Added a form for recording expenses.
- Added expense categories.
- Displayed the total budget, total expenses, and remaining balance.
- Added a table showing all expense records.
- Added a delete button for removing expenses.
- Added messages to warn users when they approach or exceed their budget.
- Made the dashboard update automatically after user actions.

## JavaScript Concepts Used

### 1. Conditional Statements

Conditional statements check the user's budget situation.

The application checks whether the user has set a budget, exceeded the budget, used the entire budget, or spent at least 80% of the budget. It displays an appropriate message for each situation.

### 2. Arrays

The `expenses` array stores multiple expense records. Each record contains an expense name, category, and amount.

The `push()` method adds new expenses, while `splice()` removes deleted expenses.

### 3. Loops

`for` loops process the expense array.

One loop calculates the total amount spent. Another loop displays all expense records in the dashboard.

### 4. DOM Manipulation

The Document Object Model (DOM) allows JavaScript to update the webpage.

SpendWise uses `getElementById()` to select elements, `textContent` to display information, and `createElement()` to create table rows and cells.

### 5. Event Handling

The application uses `addEventListener()` to respond to form submissions and button clicks.

When a user sets a budget or adds an expense, JavaScript processes the input and updates the dashboard. Delete buttons remove individual expense records.

### 6. Budget Calculations

The application calculates the total expenses and remaining balance.

Remaining Balance = Total Budget - Total Expenses

The dashboard refreshes whenever an expense is added or deleted, or the budget changes.

## Challenges and Solutions

### Challenge 1: Calculating Total Expenses

Solution: Used a loop to add the amounts of all expense records in the array.

### Challenge 2: Updating the Dashboard

Solution: Created an `updateDashboard()` function that refreshes the totals, expense table, and budget feedback.

### Challenge 3: Handling Invalid Inputs

Solution: Used conditional statements to reject invalid budgets, empty expense names, missing categories, and non-positive expense amounts.

### Challenge 4: Removing Expense Records

Solution: Used the `splice()` array method and refreshed the dashboard after deletion.

## Files Included

- `index.html` - Webpage structure and forms.
- `style.css` - Styling and responsive layout.
- `script.js` - JavaScript logic and interactions.
- `README.md` - Project documentation.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Set a budget.
5. Add expenses and test the dashboard.

## Conclusion

SpendWise demonstrates how JavaScript conditionals, arrays, loops, DOM manipulation, and event listeners work together to create an interactive budgeting application.