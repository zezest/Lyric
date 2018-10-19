import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Pagination from '../../components/Pagination';

import Player from './player';
import HOC from './videoHOC';

import {
  Wrap, Viewer, CloseBtn, VideoList, Item, InfoWrap
} from './styled';

const View = ({
  data, page, total_page, has_more, isOpen, videoIdx,
  onChangePage, onClickItem, onClickClose, onChangeIdx, onKeyDown,
  viewRef,
}) => (
  <Wrap>
    <h1>비디오 리스트</h1>

    <Viewer innerRef={viewRef}>
      <CloseBtn type="button" onClick={onClickClose}>CLOSE</CloseBtn>
      {isOpen && <Player item={data[videoIdx]} onChangeIdx={onChangeIdx} />}
    </Viewer>

    <VideoList>
      {_.map(data, (item, key) =>
        <Item key={key} onClick={onClickItem.bind(null, key)}>
          <img src={item.thumbnail_img.link} />
          <InfoWrap>
            <p>{item.name}</p>
            <p>{moment(item.save_date).format('YYYY.MM.DD')}</p>
          </InfoWrap>
        </Item>
      )}
    </VideoList>

    {total_page > 1 && <Pagination total_page={total_page} page={page} has_more={has_more} getPage={onChangePage} />}
  </Wrap>
)

export default HOC(View);