import React from "react";
import "./App.scss";

import Header from "./components/header";
import PropertyDetails from "./components/propertyDetails";
import OffersList from "./components/offersList";
import OffersContextProvider from "./contexts/offersContext";

function App() {
  return (
    <div className="App">
      <Header />
      <OffersContextProvider>
        <PropertyDetails />
        <OffersList />
      </OffersContextProvider>
    </div>
  );
}

export default App;
