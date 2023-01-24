import PropTypes from 'prop-types'
// import{Galary} from './GalaryStyle'
import ImageGalaryItem from '../ImageGalaryItem/ImageGalaryItem';
import { nanoid } from 'nanoid';
const Gallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalaryItem key={nanoid()} img={img} />
      ))}
    </ul>
  );
};

export default Gallery;
ImageGalaryItem.propTypes={
  images: PropTypes.array
}