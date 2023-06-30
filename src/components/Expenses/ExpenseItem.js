import React, { useState } from 'react';
// '' vs "" (?)

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({title, date, amount, id, index, deleteExpenseHandler}) {

    // const [value, setValue] = useState('');
    // console.log(value);

    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description" onClick={() => {deleteExpenseHandler(id)}}> 
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* clickHandler VS clickHandler() */}
            </Card>
        </li>
    );
}

export default ExpenseItem;

// console.log("let's");
// console.log('let\'s');
// ``