import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faMoneyBill, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../assets/info.css'

export default function Info() {
    const data = [
        {
            icon : faShoppingCart,
            title : "Orders Completed",
            value : "2.58k"
        },
        {
            icon : faMoneyBill,
            title : "Total Revenue Made",
            value : "256k"
        },
        {
            icon : faUser,
            title : "Total Store Visits",
            value : "3.7m"
        },
        {
            icon: faBarcode,
            title : "Total Sales Made",
            value : "26,585"
        },
    ]
  return (
    <div className='info'>
        {
            data.map((info) => {
                return(
                    <div className="inf">
                        <div className="icon">
                            <FontAwesomeIcon icon={info.icon}/>
                        </div>
                        <div className="details">
                            <h4>{info.title}</h4>
                            <h2>{info.value}</h2>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

//video 46;43