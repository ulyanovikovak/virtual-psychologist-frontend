import React from 'react'

import { Helmet } from 'react-helmet'

import './heading1.css'

const Heading1 = (props) => {
  return (
    <div className="heading1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="heading1-heading1">
        <span className="heading1-text">
          <span>
            Виртуальный психолог - сервис доступной профессиональной помощи,
            разработанной специалистами
          </span>
        </span>
      </div>
    </div>
  )
}

export default Heading1
