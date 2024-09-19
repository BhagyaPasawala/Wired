import React, { useState } from 'react';

const PhotoUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...newImages]);
  };

  const openFullScreen = (image) => {
    setFullScreenImage(image); 
  };

  const closeFullScreen = () => {
    setFullScreenImage(null); 
  };

  return (
    <div className="photo-upload">
      <h2>Mood board</h2>
      <div className="custom-file-upload">
        <label htmlFor="file-input" className="custom-upload-button">
          Choose Photos
        </label>
        <input id="file-input" type="file" accept="image/*" multiple onChange={handleImageUpload} />
      </div>
      <div className="image-preview">
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded Preview ${index + 1}`}
            style={{ width: `${100 - index * 10}%` }}
            onClick={() => openFullScreen(image)} 
          />
        ))}
      </div>

      {fullScreenImage && (
        <div className="modal" onClick={closeFullScreen}>
          <span className="close" onClick={closeFullScreen}>&times;</span>
          <img className="modal-content" src={fullScreenImage} alt="Full Screen" />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
