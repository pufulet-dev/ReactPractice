import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({filteredExpenses, deleteExpenseHandler}) {

    let expensesContent = <h2 className="expenses-list__fallback">Found no expenses.</h2>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(({id, title, amount, date}, index) => (
            <ExpenseItem 
                key={id}
                title={title} 
                amount={amount}
                date={date}
                id={id}
                deleteExpenseHandler={deleteExpenseHandler}
            />
        ))
    }

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;