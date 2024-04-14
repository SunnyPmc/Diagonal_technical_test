import React from 'react';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import AgeCalculator from './pages/AgeCalculator';
import RomanToNumber from './pages/RomanToNumber'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'
import BirthdayCountdown from './pages/BirthdayCountdown';

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/roman-to-number' element={<RomanToNumber/>}/>
            <Route path='/age-calculator' element={<AgeCalculator/>}/>
            <Route path='/birthday-countdown' element={<BirthdayCountdown/>}/>
          </Routes>
        </BrowserRouter>

    );
}

export default App;
