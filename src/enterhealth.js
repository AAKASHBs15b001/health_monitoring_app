import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
function EnterHealth() {

  const [data, setdata] = useState(JSON.parse(localStorage.getItem('myData')));
  const [item,setitem]=useState(false)


  useEffect(()=>{setdata({...data,type:"",value:"",date:""})},[])



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
          setitem(true)
     console.log(data)
  };

  
  return (
    !item?
    <form onSubmit={handleSubmit}>
        <label>
        customerID:
        <input key='2'
          type="text"
          value={data._id}
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
    </form>:<Navigate to="/health"></Navigate>
  );
}

export default EnterHealth;


