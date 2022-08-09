import React from 'react';
import OpenBlock from '../OpenBlock';
import skills from './skills.json';
import './style.css';


function HardSkills() {

  return (
    <OpenBlock title='Профессиональные навыки (hard)'>
      <ul className="hard-skills-list">
        {
          skills.map( item => <li className='hard-skills-item-wrapper' key={item}>
            <div className='hard-skills-item'>{item}</div>
          </li>)
        }
      </ul>
    </OpenBlock>
  )
}

export default HardSkills