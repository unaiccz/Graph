import React from 'react'
import {BarChart, ResponsiveContainer, } from 'recharts'
import {Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
function Brb() {
      const data = [
        {name: 'John', age: 20, weight: 80},
        {name: 'Jane', age: 21, weight: 70},
        {name: 'Joe', age: 22, weight: 40},
        {name: 'Jill', age: 23, weight: 120},
        {name: 'Jack', age: 24, weight: 90},
        {name: 'Jenny', age: 25, weight: 75},
        {name: 'Jerry', age: 26, weight: 80},
        {name: 'Jesse', age: 27, weight: 90},
    ]
  return (
    <div>
      <h1 className='text-center'>Recharts</h1>
{/* <create a grafic for the thata that i just puted */}
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data} 
        height={300}
        width={500}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray='4 1 2'/>
          <XAxis dataKey='name'/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey='weight' fill='#8884d8'/>
          <Bar dataKey='age' fill='#82ca9d'/>
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Brb
