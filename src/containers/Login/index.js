import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { apiCall } from '../../common';
// import Icon from '../../components/Icon';
import Input from '../../components/TextField/input';

import {
  LoginWrap, LoginForm, UtilsWrap,
} from './styled';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      redirectToReferrer: false,
    }
  }

  onChangeToState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onClickFindPW = () => {
    console.log('비밀번호 찾기');
    alert('서비스 준비중입니다.')
  }

  login = e => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    apiCall.post('/api/login', data).then(data => {
      console.log('로그인 성공');
      alert('로그인되었습니다.');
    }).catch(err => {
      console.log(err)
    });
  }

  render() {

    return (
      <LoginWrap>
        <h1>로그인</h1>
        <LoginForm onSubmit={this.login}>
          <Input type="text" name="email" value={this.state.email} onChange={this.onChangeToState} autoComplete="off" title="이메일" />
          <Input type="password" name="password" value={this.state.password} onChange={this.onChangeToState} autoComplete="off" title="비밀번호" />

          <UtilsWrap>
            <NavLink to="signup">
              회원가입
            </NavLink>
            <a onClick={this.onClickFindPW}>
              비밀번호 찾기
            </a>
          </UtilsWrap>

          <button type="submit">
            {/* <Icon name="arrow>" width="26" height="26" /> */}
            로그인
          </button>
        </LoginForm>
      </LoginWrap>
    )
  }
}