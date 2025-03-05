// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../src/Landing/Landing';
import Main from '../src/Main/Main';
import './index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/price" element={<Main />} /> 
      <Route path="*" element={<Landing />} /> 
    </Routes>
  );
};

export default App;
