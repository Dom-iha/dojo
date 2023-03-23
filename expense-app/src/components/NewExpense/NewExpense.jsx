import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.floor(Math.random() * 100).toString(),
      };
      props.onAddExpense(expenseData);
      setIsEditing(false);
   };

   const [isEditing, setIsEditing] = useState(false);
   const expandForm = () => {
      setIsEditing(true);
   };
   const minimizeForm = () => {
      setIsEditing(false);
   };

   return (
      <div className='new-expense'>
         {isEditing ? (
            <ExpenseForm
               minimizeForm={minimizeForm}
               onSaveExpenseData={onSaveExpenseDataHandler}
            />
         ) : (
            <button onClick={expandForm}>Add New Expense</button>
         )}
      </div>
   );
};

export default NewExpense;
