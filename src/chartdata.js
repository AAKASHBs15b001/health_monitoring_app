import React, { Component, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MyChart (prop) {

    const [data,setdata]=useState(  [
        { name: 'January', value: 10 },
        { name: 'February', value: 20 },
        { name: 'March', value: 30 },
        { name: 'April', value: 40 },
        { name: 'May', value: 50 }
      ])
    useEffect(
        ()=>{fetch('http://localhost:3000/api/charts/').then(response => response.json()).then(data1 => setdata(data1))
            .catch((error) => {
                console.error('Error:', error);
            })},[]);



    
  
    return (
      <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  
}

export default MyChart;
