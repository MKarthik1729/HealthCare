import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Client from './Client';
import Doctor from './Doctor';
import DoctorAssociation from './DoctorAssociation';
import Home from './Home';
import Login from './Client/Login';
import Register from './Client/Register';
function App() {
  return (
    // <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='client' element={<Client />} exact>
          {/* <Route path='/client' element={<Home />} exact /> */}

            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

          </Route>
          <Route path='doctor' element={<Doctor />} />
          <Route path='association' element={<DoctorAssociation />} />
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
