import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Icon from '../../components/Icon';

import { auth } from '../../common';

import {
  LoginWrap, LoginForm, PasswordInput
} from './styled';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    auth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <LoginWrap>
        <p>비밀번호 입력</p>
        <LoginForm onSubmit={this.login}>
          <PasswordInput type="text" name="password" value={this.state.passoword} onChange={this.onChangeToState} />
          <button type="submit">
            <Icon name="arrow>" width="26" height="26" />
          </button>
        </LoginForm>
      </LoginWrap>
    )
  }
}