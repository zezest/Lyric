import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: #20305b;
  padding: 20px;
  padding-bottom: 0;

  > h1 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`

export const List = styled.ul`

  > li {
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
    border-bottom: 1px solid #fff;

    &:first-child, &:last-child {
      border-bottom: 2px solid #fff;
    }

    > p > span, > a > span {
      &:first-child {
        display: inline-block;
        width: 80%;
      }

      &:last-child {
        display: inline-block;
        width: 20%;
        text-align: center;
      }
    }

    > a {
      cursor: pointer;

      &:hover {
        font-weight: 700;
      }
    }
  }
`