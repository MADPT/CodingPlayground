import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";

const OffersList = () => {
  const { offers } = useContext(OffersContext);

  return offers.length ? (
    <div>
      <ul>
        {offers.map((offer) => {
          return (
            <li>
              {offer.buyerName} - {offer.price} - {offer.buyerMessage}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>No offers available.</div>
  );
};

export default OffersList;
