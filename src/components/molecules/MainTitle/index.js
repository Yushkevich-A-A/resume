import React from 'react'
import H1 from '../../atoms/H1'
import H2 from '../../atoms/H2'
import Line from '../../atoms/Line'

function MainTitle() {
  return (
    <div className='main-title'>
      <H1 title='Юшкевич Антон Алексеевич'/>
      <Line />
      <H2 content='web-разработчик / front-end разработчик' />
    </div>
  )
}

export default MainTitle