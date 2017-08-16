import React, { Component } from 'react';

import { apiCall } from '../../common';
import Input from '../../components/TextField/input';

import {
  SignupForm, Submit
} from './styled';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  }

  onChangeToState = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  validate = () => {
    const { name, email, password, password_confirm } = this.state;

    if (email === '') {
      alert('이메일을 입력해주세요.');
      return false;
    }

    if (password === '' || password_confirm === '') {
      alert('비밀번호를 입력해주세요.');
      return false;

    } else if (password !== password_confirm) {
      alert('비밀번호가 같지 않습니다.');
      return false;
    }

    if (name === '') {
      alert('이름을 입력해주세요.');
      return false;
    }

    return true;
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.validate()) return;
    const { name, email, password } = this.state;
    apiCall.post('/api/user/add', {
      email: email,
      password: password,
      name: name,
    }).then(data => {
      alert('회원가입이 완료되었습니다.');
      window.location.href = '/';

    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { name, email, password, password_confirm } = this.state;
    return (
      <SignupForm onSubmit={this.onSubmit}>
        <h1>회원가입</h1>
        <Input type="email" name="email" value={email} onChange={this.onChangeToState} autoComplete="off" title="이메일" hint="lyrics@lyrics.com" />
        <Input type="password" name="password" value={password} onChange={this.onChangeToState} autoComplete="off" title="비밀번호" />
        <Input type="password" name="password_confirm" value={password_confirm} onChange={this.onChangeToState} autoComplete="off" title="비밀번호 확인" />
        <Input type="text" name="name" value={name} onChange={this.onChangeToState} autoComplete="off" title="이름" hint="홍길동" />
        <Submit>가입하기</Submit>
      </SignupForm>
    )
  }
}