import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon_2.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="abc" />
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        {/* ShopCategory.jsx */}
        <div className="shopcategory-sort">
          sort by
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product && all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div className="product-box" key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  images={process.env.PUBLIC_URL + item.images} // Adjusted to use PUBLIC_URL
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
