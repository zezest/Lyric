import styled from 'styled-components';
export const FormGroup = styled.label`
  display: block;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  position: relative;

  input, textarea {
    display: block;
    background: none;
    padding: 2px 2px 1px;
    font-size: 1rem;
    border: 0 solid transparent;
    line-height: 2rem;
    width: 100%;
    color: #2a2a2a;
    transition: all 0.28s ease;
    outline: none;
  }

  .Title {
    color: ${props => props.isValid ? '#483D8B' : '#585858'};
    font-size: ${props => props.isValid ? '1' : '1.2'}rem;
    position: absolute;
    top: ${props => props.isValid ? '-1' : '0.5'}rem;
    transition: all 0.28s ease
  }

  .Hint {
    padding-left: 2px;
    color: #aaa;
    position: absolute;
    top: 0.6rem;
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


// export const FormGroup = styled.div`
//   margin-top: 2.25rem;
//   margin-bottom: 2.25rem;
//   position: relative;

//   input {
//     height: 1.9rem;
//   }

//   textarea {
//     resize: none;
//   }

//   input, textarea {
//     display: block;
//     background: none;
//     padding: 0.125rem 0.125rem 0.0625rem;
//     font-size: 1rem;
//     border-width: 0;
//     border-color: transparent;
//     line-height: 1.9;
//     width: 100%;
//     color: transparent;
//     transition: all 0.28s ease;
//     box-shadow: none;

//     &:focus {
//       outline: none;

//       & ~.control-label {
//         color: #337ab7;
//       }

//       & ~ .bar::before {
//         width: 100%;
//         left: 0;
//       }
//     }

//     &:focus, &:valid {
//       color: #333;

//       & ~ .control-label {
//         font-size: 0.8rem;
//         color: gray;
//         top: -1rem;
//         left: 0;
//       }
//     }
//   }

//   .control-label {
//     position: absolute;
//     top: 0.25rem;
//     pointer-events: none;
//     padding-left: 0.125rem;
//     z-index: 1;
//     color: #b3b3b3;
//     font-size: 1rem;
//     font-weight: normal;
//     transition: all 0.28s ease;
//   }

//   .bar {
//     position: relative;
//     border-bottom: 0.0625rem solid #999;
//     display: block;

//     &::before {
//       content: '';
//       height: 0.125rem;
//       width: 0;
//       left: 50%;
//       bottom: -0.0625rem;
//       position: absolute;
//       background: #337ab7;
//       transition: left 0.28s ease, width 0.28s ease;
//       z-index: 2;
//     }
//   }
// `