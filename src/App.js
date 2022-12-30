import React from 'react'
import "./assets/main.css"
import "./assets/media_query.css"
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App