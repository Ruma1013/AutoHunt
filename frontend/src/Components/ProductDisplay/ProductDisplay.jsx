import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';
import drive_img from '../Assets/drive.svg';
import date_img from '../Assets/year.svg';
import fuel_img from '../Assets/fuel.svg';
import capacity_img from '../Assets/capacity.svg';

const ProductDisplay = ({ product }) => {
  // Initialize state for main image and previous main images
  const [mainImage, setMainImage] = useState(null);
  const [previousMainImages, setPreviousMainImages] = useState([]);

  // Check if product is available
  if (!product) return null;

  const { name, images, subImages,  description, new_price,  year, drive, fuel, capacity } = product;

  // Set main image initially
  if (!mainImage) {
    setMainImage(images);
  }

  // Function to handle click on a sub-image
  const handleSubImageClick = (subImage) => {
    // Add current main image to previousMainImages array
    setPreviousMainImages(prevImages => [...prevImages, mainImage]);
    // Set clicked sub-image as main image
    setMainImage(subImage);
  };

  // Function to handle click on main image to revert to previous main image
  const handleMainImageClick = () => {
    if (previousMainImages.length > 0) {
      // Get last previous main image and remove it from array
      const prevMainImage = previousMainImages.pop();
      // Set last previous main image as main image
      setMainImage(prevMainImage);
      // Update previousMainImages array
      setPreviousMainImages([...previousMainImages]);
    }
  };

  // Calculate the total height of three sub-images plus 40px margin
  const totalSubImagesHeight = subImages ? subImages.length * 100 + 40 : 0;

  return (
    
    <div className='productdisplay'>
      <div className='productdisplay-thumbnails'>
        {/* Render sub-images as thumbnails */}
        {subImages && subImages.map((subImage, index) => (
          <Link to={`/product/${product.id}`} key={index} onClick={() => handleSubImageClick(subImage)}>
            <img src={subImage} alt={`Thumbnail ${index}`} style={{ height: '100px', marginBottom: '10px', cursor: 'pointer' }} />
          </Link>
        ))}
      </div>
      <div className='productdisplay-main'>
        {/* Render main image */}
        <div className='main-image-container'>
          <img src={mainImage} alt={name} style={{ height: totalSubImagesHeight, maxWidth: '100%' }} onClick={handleMainImageClick} />
        </div>
        {/* Render product information */}
        <div className='product-info'>
          <h2>{name}</h2>
          <h4>${new_price}</h4>
          <p>{description}</p>
          <div className="product-info-wrapper">
            <div className="product-info-row">
              <img src={date_img} alt="" />
              <p>{year}</p>
            </div>
            <div className="product-info-row">
              <img src={drive_img} alt="" />
              <p>{drive}</p>
            </div>
          </div>
          <div className="product-info-wrapper">
            <div className="product-info-row">
              <img src={fuel_img} alt="" />
              <p>{fuel}</p>
            </div>
            <div className="product-info-row">
              <img src={capacity_img} alt="" />
              <p>{capacity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
