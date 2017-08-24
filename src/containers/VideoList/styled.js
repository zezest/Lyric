import styled from 'styled-components';

export const Wrap = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0;

  > h1 {
    margin-bottom: 20px;
    font-size: 20px;
  }
`

export const VideoList = styled.div`
  width: 100%;
`

export const Item = styled.div`
  display: inline-block;
  width: 275px;
  margin-bottom: 30px;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 3px rgba(0,0,0, 0.1);
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 10px 3px rgba(149,200,255, 0.8);
  }

  & + div {
    margin-left: 17.5px;
  }

  &:nth-child(4), &:nth-child(7) {
    margin-left: 0;
  }

  > img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
  }
`

export const InfoWrap = styled.div`
  padding: 20px 10px;
  line-height: 20px;
  color: #2a2a2a;
  font-size: 15px;

  p {
    &:last-child {
      color: #aaa;
      font-size: 13px;
    }
  }
`