import React from 'react'

import { Helmet } from 'react-helmet'

import './container.css'

const Container = (props) => {
  return (
    <div className="container-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="container-container1">
        <button className="container-button">
          <div className="container-background-border">
            <span className="container-text">
              <span>Пройти тестирование</span>
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Container
