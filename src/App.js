import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages';
import SinginPage from './pages/signin';
import AssistPage from './pages/assist';

function App()  {
  return (
    <Router>
      <Switch>
          <Route path = "/" component= {Home} exact />
          <Route path = "/signin" component= {SinginPage} exact />
          <Route path = "/assist" component= {AssistPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
