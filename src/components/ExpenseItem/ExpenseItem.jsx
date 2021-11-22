import  { React, useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItem = ({ title, amount, date }) => {

    const [displayTitle, setTitle] = useState(title);
    
    const clickHandler = () => {
        setTitle("Updated!");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{ displayTitle }</h2>
                <div className="expense-item__price">${ amount }</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
