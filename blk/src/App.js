import React from "react";
import "./App.scss";

import PropertyDetails from "./components/propertyDetails";
import OffersList from "./components/offersList";
import OffersContextProvider from "./contexts/offersContext";

function App() {
  return (
    <div className="App">
      <OffersContextProvider>
        <PropertyDetails />
        <OffersList />
      </OffersContextProvider>
    </div>
  );
}

export default App;
