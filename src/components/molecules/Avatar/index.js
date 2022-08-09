import React from 'react';
import Image from '../../atoms/Image';
import testPhoto from './assert/myphoto.jpg';
import './style.css';

function Avatar() {
  return (
    <div className='avatar'>
      <Image src={testPhoto}/>
    </div>
  )
}

export default Avatar;

// https://elergo.tech/static/media/portf/myphoto.jpg - реальное фото
