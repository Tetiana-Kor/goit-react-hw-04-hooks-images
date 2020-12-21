import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map((image, index) => {
          return (
            <ImageGalleryItem
              src={image.webformatURL}
              alt={image.tags}
              largeImageURL={image.largeImageURL}
              key={index}
            />
          );
        })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
