import React from 'react'
import image1 from '../assets/images/image-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../assets/navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="title">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="container">
          <div className="search">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='Search...' />
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faBell} className='bell'/>
            <div className="image">
              <img src={image1} alt="" />
            </div>
            <div className="profileName">
              <h4>Aung Naing Phyo</h4>
              <h6>Admin</h6>
            </div>
            <FontAwesomeIcon icon={faCaretDown} className='down'/>
          </div>
        </div>
    </div>
  )
}
