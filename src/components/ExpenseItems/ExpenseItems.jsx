import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseItems.css';
import Card from '../Card/Card';

const ExpenseItems = ( { expenseList } ) => {
    return (
        <Card className="expenses">
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
    );
}

export default ExpenseItems;
