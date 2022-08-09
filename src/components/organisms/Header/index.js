import React from 'react';
import Avatar from '../../molecules/Avatar';
import Layer from '../../molecules/Layer';
import Information from '../Information';
import './style.css';

function Header() {
  return (
    <Layer>
      <div className="header">
        <Avatar />
        <Information />
      </div>
    </Layer>
  )
}

export default Header