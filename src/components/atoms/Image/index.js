import React from 'react';
import feedback from './assert/feedback.webp';
import './style.css';

function Image({ src, title }) {
  return (
    <img className='img-block' src={src} 
    onError={(e)=>{e.target.onerror = null; e.target.src=feedback}}
    alt={title}
    />
  )
}

Image.defaultProps = {
  title: 'картинка',
}

export default Image;
