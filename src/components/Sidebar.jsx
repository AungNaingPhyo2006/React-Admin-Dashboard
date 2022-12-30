import React from 'react'
import Links from './Links'
import '../assets/sidebar.css'

export default function Siderbar() {
  return (
    <div className='sidebar'>
        <div className="brand">Aung Naing Phyo</div>
        <div className="links">
            <Links/>
        </div>
        <div className="version">
          <p>Version: 1.0</p>
        </div>
    </div>
  )
}
