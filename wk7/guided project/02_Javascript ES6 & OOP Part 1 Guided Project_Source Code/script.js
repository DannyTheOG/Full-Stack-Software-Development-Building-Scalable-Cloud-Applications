function initialise() {
    setDropdownCategories()
    setExpenseCategories( )
    displaySummary() 
}


const dropdownCategories = {
    Groceries: 100,
    Entertainment: 100,
    Utilities: 100,
    Health: 100,
    Education: 100,
    Miscellaneous: 50
}

const expenseCategories = {}

// accept expense category, expense description and amount
let categories = document.getElementById( "category" );

let description = document.getElementById( "description" );

let amount = document.getElementById( "amount" );

let addButton = document.getElementById( "add-transaction-btn" );
addButton.addEventListener( "click", () => {
    let expense = {
        category: categories.value,
        description: description.value,
        amount: parseFloat( amount.value ).toFixed( 2 )
    }

    if( description.value && amount.value )
        addExpense( expense );
} )


function setDropdownCategories() {
    let selectOption = document.createElement( "option" );
    selectOption.setAttribute( "selected", "" )
    selectOption.setAttribute( "disabled", "" );
    selectOption.innerText = "Select a category";

    categories.appendChild( selectOption );

    for ( const category in dropdownCategories ) {
        let option = `<option value = ${category}> ${category}</option>`;

        categories.innerHTML += option;
    }
}


function setExpenseCategories() {
    for (const category in dropdownCategories) {
        expenseCategories[category] = 0
    }
}

// accept user income
let income = 0;
let totalExpense = 0;

let incomeInput = document.getElementById( "income" );
incomeInput.addEventListener( "input", ( event ) => {
    setIncome( event.target.value );
} );

function setIncome( value = 0 ) {
    income = parseFloat( value );
    displaySummary()
}



// display a list of all expense transactions ( expense, description and amount )
let transactions = document.getElementById( "transactions" );
let transactionList = []


function addExpense( expense ) {
    transactionList.push( expense )
   
    let {category, description, amount} = expense;
    console.log( amount )
    
    let transaction = document.createElement( "li" )
    transaction.textContent = `${category} - ${description} - ${amount}` 
    
    totalExpense += amount;
    displayTransaction( transaction )
  
    expenseCategories[category] += amount;
    displaySummary() 
}


function displayTransaction( transaction ) {
    transactions.appendChild( transaction )

    // clear fields
    // categories.value = ""
    description.value= ""
    amount.value = ""
}


// calculate and display summary
function displaySummary() {
    let totalIncome = document.getElementById( "total-income" );
    totalIncome.innerHTML = `
    <b>Total Income: $${income}</b>
    `;

    let budgetSummary = document.getElementById( "budget-summary" );
    let budgetSummaryHTML = "";

    for (const category in expenseCategories) {
        const categoryBalance = dropdownCategories[category] - expenseCategories[category];

        let indicator =  categoryBalance > 0 ? "" : "red";

        budgetSummaryHTML += `
            <ul>
                <b>${category}</b>
                <li>Budget: $${dropdownCategories[category]}</li>
                <li>Expense: $${expenseCategories[category]}</li>
                <li style = "color: ${indicator}">Balance: $${categoryBalance}</li>
            </ul>
        `
        
    }

    budgetSummary.innerHTML = budgetSummaryHTML;

    setBalance();
}

function setBalance() {
    let balance = document.getElementById( "balance" );
    let balanceValue = income - totalExpense;
    balance.style.color = balanceValue > 0 ? "green" : "red";
    balance.innerHTML = `
    <b>Balance: $${balanceValue}</b>
    `;
}