import React, { useState, useEffect } from 'react';

function HealthComponent(prop) {


  const [data, setdata] = useState({});


  const localdata=JSON.parse(localStorage.getItem('myData'))

  useEffect(()=>{
    setdata({id:localdata['_id']}
    )},[])
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/post/health', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data1 => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
     console.log(data)
  };

  
  return (
    <form onSubmit={handleSubmit}>
        <label>
        customerID:
        <input key='2'
          type="text"
          value={data.id}
          onChange={(event) => setdata({...data,type:event.target.value})}
        />
        </label>
       <label>
        type:
        <input key='2'
          type="text"
          value={data.type}
          onChange={(event) => setdata({...data,type:event.target.value})}
        />
      </label>
      <br/>
      <label>
        date:
        <input key='2'
          type="date"
          value={data.date}
          onChange={(event) => setdata({...data,date:event.target.value})}
        />
      </label>
      <label>
        value:
        <input
          type="value"
          value={data.value}
          onChange={(event) => setdata({...data,value:event.target.value})}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HealthComponent;


