import React, { useEffect } from 'react'
import "./dashboard.scss"
import { Chart } from '../Chart/Chart'
import {iconDollar} from "./../../utils/icons"
import { useGlobalContext } from '../../context/globalContext'
import { History } from '../../History/History'

function Dashboard() {
  const {totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses} = useGlobalContext();

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <div className="dashboard">
      <div className="dashboard__title">Dashboard</div>
      <div className="dashboard-stat">
        <Chart />
      </div>
      <div className='dashboard-info-income'>
        <div className='dashboard-info__total-income'><img className='dashboard-info__icon' src={iconDollar} alt='dollar'/>Total Income: {totalIncome()} </div>
      </div>
      <div className='dashboard-info-expenses'>
      <div className='dashboard-info__total-expenses'><img className='dashboard-info__icon' src={iconDollar} alt='dollar'/>Total Expenses: {totalExpenses()} </div>
      </div>
      <div className='dashboard-info-balance'>
      <div className='dashboard-info__total-balance'><img className='dashboard-info__icon' src={iconDollar} alt='dollar'/>Total Balance: {totalBalance()} </div>
      </div>
      <div className='dashboard-info__history'>
        <History />
      </div>
    </div>
  )
}

export {Dashboard}