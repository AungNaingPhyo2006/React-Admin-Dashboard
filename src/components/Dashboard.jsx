import React from 'react'
import { Navbar } from './Navbar'
import '../assets/dashboard.css'
import Info from './Info'
import RevenueChart from './RevenueChart'
import Visits from './Visits'

export default function Dashboard() {
  return (
    <div className='dashboard'>
          <Navbar/>
          <div className="grid">
            <div className="gridOne">
              <Info/>
            </div>
            <div className="gridTwo">
              <RevenueChart/>
              <Visits/>
            </div>
          </div>
    </div>
  )
}
