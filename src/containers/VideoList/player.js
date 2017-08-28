import React, { Component } from 'react';
import Player from '@vimeo/player';

import {
  PlayerWrap, VideoIframe,
} from './styled';

export default class VimeoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.init();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  onFullScreen = () => {
    const { idx } = this.props;
    const i = document.getElementById('iframe_vimeo');
    
    // go full-screen
    if (i.requestFullscreen) {
      i.requestFullscreen();
    } else if (i.webkitRequestFullscreen) {
      i.webkitRequestFullscreen();
    } else if (i.mozRequestFullScreen) {
      i.mozRequestFullScreen();
    } else if (i.msRequestFullscreen) {
      i.msRequestFullscreen();
    }
  }

  render() {
    const { item, idx } = this.props;
    return (
      <PlayerWrap>
        <h1>{item.name}</h1>
        <VideoIframe 
          url={item.video_url}
          name={item.name}
          id="iframe_vimeo" />
        <button onClick={this.onFullScreen}>전체화면</button>
      </PlayerWrap>
    )
  }
}