import React, {useEffect } from 'react';
import PropTypes from 'prop-types'
export const Modal=({isOpen, largeImageURL})=>  {
 
  useEffect(()=>{
    const hendelKeyDown = e => {
      if (e.code === 'Escape') {
        isOpen();
      }
    };
    window.addEventListener('keydown', hendelKeyDown)
return ()=>{ window.removeEventListener('keydown', hendelKeyDown);}},[isOpen])
 
  const closeModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      isOpen();
    }
  };
  return (
    <div onClick={closeModalBackdrop} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
Modal.propTypes={
  isOpen:PropTypes.func,
  largeImage:PropTypes.string
}