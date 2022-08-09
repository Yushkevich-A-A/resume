import React from 'react';
import Layer from '../../molecules/Layer';
import Education from '../Education';
import HardSkills from '../HardSkills';
import './style.css';

function Main() {
  return (
    <Layer>
      <div className='main'>
        <Education />
        <HardSkills />
      </div> 
    </Layer>
    
  )
}

export default Main