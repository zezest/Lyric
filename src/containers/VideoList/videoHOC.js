import React, { Component } from 'react';

import { apiCall } from '../../common';

 const VideoHOC = WrappedComponent => class extends Component {
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
      videoIdx: 0,
      isOpen: false,
      isLoading: false,
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
    this.setState({
      isLoading: true,
    });

    apiCall.get('/api/video/list', {
      page: page,
      limit: limit,
      keyword: keyword || '',
    }).then(data => {
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

  onClickItem = (idx, e) => {
    this.setState({
      videoIdx: idx,
      isOpen: true,
    }, () => {
      this.scrollTop = document.body.scrollTop;
      this._view.style.top = this.scrollTop + 'px';
      document.body.style['overflow-y'] = 'hidden';
      window.addEventListener('keydown', this.onKeyDown);
    });
  }

  onClickClose = () => {
    this.setState({
      videoIdx: null,
      isOpen: false,
    }, () => {
      this._view.style.top = '-200%';
      document.body.style['overflow-y'] = '';
      window.removeEventListener('keydown', this.onKeyDown);
      document.body.scrollTop = this.scrollTop;
    });
  }

  onKeyDown = e => {
    if (e && (e.keyCode === 27)) {
      this.setState({
        videoIdx: null,
        isOpen: false,
      }, () => {
        this._view.style.top = '-200%';
        document.body.style['overflow-y'] = '';
        window.removeEventListener('keydown', this.onKeyDown);
        document.body.scrollTop = this.scrollTop;
      });
    }
  }

  onChangeIdx = idx => {
    this.setState({
      videoIdx: idx
    });
  }
  
  render() {
    return (
      <WrappedComponent
        {...this.state}
        {...this.props}
        viewRef={ref => this._view = ref}
        onChangePage={this.onChangePage}
        onClickItem={this.onClickItem}
        onClickClose={this.onClickClose}
        onChangeIdx={this.onChangeIdx} />
    )
  }
}

export default VideoHOC;