import React, { useEffect } from 'react'
import "./income.scss"
import { useGlobalContext } from '../../context/globalContext'
import { Form } from "./../Form/Form";
import { IncomeItem } from '../IncomeItem/IncomeItem';

function Income() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext();

  useEffect(() => {
    getIncomes()
  }, [])
  return (
    <div className="income">
      <div className="income__title">Income</div>
      <div className="income-container">
        <Form/>
        <div className="incomes">
          <div className='income-total'>Total Income:<span>${totalIncome()}</span></div>
            {incomes.map((income)=> {
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
              deleteItem={deleteIncome}
              />
            })}
        </div>
      </div>
      </div>
  )
}

export {Income}