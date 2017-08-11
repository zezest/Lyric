import React from 'react';

import {
  LabelStyled, CheckboxStyled, DummyBox
} from './styled';

const Checkbox = ({ title, name, onChange }) => {
  return (
    <LabelStyled>
      <CheckboxStyled name={name} onChange={onChange} />
      <DummyBox />
      {title}
    </LabelStyled>
  )
}

export default Checkbox;