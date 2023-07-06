import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/index';
import ServicesC from './components/ServicesC';
import MancaveC from './components/MancaveC';
import CareerC from './components/CareerC';
import ConnectC from './components/ConnectC';
import Guna from './components/Zguna';
import Rishi from './components/Zrishi';
import Kiran from './components/Zkiran';
import Pratap from './components/Zpratap';
import Thiksha from './components/Zthiksha';
import Kitty from './components/Zkitty';
import Sriram from './components/Zsriram';
import Prano from './components/Zprano';
import Sriyaa from './components/Zsriyaa';
import FooterC from './components/FooterC';
import { Route, Routes } from "react-router-dom";
import Connectform from './components/Connectform';
import Careerform from './components/Careerform';
import React,{useState} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
        <div className="fixed z-50 sm:flex hidden ">
          <Navbar />
        </div>
        
        <Routes>
            <Route path='/' exact element={<Home />}  />
            <Route path='/Services' element={<ServicesC />} />
            <Route path='/Mancave' element={<MancaveC />} />
            <Route path='/Mancave/guna' element={<Guna />} />
            <Route path='/Mancave/rishi' element={<Rishi />} />
            <Route path='/Mancave/Kiran' element={<Kiran />} />
            <Route path='/Mancave/pratap' element={<Pratap />} />
            <Route path='/Mancave/thiksha' element={<Thiksha />} />
            <Route path='/Mancave/Kitty' element={<Kitty />} />
            <Route path='/Mancave/sriram' element={<Sriram />} />
            <Route path='/Mancave/Prano' element={<Prano />} />
            <Route path='/Mancave/Sriyaa' element={<Sriyaa />} />
            <Route path='/Connect' element={<ConnectC />} />
            <Route path='/Connect/connectfrom' element={<Connectform />} />
            <Route path='/Career' element={<CareerC />} />
            <Route path='/Career/careerfrom' element={<Careerform />} />
            <Route path='/Footer' element={<FooterC />} />
        </Routes>
      </> 
     )
    );
}

export default App;