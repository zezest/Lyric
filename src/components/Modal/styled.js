import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  line-height: 50px;

  > h1 {
    color: #2a2a2a;
    font-size: 20px;
  }
`

export const Body = styled.div`
  width: 100%;
  height: 350px;
  padding: 0px 20px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  transition: all 1s ease-in-out;

  > button, > a {
    width: ${props => props.isAlert ? '50%' : '100%'};
    height: 100%;
    color: #585858;
    font-size: 14px;
    border: 0;
    border-top: 1px solid #ebebeb;
    background-color: transparent;
    outline: none;
    cursor: pointer;

    & + button {
      border-left: 1px solid #ebebeb;
    }

    &:hover {
      background-color: #e5f1fe;
    }
  }

  > a {
    display: inline-block;
    line-height: 50px;
    text-align: center;
  }
`