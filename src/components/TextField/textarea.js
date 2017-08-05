import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group';

import { FormGroup } from './styled';

const Textarea = ({ isValid, title, name, value, onChange, onFocus, onBlur, onKeyDown, placeholder, hint, isShowHint }) => {
  let textarea;
  let height = 2.1;

  const getHeight = () => {
    let line = value.split('\n').length;
    line = line === 1 ? 2 : line;
    return {height: `${height * (line)}rem`};
  }

  const keyDown = e => {
    const { keyCode } = e;
    if (keyCode === 13) {
      const textareaHeight = textarea.style.height.replace('rem', '');
      textarea.style.height = `${Number(textareaHeight) + 2.1}rem`;
    }
  }

  return (
  <FormGroup isValid={isValid} isShowHint={isShowHint}>
    <textarea 
      ref={ref => ( textarea = ref )}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={getHeight()}
      onKeyDown={keyDown}
    />
    <p className="Hint">{hint}</p>
    <p className="Title">{title}</p>
    <i className="Bar"></i>
  </FormGroup>
)}

Textarea.propTypes = {
  isValid: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  isShowHint: PropTypes.bool,
}

export default Group(Textarea);