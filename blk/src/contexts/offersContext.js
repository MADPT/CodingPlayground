import React, { createContext, useState } from "react";

export const OffersContext = createContext();

const OffersContextProvider = (props) => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      buyerName: "Kaappo Nikkilä",
      expirationDate: "00/00/00 00:00",
      price: 97000,
      buyerMessage: "Lorem Ipsum",
      status: "counter",
      counterOffer: {
        expirationDate: "00/00/00 00:00",
        price: 98000,
        sellerMessage: "Lorem Ipsum",
      },
    },
    {
      id: 2,
      buyerName: "Sanni Kärkkäinen",
      expirationDate: "00/00/00 00:00",
      price: 97500,
      buyerMessage: "Foo Bar",
      status: "new",
    },
    {
      id: 3,
      buyerName: "Hemmo Järvinen",
      expirationDate: "00/00/00 00:00",
      price: 95000,
      buyerMessage: "Lorem Foo Ipsum Bar",
      status: "new",
    },
  ]);
  return <OffersContext.Provider value={{ offers }}>{props.children}</OffersContext.Provider>;
};

export default OffersContextProvider;
