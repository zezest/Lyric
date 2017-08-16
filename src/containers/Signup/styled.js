import styled from 'styled-components';

export const SignupForm = styled.form`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const Submit = styled.button.attrs({
  type: "submit",
})`
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 16px;
  border: 0;
  background-color: #483D8B;
  cursor: pointer;
`