import React from 'react'
import './History.scss'
import { useGlobalContext } from './../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <>
        <div className='history'>
            <div className='history-title'>Recent History:</div>
                <div className='history-container'>
                {history.map((item) =>{
                    const {_id, title, amount, type} = item
                    return (
                        <div key={_id} className="history__items" style={{
                            borderColor: type === 'expense' ? '#3693FF' : '#FBA801'
                        }}> 
                            <div className='hs'>
                            <p>
                                {title}
                            </p>

                            <p>
                                {
                                    type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                                }
                            </p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            </>
    )
}
;

export {History}