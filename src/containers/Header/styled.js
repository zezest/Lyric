import styled from 'styled-components';

export const HeaderNav = styled.nav`
  display: flex;
  width: 100%;
  min-width: 900px;
  height: 60px;
  padding: 0 10px;  
  line-height: 60px;
  background-color: #483D8B;
  justify-content: space-between;
  position: relative;

  > a {
    margin: 0 20px 0 10px;
    color: #fff;
    position: absolute;
    right: 0;
  }
`

export const Menu = styled.ul`
  display: flex;

  li {

    &.Logo {
      h1 {
        font-size: 20px;
      }
    }

    a {
      display: block;
      padding: 0 20px;
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

export const LoginWrap = styled.div`
  
  a {
    display: block;
    padding: 0 20px;
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
`