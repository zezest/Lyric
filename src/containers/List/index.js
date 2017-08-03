import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

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
    }
  }

  componentDidMount() {
    this.getLyricList();
  }

  getLyricList = () => {
    apiCall.get('/api/lyrics').then(data => {
      this.setState({
        list: data
      });
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { list } = this.state;
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
      </Wrap>
    )
  }
}