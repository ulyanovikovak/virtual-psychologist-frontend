import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import D24a8733333f45dcbbc68a0963af7cf21 from './views/d24a8733333f45dcbbc68a0963af7cf21'
import Heading1 from './views/heading1'
import Heading2 from './views/heading2'
import Container from './views/container'
import Frame from './views/frame'
import Frame1 from './views/frame1'
import Frame2 from './views/frame2'
import Frame3 from './views/frame3'
import Frame4 from './views/frame4'
import Photo5364177685145837991x1 from './views/photo5364177685145837991x1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={D24a8733333f45dcbbc68a0963af7cf21} exact path="/" />
        <Route component={Heading1} exact path="/heading1" />
        <Route component={Heading2} exact path="/heading2" />
        <Route component={Container} exact path="/container" />
        <Route component={Frame} exact path="/frame" />
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Frame2} exact path="/frame2" />
        <Route component={Frame3} exact path="/frame3" />
        <Route component={Frame4} exact path="/frame4" />
        <Route
          component={Photo5364177685145837991x1}
          exact
          path="/photo5364177685145837991x1"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
