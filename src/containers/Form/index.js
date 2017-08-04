import React, { Component } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';
import { scroller, Link } from 'react-scroll';

import { apiCall } from '../../common';

import {
  Wrap, LyricFormWrap,
  ContentTitle, Input,
  LyricWrap,
  CustomBtn,
} from './styled';

const LyricItem = ({ idx, lyric, onChangeLyric, removeType }) => (
  <LyricWrap name={`tag_${idx}`}>
    <p onClick={removeType.bind(null, lyric)}>x</p>
    <ContentTitle>type</ContentTitle>
    <Input type="text" name="type" value={lyric.type} onChange={onChangeLyric.bind(null, idx)} autoComplete="off" />
    <ContentTitle>text</ContentTitle>
    <textarea name="text" value={lyric.text} onChange={onChangeLyric.bind(null, idx)} />
  </LyricWrap>
)

export default class LyricForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        lyrics: [
          {type:'intro', text:''},
          {type:'', text:''},
        ],
      },
      isEdit: false,
    }
  }

  componentDidMount() {
    this._isMount = true;

    if (this.props.match.params.id) {
      this.setState({
        isEdit: true,
        id: this.props.match.params.id
      }, () => {
        this.getLyricData(this.state.id)
      })
    }
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id) {
      this.setState({
        isEdit: true,
        id: nextProps.match.params.id
      }, () => {
        this.getLyricData(this.state.id)
      });

    } else {
      this.setState({
        data: {
          title: '',
          lyrics: [
            {type:'intro', text:''}
          ],
        },
        isEdit: false,
      });
    }
  }

  getLyricData = id => {
    apiCall.get(`/api/lyrics/${id}`).then(data => {
      this.setState({
        data: data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  onChangeToState = e => {
    const { name, value } = e.target;
    const setData = update(this.state.data, {
      [name]: {$set: value},
    });
    
    this.setState({
      data: setData
    });
  }

  onChangeLyric = (idx, e) => {
    const { name, value } = e.target;
    const lyrics = _.clone(this.state.data.lyrics);
    
    lyrics[idx][name] = value;

    const setData = update(this.state.data, {
      lyrics: {$set: lyrics},
    });
    
    this.setState({
      data: setData
    })
  }

  makeLyricItem = () => ({
    type: '',
    text: '',
  })

  addForm = () => {
    const lyrics = _.clone(this.state.data.lyrics);
    lyrics.push(this.makeLyricItem())
    
    const setData = update(this.state.data, {
      lyrics: {$set: lyrics},
    });

    this.setState({
      data: setData
    })
  }

  removeType = (lyric, e) => {
    const data = _.without(this.state.data.lyrics, lyric);
    const setData = update(this.state.data, {
      lyrics: {$set: data},
    });
    
    this.setState({
      data: setData
    })
  }

  onClickTag = (idx, e) => {
    scroller.scrollTo(`tag_${idx}`, {
      duration: 500,
      smooth: 'easeInOutQuint',
    });
  }

  validate = () => {
    const { title, lyrics } = this.state.data;
    
    if (title === '') {
      alert('제목을 입력해주세요.');
      return false;
    }

    let msg = '';
    let validate = true;

    _.each(lyrics, (lyric, key) => {
      if (key !== 0) {
        if (lyric.type === '') {
          msg = 'Type을 입력해주세요.';
          validate = false;
          return false;
        }

        if (lyric.text === '') {
          msg = 'Text를 입력해주세요.';
          validate = false;
          return false;
        }

        _.each(lyrics, (lyric2, key2) => {
          if (key !== key2 && lyric.type === lyric2.type) {
            msg = '중복된 Type명이 있습니다.';
            validate = false;
            return false;
          }
        });
      }
    });

    if (!validate) {
      alert(msg)
      return false;
    }

    if (lyrics.length <= 0) {
      alert('Type을 하나이상 만들어주세요.');
      return false;
    }

    return true;
  }

  sendForm = e => {
    e.preventDefault();
    if (!this.validate()) return;
    const { isEdit, id } = this.state;
    if (isEdit) {
      apiCall.put(`/api/lyrics/${id}`, this.state.data).then(data => {
        alert('수정하였습니다.')
        window.location.href = '/list';

      }).catch(err => {
        console.log(err)
      })

    } else {
      apiCall.post('/api/lyrics', this.state.data).then(data => {
        alert('등록에 성공하였습니다.')
        window.location.href = '/list';

      }).catch(err => {
        console.log(err)
      })

    }
  }

  render() {
    const { data, isEdit } = this.state;
    const { title, lyrics } = data;

    return (
      <Wrap>
        <LyricFormWrap onSubmit={this.sendForm}>
          <div className="Header" ref={ref => { this._header = ref }}>
            <h1>가사추가</h1>
            <p>-목록-</p>
            <div className="List--wrap">
              <ul className="List">
                {lyrics.map((lyric, key) => 
                  <li key={key} onClick={this.onClickTag.bind(null, key)}>
                    <Link
                      activeClass="active"
                      className={`tag_${key}`}
                      to={`tag_${key}`}
                      spy={true}
                      isDynamic={true}
                      smooth="easeInOutQuint"
                      duration={500}
                    >
                      {lyric.type}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="Btn">
                <CustomBtn type="button" onClick={this.addForm}>타입추가</CustomBtn>
              </div>
            </div>
            <ContentTitle>제목</ContentTitle>
            <Input type="text" name="title" value={title} onChange={this.onChangeToState} autoComplete="off" />
          </div>

          <div className="Body">
            {_.map(lyrics, (lyric, key) => 
              key !== 0 && <LyricItem key={key} idx={key} lyric={lyric} onChangeLyric={this.onChangeLyric} removeType={this.removeType} />
            )}
           
            <CustomBtn type="submit">{isEdit ? '수정완료' : '등록하기'}</CustomBtn>
          </div>
        </LyricFormWrap>
      </Wrap>
    )
  }
}