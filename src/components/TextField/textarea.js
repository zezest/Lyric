import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group';

import { FormGroup } from './styled';

const Textarea = ({ isValid, title, name, value, onChange, onFocus, onBlur, onKeyDown, placeholder, hint, isShowHint }) => {
  console.log(isValid)
  return (
  <FormGroup isValid={isValid} isShowHint={isShowHint}>
    <textarea 
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
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