import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };
   
    props.onSaveExpenseData(expenseData);
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={titleEntered}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={amountEntered}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={dateEntered}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
