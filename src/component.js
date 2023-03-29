import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function MyComponent() {
  const [data, setdata] = useState(
    {
      "firstName": "",
      "lastName": "",
      "mobile": "",
      "email": "",
      "dob": "",
      "avgStep": 0,
      "avgSleep": 0,
      "avgCalories": 0,
      "dailyStepGoal": ""
    }

  );



  const [flagsubmit,setflag]=useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/post/customer', {
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
     setflag(true)
  };

  

  return (
    !flagsubmit?
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input
          type="text"
          value={data.firstName}
          onChange={(event) => setdata({...data,firstName:event.target.value})}
        />
      </label>
      <br/>

      <label>
        Lastname:
        <input
          type="text"
          value={data.lastName}
          onChange={(event) => setdata({...data,lastName:event.target.value})}
        />
      </label>

      <br />
      <label>
        Email:
        <input
          type="email"
          value={data.email}
          onChange={(event) => setdata({...data,email:event.target.value})}
        />
      </label>
      <br />

      <label>
        DateOfBirth:
        <input
          type="date"
          value={data.dob}
          onChange={(event) => setdata({...data,dob:event.target.value})}
        />
        <label/>
<br/>
<label>
        dailystepgoal:
        <input
          type="number"
          value={data.dailysteps}
          onChange={(event) => setdata({...data,dailyStepGoal:event.target.value})}
        />
      </label>
      <br />

      <label>
        mobile:
        <input
          type="text"
          value={data.mobile}
          onChange={(event) => setdata({...data,mobile:event.target.value})}
        />
      </label>
      </label>
      <button type="submit">Submit</button>
    </form>:<Navigate to="/"/>
  );
}

export default MyComponent;


