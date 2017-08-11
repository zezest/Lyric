import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  background-color: #fff;
`

export const CheckboxStyled = styled.input.attrs({
  type: "checkbox",
})`
  display: none;

  &:checked + div {
    transform: translate(-50%, -75%) rotate(-45deg);
    width: 80%;
    height: 50%;
    border-color: #009688;
    border-top-style: none;
    border-right-style: none;
  }
`

export const DummyBox = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`