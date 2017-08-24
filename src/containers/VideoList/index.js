import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { apiCall } from '../../common';
import Pagination from '../../components/Pagination';

import {
  Wrap, VideoList, Item, InfoWrap
} from './styled';

export default class Vedio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keyword: '',
      page: 1,
      limit: 9,
      total: 0,
      total_page: 0,
      has_more: false,
    }
  }
  componentDidMount() {
    this._isMount = true;
    const { search } = this.props.location;
    const pageStr = Number(search.substring(1).split('=')[1]);
    this.getVideos(pageStr || 1);
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  getVideos = (page = 1) => {
    const { limit, keyword } = this.state;
    apiCall.get('/api/video/list', {
      page: page,
      limit: limit,
      keyword: keyword || '',
    }).then(data => {
      console.log(data);
      this.setState({
        data: data.data,
        page: data.page,
        limit: data.limit,
        total: data.total,
        total_page: data.total_page,
        has_more: data.has_more,
      });
    }).catch(err => {
      console.log(err)
    });
  }

  onChangePage = page => {
    const { history, location } = this.props;
    const { pathname } = location;
    this.setState({
      page: page
    }, () => {
      history.push({
        pathname: pathname,
        search: `?page=${this.state.page}` 
      });
      this.getVideos(this.state.page);
    });
  }
  
  render() {
    const { data, page, total_page, has_more } = this.state;
    return (
      <Wrap>
        <h1>비디오 리스트</h1>
        <VideoList>
          {_.map(data, (item, key) => {
            return (
              <Item key={key}>
                <img src={item.thumbnail_img.link} />
                <InfoWrap>
                  <p>{item.name}</p>
                  <p>{moment(item.save_date).format('YYYY.MM.DD')}</p>
                </InfoWrap>
              </Item>
            )
          })}
        </VideoList>
        {total_page > 1 && <Pagination total_page={total_page} page={page} has_more={has_more} getPage={this.onChangePage} />}
      </Wrap>
    )
  }
}