import Carousel from 'better-react-carousel';
import React from 'react';

const Gallery = () => {
  return (
    <>
      <Carousel cols={3} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/19/07/43/rose-3412884_640.jpg"
            alt="rose"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        {/* Add more Carousel.Item for more images */}
      </Carousel>
    </>
  );
};

export default Gallery;
