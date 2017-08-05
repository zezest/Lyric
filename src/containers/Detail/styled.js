import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

export const Wrap = styled.div`
  width: 900px;
  margin: 0 auto;
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
  margin-right: 15px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  border: 0;
  background-color: #483D8B;
`

export const CustomBtnA = CustomBtn.withComponent(Link);


export const ModalWrap = styled.div`
  color: #585858;

  > button {
    width: 150px;
    height: 40px;
    color: #585858;
    font-size: 14px;
    border: 1px solid #ebebeb;
    background-color: #fff;
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
  user-select: none;

  &:hover {
    background-color: #e5f1fe;
  }
`

export const Preview = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  position: relative;
  border: 1px solid #e5f1fe;

  > a {
    display: inline-block;
    width: 30px;
    position: absolute;
    top: 5px;
    right: 0;
    bottom: 5px;
    cursor: pointer;

    > svg {
      width: 16px;
      height: 16px;
      fill: #ff6666;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease-in-out;    
    }

    &:hover {
      > svg {
        width: 20px;
        height: 20px;
        fill: #ff3333;
      }
    }
  }

  p.Handle {
    display:inline-block;
    width: 30px;
    color: #2a2a2a;
    text-align: center;
    position: absolute;
    top: 5px;
    bottom: 5px;
    cursor: move;
    background-color: #e5f1fe;

    > svg {
      fill: #585858;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      > g {
        > rect {
          transition: all 0.2s ease-in-out;        
        }
      }
    }

    &:hover {
      > svg {
        > g {
          > rect {
            height: 64px !important;

            &:first-child {
              y: 96 !important;
            }

            &:last-child {
              y: 384 !important;
            }
          }
        }
      }
    }
  }

  p.Text {
    display:inline-block;
    padding-left: 40px;
    color: #585858;
    font-size: 14px;
    white-space: pre-line;
  }
`