import React from 'react';
import _ from 'lodash';
import Sortable from 'react-sortablejs';

import Modal from '../../components/Modal';
import Icon from '../../components/Icon';

import {
  ModalWrap, Tag, Preview
} from './styled';

const SetPattern = ({ lyrics, margeText, onClickTag, removePattern, onChangePattern, onClickMake }) => {
  return (
    <ModalWrap>
      {_.map(lyrics, (lyric, key) => <Tag key={key} onClick={onClickTag.bind(null, key)}>{lyric.type}</Tag>)}

      <Sortable
        options={{
          draggable: '.Text',
          handle: '.Handle',
          animation: 150,
        }}
        onChange={onChangePattern}
      >
        {_.map(margeText, (text, key) => 
          <Preview className="Text" key={key} data-id={key}>
            <p className="Handle">
              <Icon name="handle" width="15" height="15" />
            </p>
            <p className="Text">{text}</p>
            <a onClick={removePattern.bind(null, key)}>
              <Icon name="bin" />
            </a>
          </Preview>
        )}
      </Sortable>
      <button type="button" onClick={onClickMake}>TEXT 파일 생성</button>
    </ModalWrap>
  )
}

export default Modal(SetPattern);