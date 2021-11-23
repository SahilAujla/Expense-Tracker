import { React, useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, stopEditing }) => {

    const [enteredTitle, setTitle] = useState("");
    const [enteredAmount, setAmount] = useState("");
    const [enteredDate, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        setTitle('');
        setAmount('');
        setDate('');

        onSaveExpenseData(expenseData);
    }

    return (
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" max="7000" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2025-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={stopEditing} type="button">Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
