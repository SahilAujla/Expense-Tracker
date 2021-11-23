import { React, useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseItems.css';
import Card from '../Card/Card';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const ExpenseItems = ( { expenseList } ) => {

  const [year, setYear] = useState('2021');

  const yearChangeHandler = (enteredYear) => {
    setYear(enteredYear);
  }

  const filteredExpenses = expenseList.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

    return (
      <div>
        <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler}/>
        { filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) }
    </Card>
    </div>
    );
}

export default ExpenseItems;
