import React from 'react';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import './style.css';

function Portfolio(props) {
  return (
    <div className='portfolio'>
      <Header />
      <Main />
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio;
