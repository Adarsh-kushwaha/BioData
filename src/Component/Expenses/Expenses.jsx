import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="warning">No Expenses Found</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedDefaultYear={filteredYear}
          onSelectingYear={filteredYearHandler}
        />
        <ExpenseChart expenses={filteredExpense}/>
        {expensesContent}
        
      </Card>
    </div>
  );
}

export default Expenses;
