import React, { useEffect } from 'react'
import "./dashboard.scss"
import { Chart } from '../Chart/Chart'
import {IconDollar, IconBank, IconWallet} from "./../../utils/icons"
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
      <div className="dashboard__greeting">Welcome back, User!</div>
      <div className="dashboard-container">
        <div className="dashboard-info-analytics">
          <div className="dashboard-info">
            <div className='dashboard-info-balance'>
              <div className='dashboard-info__total-balance'>Total Balance: <div className='dashboard-info__icon'>{totalBalance()}<IconDollar/></div></div>
            </div>
            <div className='dashboard-info-income'>
              <div className='dashboard-info__total-income'>Total Income:<div className='dashboard-info__icon'>{totalIncome()}<IconBank/></div></div>
            </div>
            <div className='dashboard-info-expenses'>
              <div className='dashboard-info__total-expenses'>Total Expenses: <div className='dashboard-info__icon'>{totalExpenses()}<IconWallet/></div></div>
            </div>
          </div>
          <div className="dashboard-stat">
            <Chart />
          </div>
        </div>
        <History />
      </div>
    </div>
  )
}

export {Dashboard}