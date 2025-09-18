"use state"

import { ChartArea } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { salesData } from './data';

const ServicesChart = () => {
//   useEffect(() => {
//     fetch('http://localhost:4000/api/smartsheet')
//       .then(res => res.json())
//       .then(data => console.log(data))
//   }, [])

const [data, setData] = useState<any>();

useEffect(() => {
    // fetch('/data.ts')
    //   .then(res => res.json())
    //   .then(data => setData(data[0]))
    //   .catch(err => console.error('Error fetching data:', err));
    setData(salesData.slice(0,5));
},[])
  return (
    <div className=' bg-[#2f2f2f] p-5 backdrop-blur-md rounded-lg'>
        <h2>Services Chart</h2>
        <ResponsiveContainer width={'100%'} height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray={'3 4'} stroke='#4b5563' />
                <XAxis 
                    dataKey={'service'}
                    stroke='#8e959eff'
                    tick={{ fontSize: 12 }}
                    interval={'preserveStartEnd'}
                />
                <YAxis
                    stroke='#8e959eff'
                    tick={{ fontSize: 12 }}
                    interval={'preserveStartEnd'}
                    width={40}
                />
                <Tooltip
                    content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div style={{
                                    backgroundColor: '#1e1e1e',
                                    border: '1px solid #4b5563',
                                    color: 'white',
                                    fontSize: 12,
                                    padding: '8px',
                                    borderRadius: '4px'
                                }}>
                                    <p>{label}</p>
                                    {payload.map((entry, idx) => (
                                        <p key={idx}>{entry.name}: {entry.value}</p>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Line type="monotone" dataKey={'amountUSD'} stroke="#ff0077ff" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}


export default ServicesChart