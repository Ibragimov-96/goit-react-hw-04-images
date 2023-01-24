import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types'
// import LiStyle from './ImageGalaryStyle.js'

class GalaryItem extends Component {
  state = {
    isOpen: false,
  };

  // window.removeEventListener('keydown',)
  onClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    const image = this.props.img;

    return (
      <>
        <li
          key={image.id}
          onClick={this.onClick}
          className="ImageGalleryItem-image"
        >
          <img src={image.webformatURL} alt={image.tags} />
        </li>
        {this.state.isOpen && (
          <Modal isOpen={this.onClick} largeImageURL={image.largeImageURL} />
        )}
      </>
    );
  }
}

export default GalaryItem;
GalaryItem.propTypes={
  key:PropTypes.string,
  img:PropTypes.object,
}