import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import {
  Header, Body, Footer
} from './styled';
const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.7)'
  },
  content : {
    width: '500px',
    height: '450px',
    top: '50%',
    left: '50%',
    right: '0',
    bottom: '0',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  }
};

const Modal = WrappedComponet => class extends Component {
  static propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    isAlert: PropTypes.bool,
    isDownload: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    alertBtnName: PropTypes.string,
    alertClick: PropTypes.func,
    fileName: PropTypes.string,
  }

  static defaultProps = {
    title: 'Title',
    alertBtnName: '확인',
    isAlert: false,
    isDownload: false,
    fileName: 'Lyric',
  }

  render() {
    const { title, isOpen, isDownload, closeModal, isAlert, alertBtnName, alertClick, fileName } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Modal"
      > 
        <Header>
          <h1>{title}</h1>
        </Header>
        <Body>
          <WrappedComponet {...this.props} />
        </Body>
        <Footer isAlert={isAlert || isDownload}>
          {isAlert && <button onClick={alertClick}>{alertBtnName}</button>}
          {isDownload && <a id="downloadlink" download={`${fileName}.txt`}>다운로드</a>}
          <button onClick={closeModal}>닫기</button>
        </Footer>
      </ReactModal>
    )
  }
}

export default Modal;