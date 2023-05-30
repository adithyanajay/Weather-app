import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./sass/pages/App.scss";
import Weather from "./Pages/Weather";
import Cities from "./Pages/Cities";
import Map from "./Pages/Map";
import Settings from "./Pages/Settings";
import "./sass/App.scss";
import { useState } from "react";
import Search from "./Components/Search";
//import Searchbar from "./Components/Searchbar";

function App() {
  //const [cities, setCities] = useState([]);

  return (
    <div className="App">
      <Navbar />
     
      {/* <Searchbar /> */}
      <main className="main">
        <Search />

        <div className="container">
          <Routes>
            <Route path="/" element={<Weather className="logo" />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/map" element={<Map />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
