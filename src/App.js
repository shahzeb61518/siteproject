import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages';
import SinginPage from './pages/signin';
import AssistPage from './pages/assist';
import ToKnowMore from './pages/knowmore';
import Contact from './pages/contact';
import Employee from './pages/employee';

function App()  {
  return (
    <Router>
      <Switch>
          <Route path = "/" component= {Home} exact />
          <Route path = "/signin" component= {SinginPage} exact />
          <Route path = "/assist" component= {AssistPage} exact />
          <Route path = "/toknowmore" component= {ToKnowMore} exact />
          <Route path = "/contact" component= {Contact} exact />
          <Route path = "/employee" component= {Employee} exact />
      </Switch>
    </Router>
  );
}

export default App;
