import './assets/css/style.css';
import DisplayImage from './components/displayimage';
import React, { useState, useEffect, useRef } from 'react';
function App({title}) {
     //ComponentDidMount 
    useEffect(() => {
      console.log("App Mounted");
    },[]);
  return (
    <div>
      <div className="bg-gray-600 text-white p-5 border-yellow-800">{title}</div>
       <div>
        <DisplayImage />
     </div>

    </div>
  );
  }
export default App;
