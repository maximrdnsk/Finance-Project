import React from 'react'
import { dateFormat } from '../../utils/dateFormat';
import { iconComment,iconDollar, iconCalendar, iconTrash, iconBitcoin, iconBank, iconFreelance, iconCoin, iconTransfer, iconStudy, iconGift, iconGit, iconSteam, iconShop, iconPhone, iconWifi} from '../../utils/icons';
import "./incomeItem.scss"


function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type
}) {
  
  const categoryIcon = () =>{
    switch(category) {
      case 'salary':
        return <img className='category-icon' src={iconCoin} alt='icon'/>
      case 'freelancing':
        return <img className='category-icon' src={iconFreelance} alt='icon'/>
      case 'investment':
        return <img className='category-icon' src={iconBank} alt='icon'/>
      case 'stocks':
        return <img className='category-icon' src={iconTransfer} alt='icon'/>
      case 'bitcoin':
        return <img className='category-icon' src={iconBitcoin} alt='icon'/>
      case 'bank':
        return <img className='category-icon' src={iconBank} alt='icon'/>
      case 'other':
        return <img className='category-icon' src={iconCoin} alt='icon'/>
    }
  }

  const expenseCategoryIcon = () =>{
    switch(category){
      case 'shop':
        return <img className='category-icon' src={iconShop} alt='icon'/>
      case 'education':
        return <img className='category-icon' src={iconStudy} alt='icon'/>
      case 'gift':
        return <img className='category-icon' src={iconGift} alt='icon'/>
      case 'code':
        return <img className='category-icon' src={iconGit} alt='icon'/>
      case 'phone':
        return <img className='category-icon' src={iconPhone} alt='icon'/>
      case 'wifi':
        return <img className='category-icon' src={iconWifi} alt='icon'/>
      case 'steam':
        return <img className='category-icon' src={iconSteam} alt='icon'/>
    }
  }


  return (
    <>
      <div className='content'>
          <div className='content__title'>{type === 'expense' ? expenseCategoryIcon() : categoryIcon()}{title}</div>
          <div className='inner-content'>
            <div className='inner-content-text'>
              <p><img className='content__img' src={iconDollar} alt='icon'/>{amount}</p>
              <p><img className='content__img' src={iconCalendar} alt='icon'/> {dateFormat(date)}</p>
              <p><img className='content__img' src={iconComment} alt='icon'/>{description}</p>
            </div>
            <button className='btn-content' onClick={() => deleteItem(id)}><img className='content__img' src={iconTrash} alt='icon'/></button>
          </div>
      </div>
    </>
  )
}

export {IncomeItem}