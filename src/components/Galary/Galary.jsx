import PropTypes from 'prop-types';
// import{Galary} from './GalaryStyle'
import ImageGalaryItem from '../ImageGalaryItem/ImageGalaryItem';

const Gallery = ({ images }) => {
  
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalaryItem key={img.id} img={img} />
      ))}
    </ul>
  );
};

export default Gallery;
ImageGalaryItem.propTypes = {
  images: PropTypes.array,
};
