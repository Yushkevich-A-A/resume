import React, { useState } from 'react';
import './style.css';

function OpenBlock(props) {
  const [ isOpen, setIsOpen ] = useState(true);

  return (
    <div className='open-block'>
      <h3 className='open-block-title' onClick={() => setIsOpen(!isOpen)}>
        { props.title }
      </h3>
      { isOpen && <div className="open-block-content">
        { props.children }
      </div>}
    </div>
  )
}

export default OpenBlock;