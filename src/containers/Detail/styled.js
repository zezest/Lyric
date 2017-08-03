import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import Sortable from 'react-sortablejs';

export const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: #20305b;
  padding: 20px;
  padding-bottom: 60px;

  > h1 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`

export const LyricWrap = styled(Element)`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0;
  position: relative;

  & + & {
    border-top: 1px solid #e7e7e7;
  }
`

export const ContentTitle = styled.p`
  font-size: 16px;
  margin: 10px 0 20px;
  position: relative;
  bottom: 0px;
`

export const TextTitle = styled.p`
  font-size: 16px;
  margin: 10px 0 10px;
  padding: 0 4px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-color: #20305b;
`

export const TextWrap = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 15px;
  font-size: 15px;
  line-height: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  white-space: pre-wrap;
`

export const CustomBtn = styled.button`
  float: left;
  display: block;
  width: 150px;
  height: 40px;
  margin-bottom: 10px;
  margin-right: 15px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  border: 0 solid;
  outline: 1px solid rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  position: relative;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    text-shadow: 1px 1px 2px #427388;
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    background-color: transparent;
  }

  &:active {
    text-shadow: 0px 0px 2px #427388;
    border: 1px solid;
    box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5);
    outline: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const CustomBtnA = CustomBtn.withComponent(Link);


export const ModalWrap = styled(Sortable)`
  color: #585858;

  > button {
    width: 150px;
    height: 40px;
    color: #585858;
    font-size: 14px;
    border: 1px solid #ebebeb;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #e5f1fe;
    }
  }
`
export const Tag = styled.p`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 7px 10px 3px;
  color: #585858;
  border: 1px solid #dfdfdf;
  cursor: pointer;

  &:hover {
    background-color: #e5f1fe;
  }
`

export const Preview = styled.div`
  padding: 5px;
  color: #585858;
  font-size: 14px;
  white-space: pre-line;
  position: relative;

  &:first-child {
    margin-top: 10px;
  }

  &:hover {
    background-color: #e5f1fe;
  }

  > a {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

  p.Handle {
    color: #2a2a2a;
  }
`