import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, withRouter } from 'react-router-dom';

import List from './containers/List';
import Form from './containers/Form';
import Detail from './containers/Detail';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NoMatch from './containers/NoMatch';

import { auth } from './common';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import {
  Header, Menu, LoginWrap
} from './styled';

const AuthButton = withRouter(({ history }) => (
  auth.isAuthenticated ? (
    <a onClick={() => auth.signout(() => history.push('/'))}>Logout</a>
  ) : (
    <NavLink activeClassName="active" to="/">Login</NavLink>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => 
    !auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  }/>
)

render(
  <Router>
    <div>
      <Header>
        <Menu>
           <li>
             <a href="/list" style={{color:'#fff'}}><h1>LYRICS</h1></a>
          </li> 
          <li>
            <NavLink activeClassName="active" to="/list">List</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/form">Add</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </li>
        </Menu>
        {/* <AuthButton /> */}
      </Header>
      <Switch>
        <Route exact path="/list" component={List}/>
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
