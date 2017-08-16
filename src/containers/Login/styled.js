import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  
  > h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const LoginForm = styled.form`
  width: 100%;
  position: relative;

  > button {
    width: 100%;
    height: 45px;
    color: #fff;
    font-size: 16px;
    border: 0;
    background-color: #483D8B;

    &:hover {
      background-color: #483D8B;
    }
  }
`

export const UtilsWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;

  a {
    font-size: 14px;
    cursor: pointer;
  }
`