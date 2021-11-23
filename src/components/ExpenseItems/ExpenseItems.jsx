import { React, useState } from "react";
import './ExpenseItems.css';
import Card from '../Card/Card';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from '../ExpensesList/ExpensesList';

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
        <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
    );
}

export default ExpenseItems;
