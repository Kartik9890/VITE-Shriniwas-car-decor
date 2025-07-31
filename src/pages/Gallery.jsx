import React, { useState } from "react";
import "./Gallery.css";
import { galleryImages } from "./galleryData.jsx";

function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="gallery-page">
      <h1>Our Work Gallery</h1>
      <p>
        Take a look at some of our recent car accessory installations and
        customizations.
      </p>

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
