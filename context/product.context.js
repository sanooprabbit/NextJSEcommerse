import React, { useState, createContext } from "react";

// Create Context Object
export const ProductContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ProductContextProvider = (props) => {
  const [Product, setProduct] = useState({});

  return <ProductContext.Provider value={[Product, setProduct]}>{props.children}</ProductContext.Provider>;
};