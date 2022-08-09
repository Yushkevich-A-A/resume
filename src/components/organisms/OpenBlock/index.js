import React, { useState } from 'react';
import H3 from '../../atoms/H3';
import Line from '../../atoms/Line';
import './style.css';

function OpenBlock(props) {
  const [ isOpen, setIsOpen ] = useState(true);

  return (
    <div className='open-block'>
      <div className='open-title' onClick={() => setIsOpen(!isOpen)}>
        <H3 title={ props.title }/>
      </div>
      <Line />
      { isOpen && <div className="open-block-content">
        { props.children }
      </div>}
    </div>
  )
}

export default OpenBlock;