

import React, { useState, useEffect } from 'react';

function ListAllhealth() {
        const [data, setdata] = useState([])
        const [item,setitem]=useState({})
        useEffect(
            ()=>{fetch('http://localhost:3000/health/documents').then(response => response.json()).then(data1 => setdata(data1))
                .catch((error) => {
                    console.error('Error:', error);
                })},[item]);


    const handleSubmit = (item1) => {
        console.log(item1)
        setitem(item1)
        // fetch('http://localhost:3000/api/documents/:{item._id}', {
        //     method: 'PUT',
        //     headers: {
        //       'Content-Type': 'application/json'            },
        //     body: JSON.stringify(data)
        //   })
        //   .then(response => response.json())
        //   .then(data1 => {
           
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   })
    }

 

  return (
        <>
          <table border='1'>
           <thead>
            <tr>
                <th>ID</th>
                <th>type</th>
                <th>date</th>
                <th>value</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item._id}>
                <td>{item.customerID}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.value}</td>
                </tr>
            ))}
            </tbody>
            </table></>
            );
}


export default ListAllhealth;

















