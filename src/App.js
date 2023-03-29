import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './component';
import ListAll from './ListAll';
import { Link } from "react-router-dom";
import ListAllhealth from './ListAllhealth';
import EnterHealth from './enterhealth';
import MyChart from './chartdata';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List of All Customers</Link>
            </li>
            <li>
              <Link to="/health">customer health data</Link>
            </li>
            <li>
              <Link to="/addnew">Add New Customer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<ListAll/>} />
          <Route path="/health" exact element={<ListAllhealth/>} />
          <Route path="/updatecustomer" element={<>aaksatha</>} />
          <Route path="/addnew" element={<MyComponent/>} />
          <Route path="/enterhealth" element={<EnterHealth></EnterHealth>}></Route>
          <Route path="/chart" element={<MyChart></MyChart>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

