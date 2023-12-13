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

      <div className="income-container">
        <div className="income-title">Expenses</div>
        <ExpenseForm/>
      </div>
      <div className='income-title'>
        <div className='income-total'>Total Expenses:<span>${totalExpenses()}</span></div>
          <div className="incomes">
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