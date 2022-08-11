import React from 'react'
import Slider from './Slider.js'
import imgData from './imgData.js'
import './App.css'

function App() {

  return (
    <div className="App">
      <Slider imgData={imgData} />
    </div>
  );
}

export default App;
