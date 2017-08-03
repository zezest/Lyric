import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

import Pagination from '../../components/Pagination';
import { apiCall } from '../../common';

import {
  Wrap, List
} from './styled';

const ItemWrap = ({ item }) => {
  return (
    <li>
      <Link to={`/detail/${item._id}`}>
        <span>{item.title}</span>
        <span>{moment(item.published_date).format('YYYY-MM-DD')}</span>
      </Link>
    </li>
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
      limit: 2,
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
      <Wrap>
        <h1>리스트</h1>
        <List>
          <li>
            <p>
              <span>제목</span>
              <span>날짜</span>
            </p>
          </li>
          {_.map(list, item => <ItemWrap key={item._id} item={item} />)}
        </List>

        <Pagination total_page={total_page} page={page} has_more={has_more} getPage={this.getLyricList} />
 
      </Wrap>
    )
  }
}