"use client"

import React, { useEffect, useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { salesData, ServiceSale } from './data'

const CategoryDistribution = () => {

    const [categoryData,setCategoryData]=useState<ServiceSale[]>()
    const colors = ['#bd2424ff','#f19306ff','#08d83cff','#548fddff','#7f349cff','#e70651ff','#f0a7ffff','#78b98cff','#8eccffff','#d400b1ff']

    useEffect(()=>{
        setCategoryData(salesData)
    },[])

  return (
    <div className='bg-[#2f2f2f]  p-4 backdrop-blur-md rounded-lg flex flex-col justify-center items-center gap-5 '>
        <ResponsiveContainer width={'100%'} height={300} >
            <PieChart>
                <Pie 
                    data={categoryData?.map(item => ({ name: item.country, value: item.amountUSD }))}
                    cx={'50%'}
                    cy={'50%'}
                    dataKey={'value'}
                    labelLine={false}
                    outerRadius={80}
                    
                    // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {categoryData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))
                    }

                </Pie>
                <Tooltip 
                    contentStyle={{
                        backgroundColor: '#1e1e1e',
                        border: '1px solid #4b5563',
                        color: 'white',
                        fontSize: 12,
                        padding: '8px',
                        borderRadius: '4px'
                    }}
                    itemStyle={{ color: 'white' }}
                />
                <Legend iconType='circle' align='center' layout='horizontal' wrapperStyle={{ color: 'white', fontSize: 12 }} />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CategoryDistribution