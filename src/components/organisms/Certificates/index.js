import React from 'react';
import OpenBlock from '../OpenBlock';
import cestificats from './certificates.json';
import './style.css';

function Certificates() {
  return (
    <OpenBlock title='Cертификаты'>
      <ul className="certifacats-list">
        {
          cestificats.map( item => <li className='certifacats-item-wrapper' key={item.id}>
            <a href={item.link} target='_blank' className='certifacats-item-link'>{item.title}</a>
          </li>)
        }
      </ul>
    </OpenBlock>
  )
}

export default Certificates;