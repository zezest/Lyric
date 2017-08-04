import React, { Component } from 'react';

const Group = WrappedComponet => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false,
      hasHint: false,
      isFocus: false,
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  onFocus = () => {
    console.log('onFocus')
    this.setState({
      isFocus: true
    })
  }

  onBlur = () => {
    this.setState({
      isFocus: false
    })
  }

  onKeyDown = e => {
    console.log(e)
  }

  render() {
    const { isFocus } = this.state;
    const { value } = this.props;

    return (
      <WrappedComponet
        {...this.props} 
        isValid={value || isFocus ? true : false}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        isShowHint={!value && isFocus}
      />
    )
  }
}

export default Group;