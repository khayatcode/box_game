import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [clrArray, setClrArray] = useState([])

  return (
    <div className="App">
      <Form clrArray ={clrArray} setClrArray = {setClrArray}/>
      <Box clrArray = {clrArray}/>
    </div>
  );
}

export default App;
