import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Main from './containers/Main';
import List from './containers/List';
import Form from './containers/Form';
import Detail from './containers/Detail';
import NoMatch from './containers/NoMatch';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import {
  Header, Menu
} from './styled';

render(
  <Router>
    <div>
      <Header>
        <Menu>
          <li>
            <a href="/">Lyric</a>
          </li>
          <li>
            <NavLink activeClassName="active" to="/list">List</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/form">Add</NavLink>
          </li>
        </Menu>
      </Header>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
        <Route path="/form/:id" component={Form} /> 
        <Route path="/form" component={Form} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
