import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {
  HeaderNav, Menu, LoginWrap,
} from './styled';

export default class Header extends Component {
  render() {
    return (
      <HeaderNav>
        <Menu>
          <li className="Logo">
            <a href="/list" style={{color:'#fff'}}><h1>LYRICS</h1></a>
          </li> 
        </Menu>
        <LoginWrap>
          <NavLink activeClassName="active" to="/login">로그인</NavLink>
          <a href="/api/logout">로그아웃</a>
        </LoginWrap>
      </HeaderNav>
    )
  }
}