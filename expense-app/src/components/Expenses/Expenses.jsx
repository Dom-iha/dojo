
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesLIst";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
   const [filteredYear, setFilteredYear] = useState("2020");

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   };

   const filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
   );

   return (
      <Card className='expenses'>
         <ExpensesFilter
            selected={filteredYear}
            onFilterChange={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses}/>
      </Card>
   );
}

export default Expenses;
