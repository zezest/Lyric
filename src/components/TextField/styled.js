import styled from 'styled-components';
export const FormGroup = styled.label`
  display: block;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
  position: relative;

  input, textarea {
    display: block;
    background: none;
    padding: 2px 2px 1px;
    font-size: 1.2rem;
    border: 0 solid transparent;
    line-height: 2.5rem;
    width: 100%;
    color: #2a2a2a;
    // transition: all 0.1s ease-out;
    outline: none;
  }

  .Title {
    padding: 2px 2px 1px;
    color: ${props => props.isValid ? '#483D8B' : '#585858'};
    font-size: ${props => props.isValid ? '1' : '1.2'}rem;
    position: absolute;
    top: ${props => props.isValid ? '-1.2' : '0.7'}rem;
    transition: all 0.28s ease
  }

  .Hint {
    padding-left: 2px;
    color: #aaa;
    position: absolute;
    top: 0.7rem;
    z-index: -1;
    opacity: ${props => props.isShowHint ? '1' : '0'};
    transform: translateX(${props => props.isShowHint ? '0' : '20px'});
    transition: all 0.28s ease-out;
    white-space: pre-wrap;
  }

  .Bar {
    position: relative;
    border-bottom: 0.0625rem solid #585858;
    display: block;

    &::before {
      content: '';
      height: 0.125rem;
      width: ${props => props.isValid ? '100%' : '0'};
      left: ${props => props.isValid ? '0' : '50%'};
      bottom: -0.0625rem;
      position: absolute;
      background-color: #483D8B;
      transition: left 0.28s ease, width 0.28s ease;
      z-index: 2;
    }
  }
`
