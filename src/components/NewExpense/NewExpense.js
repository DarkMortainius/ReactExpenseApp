import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

function NewExpense(props)
{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        setIsEditing(false);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const stopEditing = () =>
    {
        setIsEditing(false);
    }

    const startEditing = () =>
    {
        setIsEditing(true);
    }

    if (isEditing)
    {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />
            </div>
        );
    }
    else
    {
        return (
            <div className='new-expense'>
                <button onClick={startEditing}>Add New Expense</button>
            </div>
        );
    }
};

export default NewExpense;