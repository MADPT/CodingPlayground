import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";
import OfferDetails from "./offerDetails";

const OffersList = () => {
  const { offers } = useContext(OffersContext);

  return (
    <section className="property-offers container-fluid">
      <div className="row">
        {offers.length ? (
          <ul className="property-offers__list col-xs">
            {offers.map((offer) => {
              return <OfferDetails key={offer.id} offer={offer} />;
            })}
          </ul>
        ) : (
          <h1 className="property-offers__message">No offers available.</h1>
        )}
      </div>
    </section>
  );
};

export default OffersList;
