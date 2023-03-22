import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 100).toString()
        };
        props.onAddExpense(expenseData)
    };

    return (
        <div className="new-expense">
           <ExpenseForm 
                onSaveExpenseData={onSaveExpenseDataHandler}
           /> 
        </div>
    )
}

export default NewExpense;