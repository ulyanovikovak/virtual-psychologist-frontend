import React from 'react'

import { Helmet } from 'react-helmet'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-dummy-container">
        <span className="frame1-text">
          <span>Войти</span>
        </span>
      </div>
    </div>
  )
}

export default Frame1
