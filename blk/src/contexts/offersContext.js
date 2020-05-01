import React, { createContext, useReducer } from "react";
import { offersReducer } from "../reducers/offersReducer";

export const OffersContext = createContext();

const OffersContextProvider = (props) => {
  const [offers, dispatch] = useReducer(offersReducer, [
    {
      id: 1,
      buyerName: "Kaappo Nikkilä",
      expirationDate: "2020-05-10T12:00",
      price: 97000,
      buyerMessage: "Lorem Ipsum",
      status: "Counter",
      counterOffer: {
        expirationDate: "00/00/00 00:00",
        price: 98000,
        sellerMessage: "Lorem Ipsum",
      },
    },
    {
      id: 2,
      buyerName: "Sanni Kärkkäinen",
      expirationDate: "2020-05-20T12:00",
      price: 97500,
      buyerMessage: "Foo Bar",
      status: "New",
    },
    {
      id: 3,
      buyerName: "Hemmo Järvinen",
      expirationDate: "2020-05-30T12:00",
      price: 95000,
      buyerMessage: "Lorem Foo Ipsum Bar",
      status: "New",
    },
  ]);
  return (
    <OffersContext.Provider value={{ offers, dispatch }}>{props.children}</OffersContext.Provider>
  );
};

export default OffersContextProvider;
