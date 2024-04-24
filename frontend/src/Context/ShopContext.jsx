// ShopContext.js
import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  console.log("All Products:", all_product);

  return (
    <ShopContext.Provider value={{ all_product }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
