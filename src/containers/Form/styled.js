import styled from 'styled-components';
import { Element } from 'react-scroll';

export const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
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
          color: #fff;
          font-size: 14px;
          border: 1px solid #fff;
          background-color: rgba(255, 255, 255, 0.1);
          cursor: pointer;
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
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  color: #2a2a2a;
  font-size: 15px;
  border: 1px solid #e7e7e7;
`

export const ContentTitle = styled.p`
  font-size: 16px;
  margin: 10px 0 10px;
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
