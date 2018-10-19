import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <li>
            <NavLink to="/list" style={{color:'#fff'}}>목록</NavLink>
          </li>
          <li>
            <NavLink to="/video" style={{color:'#fff'}}>동영상</NavLink>
          </li>
        </Menu>
        <LoginWrap>
          <NavLink activeClassName="active" to="/login">로그인</NavLink>
          {/* <a onClick={this.onClickLogout}>로그아웃</a> */}
        </LoginWrap>
      </HeaderNav>
    )
  }
}