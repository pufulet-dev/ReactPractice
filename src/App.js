import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  { id: 0, title: 'New TV', amount: 2124.07, date: new Date(2019, 6, 21)},
  { id: 1, title: 'Cat Food', amount: 102.67, date: new Date(2019, 2, 28)},
  { id: 2, title: 'Car Insurance', amount: 294.677, date: new Date(2019, 3, 9)},
  { id: 3, title: 'New Washing Machine', amount: 3369.69, date: new Date(2019, 10, 18)},
  { id: 4, title: 'Other Stuff', amount: 294.677, date: new Date(2019, 4, 9)},
];

function App() {
  //put expenses in useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);
    //correct
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  const deleteExpenseHandler = (id) => {
    setExpenses(prevExpenses => {
      //correct
      return prevExpenses.filter(item => item.id !== id )    
    });
  } 
  //re-render
  console.log(expenses);

  return (
    <div className="App">
      <h3>List of Expenses</h3>
      {/* "onAddExpense={}" is a pointer --> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} deleteExpenseHandler={deleteExpenseHandler}/>
    </div>
  );
}

export default App;   