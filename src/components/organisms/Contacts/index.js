import React from 'react';
import Line from '../../atoms/Line';
import Github from '../../molecules/Github';
import Mail from '../../molecules/Mail';
import Phone from '../../molecules/Phone';
import Telegram from '../../molecules/Telegram';
import VKontakte from '../../molecules/VKontakte';
import WhatsApp from '../../molecules/WhatsApp';
import './style.css';

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts-content'>
        <Github />
        <Mail />
        <Phone />
      </div>
      <Line />
      <div className="contacts-socials">
        <WhatsApp />
        <Telegram />
        <VKontakte />
      </div>
    </div>
  )
}

export default Contacts