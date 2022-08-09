import React from 'react';
import './style.css';

function Layer(props) {
  
  return (
    <div className='layer'>
      {
        props.children
      }
    </div>
  )
}

export default Layer;