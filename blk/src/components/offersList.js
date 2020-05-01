import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";
import OfferDetails from "./offerDetails";

const OffersList = () => {
  const { offers } = useContext(OffersContext);

  return (
    <section className="property-offers container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="property-offers__section-title">Current offers</h1>
        </div>
        {offers.length ? (
          <ul className="property-offers__list col-xs-12">
            {offers.map((offer) => {
              return <OfferDetails key={offer.id} offer={offer} />;
            })}
          </ul>
        ) : (
          <div className="col-xs-12">
            <h1 className="property-offers__message">No offers available.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersList;
