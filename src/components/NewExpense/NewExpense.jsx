import { React, useState } from "react";
import './NewExpense.css';
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
    const[isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditings = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}> Add New Expense </button>}
            {isEditing && <ExpenseForm stopEditing={stopEditings} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
};

export default NewExpense;
