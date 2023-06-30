import { useState } from "react";
import Card from "../UI/Card"; 
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses({expenses, deleteExpenseHandler}) {

    const [newFilter, setNewFilter] = useState('2019');

    const newFilterHandler = (newYear) => {
        setNewFilter(newYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === newFilter;
    })

    return (
        <div>
            <Card className="expenses">
                {/* using 2-way binding with "selected={newFilter}"
                we created a controlled component */}
                <ExpensesFilter selected={newFilter} onNewFilter={newFilterHandler}/>
                {/* {expensesContent}  */}
                <ExpensesList filteredExpenses={filteredExpenses} deleteExpenseHandler={deleteExpenseHandler}/>
            </Card>
        </div>
    );
}

export default Expenses;


// import { useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/posts";
// const [data, setData] = useState([]);

// const fetchInfo = () => {
//     return fetch(url)
//     .then((res) => res.json())
//     .then((d) => setData(d))
// }


// useEffect(() => {
//     fetchInfo();
// }, []);






// <Card className="expenses">
//     {data.map(({id, title, body}) => {
//         return (
//             <ExpenseItem 
//                 key={id}
//                 title={title} 
//                 amount={241.22}
//                 date={new Date()}
//             />
//         );
//     })}
// </Card>