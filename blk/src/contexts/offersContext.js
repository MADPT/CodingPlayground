import React, { createContext, useReducer } from "react";
import { offersReducer } from "../reducers/offersReducer";

export const OffersContext = createContext();

const OffersContextProvider = (props) => {
  const [offers, dispatch] = useReducer(offersReducer, [
    {
      id: 1,
      buyerName: "Elo Nykänen",
      expirationDate: "2020-05-30T12:00",
      price: 100000,
      buyerMessage: "Mauris rhoncus aenean vel elit scelerisque. Mauris sit amet massa vitae.",
      status: "New",
    },
    {
      id: 2,
      buyerName: "Kaappo Nikkilä",
      expirationDate: "2020-05-10T12:00",
      price: 90000,
      buyerMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris rhoncus aenean vel elit scelerisque. Mauris sit amet massa vitae.",
      status: "Countered",
      counterOffer: {
        expirationDate: "2020-05-20T12:00",
        price: 95000,
        sellerMessage: "Lorem Ipsum",
      },
    },
    {
      id: 3,
      buyerName: "Hemmo Järvinen",
      expirationDate: "2020-05-30T12:00",
      price: 97500,
      buyerMessage:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      status: "New",
    },
    {
      id: 4,
      buyerName: "Sanni Kärkkäinen",
      expirationDate: "2020-05-20T12:00",
      price: 85000,
      buyerMessage:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "Rejected",
      sellerMessage: "Lorem Ipsum",
    },
    {
      id: 5,
      buyerName: "Hemmo Järvinen",
      expirationDate: "2020-05-30T12:00",
      price: 95000,
      buyerMessage: "Nisi porta lorem mollis aliquam ut porttitor.",
      status: "New",
    },
  ]);
  return (
    <OffersContext.Provider value={{ offers, dispatch }}>{props.children}</OffersContext.Provider>
  );
};

export default OffersContextProvider;
