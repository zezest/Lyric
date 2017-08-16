import styled from 'styled-components';

export const Wrap = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0;

  > h1 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    > p > span, > a > span {
      &:first-child {
        display: inline-block;
        width: 60%;
      }

      &:nth-child(2) {
        display: inline-block;
        width: 20%;
        text-align: center;
      }

      &:last-child {
        display: inline-block;
        width: 20%;
        text-align: center;
      }
    }
  }
`

export const ListItem = styled.li`
  display: flex;
  margin: 10px 0;
  border-radius: 2px;
  background-color: #f1f1f1;
  line-height: 40px;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 10px 3px #95c8ff;
  }

  > div {
    flex-basis: 60px;
    position: relative;

    > label {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  > a {
    width: 100%;
    height: 60px;
    padding: 10px 20px 10px 0;
    color: #2a2a2a;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const SearchBox = styled.form`
  display: flex;
  height: 60px;
  margin: 20px 0;
  justify-content: space-between;
  position: relative;

  > input {
    width: 100%;
    font-size: 27px;
    border: 0;
    border-bottom: 3px solid #483D8B;
  }

  > button {
    height: 100%;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 0;

    > svg {
      fill: #483D8B;
    }
  }
`

export const UtilsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  > button {
    width: 200px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    border: 0;
    background-color: #483D8B;

    &:disabled {
      color: #aaa;
      background-color: #f1f1f1;
    }
  }
  
  > a {
    width: 50px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    line-height: 42px;
    text-align: center;
    background-color: #483D8B;
  }
`