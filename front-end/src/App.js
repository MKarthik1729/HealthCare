import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Client from './Client';
import Doctor from './Doctor';
import DoctorAssociation from './DoctorAssociation';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='client' element={<Client />} />
          <Route path='doctor' element={<Doctor />} />
          <Route path='association' element={<DoctorAssociation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
