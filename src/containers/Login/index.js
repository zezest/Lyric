import React, { Component } from 'react';

import Icon from '../../components/Icon';

import { apiCall } from '../../common';

import {
  LoginWrap, LoginForm, PasswordInput
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

  login = e => {
    e.preventDefault();

  }

  render() {

    return (
      <LoginWrap>
        <p>로그인</p>
        <LoginForm onSubmit={this.login}>
          <PasswordInput type="text" name="email" value={this.state.passoword} onChange={this.onChangeToState} />
          <PasswordInput type="text" name="password" value={this.state.passoword} onChange={this.onChangeToState} />
          <PasswordInput type="text" name="name" value={this.state.passoword} onChange={this.onChangeToState} />
          <button type="submit">
            <Icon name="arrow>" width="26" height="26" />
          </button>
        </LoginForm>
      </LoginWrap>
    )
  }
}