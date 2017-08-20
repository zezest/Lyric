import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from './containers/Header';
import List from './containers/List';
import VideoList from './containers/VideoList';
import Form from './containers/Form';
import Detail from './containers/Detail';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NoMatch from './containers/NoMatch';

import { auth } from './common';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(
  <Router>
    <div>
      <Header />
        
      <Switch>
        <Route exact path="/list" component={List}/>
        <Route path="/video" component={VideoList}/>
        <Route path="/form/:id" component={Form} /> 
        <Route path="/form" component={Form} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" component={Login} /> 
        <Route path="/signup" component={Signup} /> 
        <Redirect from="*" to="/list" />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
