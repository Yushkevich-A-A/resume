import React from 'react';
import OpenBlock from '../OpenBlock';
import './style.css';

function WorkExpirience() {
  return (
    <OpenBlock title='Образование'>
    <div className="expirience-content">
      <div className="expirience-content-item">
        <div className="expirience-content-date">2020 июль - <br/>
        2022 июль</div>
        <div className="expirience-content-description">
          <div className="expirience-content-description-row">
            Учебные проекты Нетологии
          </div>
        </div>
      </div>
      <div className="expirience-content-item">
        <div className="expirience-content-date">2022 январь - <br/>
2022 февраль</div>
        <div className="expirience-content-description">
          <div className="expirience-content-description-row">
          Разработка приложения оператора для модерации залов проведения боев VR.  Проект свернули в связи 
с всемирной ситуацией(((
          </div>
        </div>
      </div>
    </div>
  </OpenBlock>
  )
}

export default WorkExpirience