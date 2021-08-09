import React, { useState, createContext } from "react";

// Create Context Object
export const HomepageContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const HomepageContextProvider = (props) => {
  const [homepage, setHomepage] = useState({});

  return <HomepageContext.Provider value={[homepage, setHomepage]}>{props.children}</HomepageContext.Provider>;
};