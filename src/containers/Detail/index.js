import React, { Component } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';

import Modal from './Modal';
import { apiCall } from '../../common';

import {
  Wrap, 
  LyricWrap, ContentTitle, TextTitle, TextWrap, 
  CustomBtn, CustomBtnA
} from './styled';

const LyricItem = ({ idx, lyric }) => (
  <LyricWrap name={`tag_${idx}`}>
    <ContentTitle>{lyric.type}</ContentTitle>
    <TextTitle>text</TextTitle>
    <TextWrap>{lyric.text}</TextWrap>
  </LyricWrap>
)

let textFile = null;

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        lyrics: [],
        patterns: [],
      },
      margeType: '',
      margeText: [],
      isOpen: false,
      isDownload: false,
      fileName: 'Lyric',
    }
  }

  componentDidMount() {
    this.getLyricData(this.props.match.params.id);
  }

  getLyricData = id => {
    apiCall.get(`/api/lyrics/${id}`).then(data => {
      const setData = update(this.state.data, {
        title: {$set: data.title},
        lyrics: {$set: data.lyrics},
        patterns: {$push: data.patterns},
      });

      this.setState({
        data: setData
      }, () => {
        console.log(this.state.data)
        this.setState({ fileName: this.state.data.title });
        this.joinPattern();
      })
    }).catch(err => {
      console.log(err)
      if (err.status === 404) {
        alert('존재하지않는 가사입니다.');
        window.location.href = '/list';
      }
    })
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    })
  }

  onClickTag = (idx, e) => {
    const patterns = _.clone(this.state.data.patterns);
    patterns.push(this.state.data.lyrics[idx]._id);
    
    const setData = update(this.state.data, {
      patterns: {$set: patterns},
    });

    this.setState({
      data: setData
    }, () => {
      this.joinPattern();
    });
  }

  removePattern = (idx, e) => {
    const array = [];
    _.each(this.state.data.patterns, (pattern, key) => {
      if (key === idx) return;
      array.push(pattern);
    })
    console.log(array);
    const setData = update(this.state.data, {
      patterns: {$set: array},
    });

    this.setState({
      data: setData
    }, () => {
      this.joinPattern();
    });
  }

  joinPattern = () => {
    const title = [];
    _.each(this.state.data.patterns, pattern => {
      const lyric = _.find(this.state.data.lyrics, lyric => lyric._id === pattern)
      title.push(lyric.type);
    });
    const margeType = title.join('-') + '\n\n\n';

    const margeText = [];
    _.each(this.state.data.patterns, pattern => {
      const lyric = _.find(this.state.data.lyrics, lyric => lyric._id === pattern)
      const array = [];
      array.push(`<${lyric.type}>\n`)
      array.push(`${lyric.text}\n`)
      array.push('\n')
      margeText.push(array.join(''));
    });

    this.setState({
      margeType: margeType,
      margeText: margeText,
    });
  }

  onChangePattern = (order, sortable, evt) => {
    const { patterns } = this.state.data;
    const array = [];
    
    _.each(order, idx => {
      array.push(patterns[idx])
    });

    const setData = update(this.state.data, {
      patterns: {$set: array},
    });

    this.setState({
      data: setData
    }, () => {
      this.joinPattern();
    });
  }

  makeTextFile = text => {
    const data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  }

  onClickMake = () => {
    this.setState({
      isDownload: true,
    }, () => {
      const link = document.getElementById('downloadlink');
      const text = this.state.margeType + this.state.margeText.join('');
      setTimeout(() => {
        link.href = this.makeTextFile(text);
      }, 100)
    })
  }

  closeModal = () => {
    this.setState({ isOpen: false, isDownload: false, });

    const { id } = this.props.match.params;
    apiCall.put(`/api/lyrics/${id}`, this.state.data).then(data => {
      alert('순서를 저장하였습니다.')

    }).catch(err => {
      console.log(err)
    })
  }

  onClickDelete = () => {
    const { id } = this.props.match.params;

    apiCall.delete(`/api/lyrics/${id}`).then(data => {
      alert('삭제하였습니다.');
      window.location.href = '/list'
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { data, margeText, fileName } = this.state;
    const { title, lyrics, _id, patterns } = data;
    const id = this.props.match.params.id;

    return (
      <Wrap>
        <h1>상세정보</h1>

        <p>{title}</p>

         {_.map(lyrics, (lyric, key) => key !== 0 && <LyricItem key={key} idx={key} lyric={lyric} />)} 
        
        <Modal
          title="순서지정"
          isOpen={this.state.isOpen}
          isDownload={this.state.isDownload}
          closeModal={this.closeModal}
          onClickTag={this.onClickTag}
          onClickMake={this.onClickMake}
          removePattern={this.removePattern}
          onChangePattern={this.onChangePattern}
          lyrics={lyrics}
          fileName={fileName}
          margeText={margeText}
        />
        
        <CustomBtn onClick={this.openModal}>
          순서지정
        </CustomBtn>
        <CustomBtnA to={`/form/${id}`}>
          수정하기
        </CustomBtnA>
        <CustomBtn onClick={this.onClickDelete}>
          삭제하기
        </CustomBtn>
      </Wrap>
    )
  }
}