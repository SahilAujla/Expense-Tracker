import { React, useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseItems.css';
import Card from '../Card/Card';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const ExpenseItems = ( { expenseList } ) => {

  const [year, setYear] = useState('2021');

  const yearChangeHandler = (enteredYear) => {
    setYear(enteredYear);
    console.log(year);
  }

    return (
      <div>
        <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler}/>
      <ExpenseItem
        title={expenseList[0].title}
        amount={expenseList[0].amount}
        date={expenseList[0].date}
      />
      <ExpenseItem
        title={expenseList[1].title}
        amount={expenseList[1].amount}
        date={expenseList[1].date}
      />
      <ExpenseItem
        title={expenseList[2].title}
        amount={expenseList[2].amount}
        date={expenseList[2].date}
      />
      <ExpenseItem
        title={expenseList[3].title}
        amount={expenseList[3].amount}
        date={expenseList[3].date}
      />
    </Card>
    </div>
    );
}

export default ExpenseItems;
