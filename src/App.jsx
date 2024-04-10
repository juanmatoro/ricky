import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Personajes from "./pages/personajes/Personajes";

import CharacterDetails from "./pages/personaje/CharacterDetails";
import LocationDetails from "./pages/locations/LocationDetails";
import LocationsGallery from "./pages/locations/LocationsGallery";
import Header from "./core/header/Header";
import Home from "./pages/home/Home";


function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/locations" element={<LocationsGallery/>} />
          <Route path="/location/:id" element={<LocationDetails/>} />

        </Routes>
     
      </Router>

    </>
  )
}

export default App
