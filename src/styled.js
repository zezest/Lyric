import styled from 'styled-components';

export const Header = styled.nav`
  width: 100%;
  min-width: 900px;
  height: 60px;
  line-height: 60px;
  background-color: #483D8B;
  position: relative;

  > a {
    margin: 0 20px 0 10px;
    color: #fff;
    position: absolute;
    right: 0;
  }
`

export const Menu = styled.ul`
  display: inline-block;
  margin-right: 10px;
  padding: 10px;
  line-height: 40px;

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      color: #d1d1d1;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
      
      &.active {
        color: #fff;
        font-weight: 700;
      }
    }
  }
`