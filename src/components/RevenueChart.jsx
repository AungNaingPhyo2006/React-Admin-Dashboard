import React from 'react'
import Title from './Title'
import '../assets/revenue_chart.css'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'

export default function RevenueChart() {
    const data = [
        {
            data: 3000
        },
        {
            data: 4200
        },
        {
            data: 1500
        },
        {
            data: 9000
        },
        {
            data: 7600
        },
        {
            data: 8400
        },
        {
            data: 4300
        },
    ]
  return (
    <div className='revenue_chart'>
        <Title title="7,650,00 EUR" subtitle="Revenue this week"/>
        <div className="graph">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={500} height={400} data={data}>
                    <defs>
                        <linearGradient id='color' x1='0' x2='0' y1='0' y2='1'>
                            <stop offset="30%" stopColor='#ff4d6d' stopOpacity={0.4}/>
                            <stop offset="85%" stopColor='#ff4d11' stopOpacity={0.2}/>
                        </linearGradient>
                    </defs>
                    <Tooltip cursor={false}/>
                    <Area type="monotone" dataKey="data" stroke="#ee3b3b" fill="url(#color)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
//video 1:01:30 npm install recharts