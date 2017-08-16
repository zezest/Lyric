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

  onFocus = () => {
    this.setState({
      isFocus: true
    })
  }

  onBlur = () => {
    this.setState({
      isFocus: false
    })
  }

  render() {
    const { isFocus } = this.state;
    const { value } = this.props;
    console.log(value)
    console.log(this.props.type)
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