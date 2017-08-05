import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group';

import { FormGroup } from './styled';

const Input = ({ isValid, title, type, name, value, onChange, onFocus, onBlur, placeholder, autoComplete, hint, isShowHint }) => (
  <FormGroup isValid={isValid} isShowHint={isShowHint}>
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autoComplete}
    />
    <p className="Hint">{hint}</p>
    <p className="Title">{title}</p>
    <i className="Bar"></i>
  </FormGroup>
)

Input.propTypes = {
  isValid: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  hint: PropTypes.string,
  isShowHint: PropTypes.bool,
}

export default Group(Input);
