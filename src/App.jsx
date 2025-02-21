import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import About from './pages/About';
import MortgageCalculator from './pages/Mortage_calculator';

const App = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/start' element={<Start/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/calculator' element={<MortgageCalculator/>} />
    </Routes>
    
  );
};

export default App;
