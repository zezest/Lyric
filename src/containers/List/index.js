import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

import Pagination from '../../components/Pagination';
import { apiCall } from '../../common';

import {
  Wrap, List, ListTitle, ListItem
} from './styled';

const ItemWrap = ({ item }) => {
  return (
    <ListItem>
      <Link to={`/detail/${item._id}`}>
        <span>{item.title}</span>
        <span>{`${item.length} 조각` || '-'}</span>
        <span>{moment(item.published_date).format('YYYY-MM-DD')}</span>
      </Link>
    </ListItem>
  )
}

export default class Lyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      has_more: false,
      page: 1,
      total: 0,
      total_page: 0,
    }
  }

  componentDidMount() {
    this.getLyricList(1);
  }

  getLyricList = (page = 1) => {
    apiCall.get(`/api/lyrics`, {
      page: page,
      limit: 10,
    }).then(data => {
      this.setState({
        list: data.lyrics,
        has_more: data.has_more,
        page: data.page,
        total: data.total,
        total_page: data.total_page,
      });
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { list, total_page, page, has_more } = this.state;
    return (
      <Wrap style={{paddingBottom: total_page > 1 ? '0' : '80px'}}>
        <h1>리스트</h1>
        <List>
          <ListTitle>
            <p>
              <span>제목</span>
              <span>가사조각</span>
              <span>날짜</span>
            </p>
          </ListTitle>
          {_.map(list, item => <ItemWrap key={item._id} item={item} />)}
        </List>

        {total_page > 1 && <Pagination total_page={total_page} page={page} has_more={has_more} getPage={this.getLyricList} />}
 
      </Wrap>
    )
  }
}