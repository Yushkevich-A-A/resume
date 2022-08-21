import React from 'react';
import Layer from '../../molecules/Layer';
import Certificates from '../Certificates';
import Education from '../Education';
import HardSkills from '../HardSkills';
import SoftSkills from '../SoftSkills';
import WorkExpirience from '../WorkExpirience';
import './style.css';

function Main() {
  return (
    <Layer>
      <div className='main'>
        <Education />
        <HardSkills />
        <SoftSkills />
        <WorkExpirience />
        <Certificates />
      </div> 
    </Layer>
    
  )
}

export default Main