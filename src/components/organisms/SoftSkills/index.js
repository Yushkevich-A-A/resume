import React from 'react';
import OpenBlock from '../OpenBlock';
import skills from './skills.json';
import './style.css';

function SoftSkills() {
  return (
    <OpenBlock title='Надпрофессиональные навыки (soft)'>
      <ul className="soft-skills-list">
        {
          skills.map( item => <li className='soft-skills-item-wrapper' key={item}>
            <div className='soft-skills-item'>{item}</div>
          </li>)
        }
      </ul>
    </OpenBlock>
    )
}

export default SoftSkills;