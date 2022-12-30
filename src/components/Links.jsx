import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faMoneyBill, faQuestionCircle, faShoppingBag, faShoppingCart, faSignOutAlt, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Links() {
  return (
    <div>
        <ul>
            <li className='active'>
                <a href="/"> <FontAwesomeIcon icon={faShoppingBag}/> Overview</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faShoppingCart}/>Orders</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faUser}/>Customers</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faMoneyBill}/>Transactions</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faTruck}/>Shipments</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faQuestionCircle}/>Help</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faCogs}/>Settings</a>
            </li>
            <li>
                <a href="/"> <FontAwesomeIcon icon={faSignOutAlt}/>Logout</a>
            </li>
        </ul>
    </div>
  )
}
