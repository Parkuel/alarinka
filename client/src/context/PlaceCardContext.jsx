import { createContext, useContext, useEffect, useState } from "react";

const PlaceCardContext = createContext({});

// eslint-disable-next-line react/prop-types
export function PlaceCardContextProvider({ children }) {
  return (
    <PlaceCardContext.Provider value={{}}>{children}</PlaceCardContext.Provider>
  );
}

export function usePlaceCardContext() {
  const context = useContext(PlaceCardContext);
  if (context === undefined)
    throw new Error("CityContext was used outside the CityProvider.");
  return context;
}
