import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

import Pagination from '../../components/Pagination';
import Input from '../../components/TextField/input';
import Checkbox from '../../components/Checkbox';
import { apiCall } from '../../common';

import {
  Wrap, List, ListItem, Header, SearchBox
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
      keyword: '',
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

    this.setState({keyword: value});
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
      send_lyrics: eachLyrics.join('\n\n')
    });
  }

  onClickSend = e => {
    if (this.state.send_lyrics === '') return alert('내보낼 가사를 선택해주세요.');
    
    apiCall.post('/api/lyrics/send', {lyrics: this.state.send_lyrics}).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  onKeyDownValue = e => {
    e.keyCode === 13 ? this.onClickSearch() : null;
  }

  onClickSearch = () => {
    const { keyword } = this.state;
    if(keyword.length > 0) {
      apiCall.get(`/api/lyrics/title/${keyword}`, {
        limit: 10,
      }).then(data => {
        this.setState({
          lists: data.lyrics,
          has_more: data.has_more,
          page: data.page,
          total: data.total,
          total_page: data.total_page,
        });
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.getLyricList();
    }
    
  }

  render() {
    const { lists, total_page, page, has_more, keyword, checked } = this.state;
    return (
      <Wrap style={{paddingBottom: total_page > 1 ? '0' : '80px'}}>
        
        <Header>
          <h1>리스트</h1>
          <button type="button" onClick={this.onClickSend}>선택 가사 이메일 내보내기</button>
          <SearchBox onKeyDown={this.onKeyDownValue}>
            <Input type="text" name='search' title="Search" value={keyword} autoComplete="off" onChange={this.onChangeToState} ></Input> 
            <button onClick={this.onClickSearch}>검색</button>
          </SearchBox>
        </Header>

        <List>
          {_.map(lists, item => <ItemWrap key={item._id} item={item} checked={checked} onChecked={this.onChecked} />)}
        </List>

        {total_page > 1 && <Pagination total_page={total_page} page={page} has_more={has_more} getPage={this.getLyricList} />}
 
      </Wrap>
    )
  }
}