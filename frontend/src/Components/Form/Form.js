import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext'
import "./form.scss"

function Form() {
  const {addIncome, getIncomes, error, setError} = useGlobalContext()

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  })

  const {title, amount, date, category, description} = inputState;

  const handleInput = name => e => {
    setInputState({...inputState, [name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    addIncome(inputState)
    getIncomes()
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">New Income</div>
      <div className="input-control">
      <input
      type="text"
      value={title}
      name={'title'}
      placeholder="Salary Title"
      onChange={handleInput('title')}
      />
      </div>
      <div className="input-control">
      <input
      value={amount}
      type="amount"
      name={'amount'}
      placeholder="Salary Amount"
      onChange={handleInput('amount')}
      />
      </div>
      <div className="input-control">
        <DatePicker 
        id='date'
        placeholderText='Enter a date'
        selected={date}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setInputState({...inputState, date:date})}
        />
      </div>
      <div>
        <select required value={category} name="category" id="category" onChange={handleInput("category")}>
          <option value="" disabled>Select option ⇩</option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investment">Investment</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank transfer</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea name="description" value={description} placeholder="Add a Reference" id="description" cols="30" rows="4" onChange={handleInput("description")}></textarea>
      </div>
      <button className="submit-btn">+ Add Income</button>
    </form>
  )
}

export {Form}