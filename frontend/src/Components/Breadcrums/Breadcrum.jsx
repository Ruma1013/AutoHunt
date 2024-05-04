// Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {
  console.log("Product prop in Breadcrumb:", product);
  return (
    <div className='breadcrumb'>
      HOME
      <span> / </span>
      SHOP
      {product && (
        <>
          <span> / </span>
          <span>{product.category}</span>
          <span> / </span>
          <span>{product.name}</span>
        </>
      )}
    </div>
  );
}

export default Breadcrum;



