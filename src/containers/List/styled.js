import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0;

  > h1 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`

export const List = styled.ul`

  li {
    &:first-child, &:last-child {
      border-bottom: 2px solid #414f5c;
    }

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

export const ListTitle = styled.li`
  height: 40px;
  padding: 10px 20px;
  line-height: 20px;
`

export const ListItem = styled.li`
  > a {
    display: block;
    height: 60px;
    margin: 10px 0;
    padding: 10px 20px;
    color: #2a2a2a;
    font-size: 14px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #f1f1f1;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px 3px #95c8ff;
    }
  }
`