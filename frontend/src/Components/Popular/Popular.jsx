import React from 'react';
import './Popular.css';
import data_product from '../Assets/data'; // Import data from the correct location
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR BRANDS</h1>
      <hr/>
      <div className="popular-item">
        {data_product.slice(0, 3).map((item, i) => (
          <Item key={i} id={item.id} name={item.name} images={item.images} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
      <div className="popular-item">
        {data_product.slice(3).map((item, i) => (
          <Item key={i} id={item.id} name={item.name} images={item.images} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </div>
  );
}

export default Popular;
