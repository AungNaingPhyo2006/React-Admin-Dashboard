import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../assets/visits.css'
import Title from './Title'
export default function Visits() {
    const data = [
        {
            title: "Man",
            value: 40
        },
        {
            title: "Woman",
            value: 26
        },
        {
            title: "Visits/Day",
            value: 50
        },
    ]
  return (
    <div className='visits'>
        <Title title="visits" subtitle="Details about your visits"/>
        <div className="analytics">
            <div className="icon">
                <FontAwesomeIcon icon={faUsers}/>
            </div>
        </div>
        <div className="progress_bars">
            {data.map((i) => {
                return(
                    <div className="progress_bar">
                        <div className="title">
                            <h5>{i.title}</h5>
                            <h5>{i.value}</h5>
                         </div>
                         <progress value={i.value} max='100'/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
