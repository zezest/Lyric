import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  
  > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const LoginForm = styled.form`
  width: 100%;
  height: 35px;
  position: relative;

  > button {
    width: 26px;
    height: 26px;
    border: 0;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);

    &:hover {
      background-color: transparent;
    }
  }
`

export const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 45px 0 10px;
  color: #2a2a2a;
  font-size: 16px;
  border: 1px solid #ebebeb;
`