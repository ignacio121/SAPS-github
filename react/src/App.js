import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import Login from './components/Login.jsx';

import Estudiante from './pages/estudiante.js';
import Director from './pages/director.js';




function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route path="/estudiante" element={<Estudiante/>}/>
      <Route path="/director" element={<Director/>}/>
    </Routes>
  </BrowserRouter>
    
  )
};

export default App;