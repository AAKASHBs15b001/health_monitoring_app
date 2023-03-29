

import React, { useState, useEffect } from 'react';
import HealthComponent from './health';
import EnterHealth from './enterhealth';
import { Navigate } from "react-router-dom";
import Modal from 'react-modal'
import MyChart from './chartdata';
function ListAll() {
        const [data, setdata] = useState([])
        const [item,setitem]=useState(false)
        const [modalIsOpen, setModalIsOpen] = useState(false);


        function openModal() {
            setModalIsOpen(true);
          }
        
          function closeModal() {
            setModalIsOpen(false);
          }


        useEffect(
            ()=>{fetch('http://localhost:3000/api/documents').then(response => response.json()).then(data1 => setdata(data1))
                .catch((error) => {
                    console.error('Error:', error);
                })},[]);

    const handleSubmit = (item1) => {
        console.log(item1)
        console.log("storing in localStorages")
        // setitem(item1)
        localStorage.setItem('myData',JSON.stringify(item1));
        setitem(true)
        
    }

  return (
!item?
<><table border='1'>
<thead>
  <tr>
    <th>ID</th>
    <th>firstName</th>
    <th>lastName</th>
    <th>email</th>
    <th>dob</th>
    <th>avgsteps</th>
    <th>avgcaloris</th>
    <th>avgsleep</th>
    <th>dailyStepGoal</th>
    <th>Add health data</th>
  </tr>
</thead>
<tbody>
  {data.map(item => (
    <tr key={item._id}>
      <td>{item._id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.dob}</td>
      <td>{item.avgStep}</td>
      <td>{item.avgCalories}</td>
      <td>{item.avgSleep}</td>
      <td>{item.dailyStepGoal}</td>
      <td><button onClick={()=>handleSubmit(item)}>ADD</button></td>
      <td>
      <div>
      <button onClick={openModal}>Open Chart</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <MyChart/>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
      
</div>
</td>
    </tr>
  ))}
</tbody>
</table>

{/* <UpdateComponent item={item}></UpdateCompon/ent> */}
</>:<Navigate to='/enterhealth'></Navigate>
  );
}

// export default SubmitForm;




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

export default ListAll;

















