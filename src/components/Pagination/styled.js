import styled from 'styled-components';

export const PaginationWrap = styled.div`
  width: 100%;
  height: 80px;
  position: relative;

  > div {
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const PageBtn = styled.button`
  width: 50px;
  height: 30px;
  font-size: 14px;
  border: 0;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`

export const PageUl = styled.ul`
  display: inline-block;

  li {
    display: inline-block;
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    user-select: none;

    > p {
      width: 26px;
      height: 26px;
      padding-left: 1px;
      font-size: 14px;
      line-height: 26px;
      text-align: center;
      

      &.active {
        line-height: 24px;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }
  }
`