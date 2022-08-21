import React from 'react';
import OpenBlock from '../OpenBlock';
import './style.css';

function Education() {
  return (
    <OpenBlock title='Образование'>
      <div className="education-content">
        <div className="education-content-item">
          <div className="education-content-date">2008 - 2012</div>
          <div className="education-content-description">
            <div className="education-content-description-row">
              ФГОУСПО КЭТ "им.Ф.В.Чижова" - энергетик
            </div>
            <div className="education-content-description-row">
              "Электрические станции сети и системы", "Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий".
            </div>
          </div>
        </div>
        <div className="education-content-item">
          <div className="education-content-date">2020 - 2022</div>
          <div className="education-content-description">
            <div className="education-content-description-row">
              Онлайн универсистет Нетология - курс "Веб-разработчик с нуля"
            </div>
            <div className="education-content-description-row">
              Разработка виджетов, сайтов, приложений(SPA) с использованием как нативного JS, так и библиотеки React. Использование современных веб технологий(sse, websocket, serviceWorkers, webWorkers и тд)
            </div>
          </div>
        </div>
      </div>
    </OpenBlock>
  )
}

export default Education;