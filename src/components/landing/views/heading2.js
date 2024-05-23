import React from 'react'

import { Helmet } from 'react-helmet'

import './heading2.css'

const Heading2 = (props) => {
  return (
    <div className="heading2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="heading2-heading2">
        <span className="heading2-text">
          <span>Регистрируйтесь в сервисе за 5 минут,</span>
          <br></br>
          <span>запустите тестирование в 3 шага, получите</span>
          <br></br>
          <span>результаты через 10 минут</span>
        </span>
      </div>
    </div>
  )
}

export default Heading2
