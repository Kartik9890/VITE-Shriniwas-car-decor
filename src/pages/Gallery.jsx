import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  {
    src: 'https://source.unsplash.com/800x600/?car-interior',
    alt: 'Car Interior'
  },
  {
    src: 'https://source.unsplash.com/800x600/?ambient-lighting',
    alt: 'Ambient Lighting'
  },
  {
    src: 'https://source.unsplash.com/800x600/?car-seat-cover',
    alt: 'Seat Covers'
  },
  {
    src: 'https://source.unsplash.com/800x600/?dashboard',
    alt: 'Dashboard Polish'
  },
  {
    src: 'https://source.unsplash.com/800x600/?car-audio',
    alt: 'Audio System'
  },
  {
    src: 'https://source.unsplash.com/800x600/?reverse-camera',
    alt: 'Reverse Camera'
  }
];

function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="gallery-page">
      <h1>Our Work Gallery</h1>
      <p>Take a look at some of our recent car accessory installations and customizations.</p>

      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="gallery-img"
            onClick={() => setModalImage(img.src)}
          />
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Zoomed In" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
