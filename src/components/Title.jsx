import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import '../assets/title.css'

export default function Title({title,subtitle}) {
  return (
    <div className='title_container'>
        <div className="title">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
        <div className="icon">
            <FontAwesomeIcon icon={faSun} className="img_icon"/>
        </div>
    </div>
  )
}
