import React from 'react'

import { Helmet } from 'react-helmet'

import './frame3.css'

const Frame3 = (props) => {
  return (
    <div className="frame3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame3-dummy-container">
        <span className="frame3-text">
          <span>Каталог проблем</span>
        </span>
      </div>
    </div>
  )
}

export default Frame3
