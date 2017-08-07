import styled from 'styled-components';

export const SignupForm = styled.form`
  width: 400px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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