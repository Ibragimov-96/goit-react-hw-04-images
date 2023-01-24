import React, { Component } from 'react';
import PropTypes from 'prop-types'
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.HendelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.HendelKeyDown);
  }

  HendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.isOpen();
    }
  };
  CloseModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.isOpen();
    }
  };
  render() {
    return (
      <div onClick={this.CloseModalBackdrop} className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes={
  isOpen:PropTypes.func,
  largeImage:PropTypes.string
}