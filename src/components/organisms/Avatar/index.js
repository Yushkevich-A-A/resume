import React from 'react';
import Image from '../../atoms/Image';
import './style.css';

function Avatar() {
  return (
    <div className='avatar'>
      <Image src='https://elergo.tech/static/media/portf/myphoto.jpeg'/>
    </div>
  )
}

export default Avatar;