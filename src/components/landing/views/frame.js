import React from 'react'

import { Helmet } from 'react-helmet'

import './frame.css'

const Frame = (props) => {
  return (
    <div className="frame-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame-dummy-container">
        <span className="frame-text">
          <span>Регистрация</span>
        </span>
      </div>
    </div>
  )
}

export default Frame
