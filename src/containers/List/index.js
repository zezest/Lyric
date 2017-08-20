import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

import { apiCall } from '../../common';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';
import Input from '../../components/TextField/input';
import Checkbox from '../../components/Checkbox';

import {
  Wrap, List, ListItem, Header, UtilsWrap, SearchBox
} from './styled';

const ItemWrap = ({ item, checked, onChecked }) => {
  return (
    <ListItem>
      <div>
        {item.patterns.length > 0 && <Checkbox name="send_items" onChange={onChecked.bind(this, item)} checked={checked} />}
      </div>
      <Link to={`/detail/${item._id}`}>
        <span>{item.title}</span>
        <span>{`${item.lyrics.length - 1 || 0} 조각` || '-'}</span>
        <span>{moment(item.published_date).format('YYYY-MM-DD')}</span>
      </Link>
    </ListItem>
  )
}

export default class Lyric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      has_more: false,
      page: 1,
      total: 0,
      total_page: 0,
      search: '',
      send_items: [],
      send_lyrics: '',
    }
  }

  componentDidMount() {
    const { search } = this.props.location;
    const pageStr = Number(search.substring(1).split('=')[1]);
    this.getLyricList(pageStr || 1);
  }

  getLyricList = (page = 1) => {
    apiCall.get(`/api/lyrics`, {
      search: this.state.search || '',
      page: page,
      limit: 10,
    }).then(data => {
      this.setState({
        lists: data.lists,
        has_more: data.has_more,
        page: data.page,
        total: data.total,
        total_page: data.total_page,
      }, () => {
        const { history, location } = this.props;
        const { pathname } = location;
        history.push({
          pathname: pathname,
          search: `?page=${this.state.page}` 
        });
      });
    }).catch(err => {
      console.log(err);
    })
  }

  onChangeToState = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  onChecked = (item, e) => {
    const { name, checked } = e.target;
    let sendItems = _.clone(this.state.send_items);

    if (checked) {
      sendItems.push(item);
    } else if (!checked) {
      sendItems = _.without(this.state.send_items, item);
    }

    this.setState({
      send_items: sendItems
    }, () => {
      console.log(this.state.send_items)
      this.joinPattern()
    })
  }

  joinPattern = () => {
    const eachLyrics = [];
    _.each(this.state.send_items, items => {
      const title = [];
      _.each(items.patterns, pattern => {
        const lyric = _.find(items.lyrics, lyric => lyric._id === pattern)
        title.push(lyric.type);
      });
      const margeType = title.join('-') + '\n\n\n';

      const margeText = [];
      _.each(items.patterns, pattern => {
        const lyric = _.find(items.lyrics, lyric => lyric._id === pattern)
        const array = [];
        array.push(`<${lyric.type}>\n`)
        array.push(`${lyric.text}\n`)
        array.push('\n')
        margeText.push(array.join(''));
      });

      eachLyrics.push(items.title + '\n' + margeType + margeText.join(''))
    });

    this.setState({
      send_lyrics: eachLyrics.join('\n\n---\n')
    });
  }

  onClickSend = e => {
    if (this.state.send_lyrics === '') return alert('내보낼 가사를 선택해주세요.');
    
    apiCall.post('/api/lyrics/send', { lyrics: this.state.send_lyrics }).then(data => {
      alert('메일로 가사가 전송되었습니다');
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  onSubmitSearch = e => {
    e.preventDefault();
    this.getLyricList();
  }

  render() {
    const { lists, total_page, page, has_more, search, checked, send_items } = this.state;
    return (
      <Wrap style={{paddingBottom: total_page > 1 ? '0' : '80px'}}>
        
        <Header>
          <h1>리스트</h1>
          <SearchBox onSubmit={this.onSubmitSearch}>
            <input type="text" name='search' value={search} autoComplete="off" onChange={this.onChangeToState} placeholder="제목으로 검색" /> 
            <button type="submit">
              <Icon name="arrow>" width="26" height="26" />
            </button>
          </SearchBox>
          <UtilsWrap>
            <button type="button" onClick={this.onClickSend} disabled={send_items.length <= 0}>
              선택 가사 이메일 내보내기
            </button>
            <NavLink activeClassName="active" to="/form">추가</NavLink>
          </UtilsWrap>
        </Header>

        <List>
          {_.map(lists, item => <ItemWrap key={item._id} item={item} checked={checked} onChecked={this.onChecked} />)}
        </List>

        {total_page > 1 && <Pagination total_page={total_page} page={page} has_more={has_more} getPage={this.getLyricList} />}
 
      </Wrap>
    )
  }
}