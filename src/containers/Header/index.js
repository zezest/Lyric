import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { apiCall } from '../../common';

import {
  HeaderNav, Menu, LoginWrap,
} from './styled';

export default class Header extends Component {
  onClickLogout = () => {
    apiCall.get('/api/logout');
  }

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
          <a onClick={this.onClickLogout}>로그아웃</a>
        </LoginWrap>
      </HeaderNav>
    )
  }
}