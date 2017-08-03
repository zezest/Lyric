import React, { Component } from 'react';
import Modal from './modal';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    })
  }
  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div>
        <p>Main</p>
        <button onClick={this.openModal}>open</button>
        <Modal isOpen={this.state.isOpen} closeModal={this.closeModal} />
      </div>
    )
  }
}