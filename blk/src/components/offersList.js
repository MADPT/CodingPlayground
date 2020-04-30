import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";
import OfferDetails from "./offerDetails";

const OffersList = () => {
  const { offers } = useContext(OffersContext);

  return (
    <section>
      {offers.length ? (
        <ul>
          {offers.map((offer) => {
            return <OfferDetails key={offer.id} offer={offer} />;
          })}
        </ul>
      ) : (
        <h1>No offers available.</h1>
      )}
    </section>
  );
};

export default OffersList;
