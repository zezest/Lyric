import styled from 'styled-components';

export const Header = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #0F162A;
`

export const Menu = styled.ul`
  padding: 10px;
  line-height: 40px;

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      color: #d1d1d1;

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