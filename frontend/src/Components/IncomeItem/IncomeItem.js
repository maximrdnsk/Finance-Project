import React from 'react'
import { dateFormat } from '../../utils/dateFormat';
import { IconComment,IconDollar, IconCalendar, IconTrash, IconBitcoin, IconBank, IconFreelance, IconCoin, IconTransfer, IconStudy, IconGift, IconGit, IconSteam, IconShop, IconPhone, IconWifi} from '../../utils/icons';
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
        return <div className='category-icon'><IconCoin/></div>
      case 'freelancing':
        return <div className='category-icon'><IconFreelance/></div>
      case 'investment':
        return <div className='category-icon'><IconBank/></div>
      case 'stocks':
        return <div className='category-icon'><IconTransfer/></div>
      case 'bitcoin':
        return <div className='category-icon'><IconBitcoin/></div>
      case 'bank':
        return <div className='category-icon'><IconBank/></div>
      case 'other':
        return <div className='category-icon'><IconCoin/></div>
    }
  }

  const expenseCategoryIcon = () =>{
    switch(category){
      case 'shop':
        return <div className='category-icon'><IconShop/></div>
      case 'education':
        return <div className='category-icon'><IconStudy/></div>
      case 'gift':
        return <div className='category-icon'><IconGift/></div>
      case 'code':
        return <div className='category-icon'><IconGit/></div>
      case 'phone':
        return <div className='category-icon'><IconPhone/></div>
      case 'wifi':
        return <div className='category-icon'><IconWifi/></div>
      case 'steam':
        return <div className='category-icon'><IconSteam/></div>
    }
  }


  return (
    <>
      <div className='content'>
          <div className='inner-content'>
            <div className='inner-content-text'>
              <p><div className='content__img'><IconCalendar/></div> {dateFormat(date)}</p>
              <div className='content__title'>{type === 'expense' ? expenseCategoryIcon() : categoryIcon()}{title}</div>
              <p><div className='content__img'><IconDollar/></div>{amount}</p>
              <p><div className='content__img' ><IconComment/></div>{description}</p>
            </div>
            <button className='btn-content' onClick={() => deleteItem(id)}><IconTrash/></button>
          </div>
      </div>
    </>
  )
}

export {IncomeItem}