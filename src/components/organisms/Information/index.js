import React from 'react';
import Contacts from '../Contacts';
import MainTitle from '../../molecules/MainTitle';
import './style.css';

function Information() {
  return (
    <div className='block-information'>
      <MainTitle />
      <Contacts />
    </div>
  )
}

export default Information