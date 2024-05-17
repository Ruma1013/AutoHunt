import React from 'react';
import './Popular.css';
import data_product from '../Assets/data'; // Import data from the correct location
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular-container'>
      <div className='popular'>
        <div className="popular-content">
          <h1>POPULAR BRANDS</h1>
          <hr/>
          <div className="popular-item">
            {data_product.slice(0, 3).map((item, i) => (
              <div key={i} className="popular-item-container">
                <Item id={item.id} name={item.name} images={item.images} />
              </div>
            ))}
          </div>
          <div className="popular-item">
            {data_product.slice(3).map((item, i) => (
              <div key={i} className="popular-item-container">
                <Item id={item.id} name={item.name} images={item.images} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
