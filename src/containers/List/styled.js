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
  display: flex;
  flex-direction: column;
  margin-top: 80px;

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
  border-radius: 4px;
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

export const SearchBox = styled.div`
  width: 250px;
  position: absolute;
  right: 0;

  > label {
    display: inline-block;
    width: 85%;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  > button {
    color: #fff;
    height: 32px;
    width: 15%;
    background-color: #483D8B;
    cursor: pointer;
    border: 0;
  }
`