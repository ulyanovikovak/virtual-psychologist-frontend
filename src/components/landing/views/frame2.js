import React from 'react'

import { Helmet } from 'react-helmet'

import './frame2.css'

const Frame2 = (props) => {
  return (
    <div className="frame2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame2-dummy-container">
        <span className="frame2-text">
          <span>Личный кабинет/Тесты</span>
        </span>
      </div>
    </div>
  )
}

export default Frame2
