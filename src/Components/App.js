import React, {useState, useEffect} from 'react';
import '../CSS/App.css';
import Homepage from './Homepage';
import {Routes, Route, NavLink} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header>
        <h1>All the Times: Yesterday, Today, Tomorrow</h1>
      </header>
         <Homepage />
    </div>
  )
}

export default App;
