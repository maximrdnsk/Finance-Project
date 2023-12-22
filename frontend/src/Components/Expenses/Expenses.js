import React, { useEffect } from 'react'
import "./expenses.scss"
import { useGlobalContext } from '../../context/globalContext'
import { ExpenseForm } from "./../Form/ExpeseForm";
import { IncomeItem } from '../IncomeItem/IncomeItem';

function Expenses() {
  const {addIncome, expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext();

  useEffect(() => {
    getExpenses()
  }, [])
  return (
    <div className="income">
      <div className="income__title">Expenses</div>
      <div className="income-container">
        <ExpenseForm/>
        <div className="incomes">
          <div className='income-total'>Total Expenses:<span>${totalExpenses()}</span></div>
            {expenses.map((income)=> {
              const {_id, title, amount, date, category, description, type} = income;
              return <IncomeItem
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              deleteItem={deleteExpense}
              />
            })}
        </div>
      </div>
      </div>
  )
}

export {Expenses}