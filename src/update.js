import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateComponent(prop) {
  console.log(prop.item.firstName,'---props---')
  const [data, setdata] = useState(prop.item);

  const [flagsubmit,setflag]=useState(false)

  console.log(prop,prop.item,data,'this is the dta')

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
     setInterval(() => {
      
     }, 3000);
  };

  

  return (
    !flagsubmit?
    <form onSubmit={handleSubmit}>
      <label >
        FirstName:
        <input key='1'
          type="text"
          value={data.firstName}
          onChange={(event) => setdata({...data,firstName:event.target.value})}
        />
      </label>
      <br/>

      <label>
        Lastname:
        <input key='2'
          type="text"
          value={data.lastName}
          onChange={(event) => setdata({...data,lastName:event.target.value})}
        />
      </label>

      <br />
      <label>
        Email:
        <input key='3'
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
    </form>:<>form submittted</>
  );
}

// export default SubmitForm;





// function MyComponent() {
//   const [data, setData] = useState([]);

//   localStorage.setItem('myData', JSON.stringify({ foo: 'bar' }));

//   useEffect(() => {
//     // fetch('http://localhost:8000/users', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify({name:"aakash",email:"kathabs15b001@gmail.com"})
//     // })
//     // .then(response => response.json())
//     // .then(data1 => {
//     //   console.log('Success:', data);
//     //   setData(data1)
//     // })
//     // .catch((error) => {
//     //   console.error('Error:', error);
//     // });

//         // Make a request to the Node.js API
//         fetch('http://localhost:8000/users')
//         .then(response => response.json())
//         .then(data1 => {
//         setData(data1); // { message: 'bar' }
//         });
//   }, []);

//   return (
//     <div>
     
//     </div>
//   );
// }

export default UpdateComponent;


