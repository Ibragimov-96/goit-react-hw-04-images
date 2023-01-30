import React, { useState  } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';
// import LiStyle from './ImageGalaryStyle.js'

const GalaryItem =({img})=> {
  // state = {
  //   isOpen: false,
  // };
const [isOpen, setIsOpen]=useState(false)
  // window.removeEventListener('keydown',)
 const onClick = () => {
  setIsOpen(prevState=>!prevState)
    // this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
 

  return (
    <>
      <li
        key={img.id}
        onClick={onClick}
        className="ImageGalleryItem-image"
      >
        <img src={img.webformatURL} alt={img.tags} />
      </li>
      {isOpen && (
        <Modal isOpen={onClick} largeImageURL={img.largeImageURL} />
      )}
    </>
  );
}

export default GalaryItem;
GalaryItem.propTypes = {
  img: PropTypes.object,
};
