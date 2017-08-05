import styled from 'styled-components';
import { Element } from 'react-scroll';

export const Wrap = styled.div`
  width: 900px;
  margin: 0 auto;
`

export const LyricFormWrap = styled.form`
  width: 100%;
  padding: 10px 0;

  .Header {
    width: 100%;
    max-width: 900px;
    padding: 20px;
    border-bottom: 1px solid #f1f1f1;
    top: 60px;

    h1 {
      margin-bottom: 20px;
      font-size: 18px;
    }

    .List--wrap {
      position: relative;

      .List {
        min-height: 40px;
        margin-top: 10px;
        padding-right: 150px;
        line-height: 40px;
        word-break: break-all;

        li {
          list-style: none;
          display: inline;
          margin-right: 10px;
          padding: 5px 10px;
          color: #483D8B;
          font-size: 14px;
          border: 1px solid #483D8B;
          background-color: rgba(255, 255, 255, 0.1);
          cursor: pointer;

          &:hover {
            background-color: #e5f1fe;
          }
        }
      }

      .Btn {
        width: 150px;
        height: 40px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
      }
    }
  }

  .Body {
    padding: 0 20px;
  }
`

export const LyricWrap = styled(Element)`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0;
  
  & + & {
    border-top: 1px solid #e7e7e7;
  }

  > button {
    width: 45px;
    height: 30px;
    color: #fff;
    font-size: 14px;
    border: 0;
    background-color: #483D8B;
    cursor: pointer;
    float: right;
  }
`


export const CustomBtn = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 14px;
  border: 0;
  background-color: #483D8B;
  cursor: pointer;
`
