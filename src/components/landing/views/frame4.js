import React from 'react'

import { Helmet } from 'react-helmet'

import './frame4.css'

const Frame4 = (props) => {
  return (
    <div className="frame4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame4-dummy-container">
        <span className="frame4-text">
          <span>Главная</span>
        </span>
      </div>
    </div>
  )
}

export default Frame4
