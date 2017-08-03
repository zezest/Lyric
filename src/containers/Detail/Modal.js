import React from 'react';
import _ from 'lodash';
import Modal from '../../components/Modal';
import Icon from '../../components/Icon';

import {
  ModalWrap, Tag, Preview
} from './styled';

const SetPattern = ({ lyrics, margeText, onClickTag, removePattern, onChangePattern, onClickMake }) => {
  return (
    <ModalWrap
      options={{
        draggable: '.Text',
        handle: '.Handle',
        animation: 150,
      }}
      onChange={onChangePattern}
    >
      {_.map(lyrics, (lyric, key) => <Tag key={key} onClick={onClickTag.bind(null, key)}>{lyric.type}</Tag>)}

      {_.map(margeText, (text, key) => 
        <Preview className="Text" key={key} data-id={key}>
          <p className="Handle">O</p>
          {text}
          <a onClick={removePattern.bind(null, key)}>
            <Icon name="x" width="10" height="10" />
          </a>
        </Preview>
      )}
      <button type="button" onClick={onClickMake}>TEXT 파일 생성</button>
    </ModalWrap>
  )
}

export default Modal(SetPattern);