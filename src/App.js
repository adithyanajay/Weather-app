import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./sass/pages/App.scss"
import Weather from './Pages/Weather';
import Cities from './Pages/Cities';
import Map from './Pages/Map';
import Settings from './Pages/Settings';
import './sass/App.scss'



function App() {

  
  return (
    <div className="App">
      <Navbar />  
      <div className="container">
        <Routes>
          <Route path='/' element={<Weather className="logo"/>} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/map' element={<Map />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      
    </div>
  );
}


export default App;
