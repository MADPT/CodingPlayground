import React from "react";
import "./App.scss";

import OffersList from "./components/offersList";
import OffersContextProvider from "./contexts/offersContext";

function App() {
  return (
    <div className="App">
      <OffersContextProvider>
        <OffersList />
      </OffersContextProvider>
    </div>
  );
}

export default App;
