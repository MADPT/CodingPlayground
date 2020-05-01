import React, { useState, useContext } from "react";
import { OffersContext } from "../contexts/offersContext";

const PropertyDetails = () => {
  const [propertyData, setPropertyData] = useState({
    address: { street: "Puhaltajantie 10", postalCode: "90650 Oulu" },
    description: "4 rooms, Kitchen, Bathroom, Sauna, Separate toilet, Terrace, Yard",
    photo: "https://images.unsplash.com/photo-1572596116411-7f6cef0fb4f4",
    price: 96000,
  });
  const { offers } = useContext(OffersContext);

  return (
    <section className="property-details container-fluid container-fluid--full-width">
      <div className="row">
        <div
          className="col-xs-12 col-sm-8 property-details__image"
          style={{ backgroundImage: "url(" + propertyData.photo + ")" }}
        ></div>
        <div className="col-xs-12 col-sm-4 property-details__data">
          <h1 className="property-details__address">
            {propertyData.address.street}
            <br />
            {propertyData.address.postalCode}
          </h1>
          <p className="property-details__description">{propertyData.description}</p>
          <h2 className="property-details__price">
            <span className="property-details__label">Asking Price:</span> {propertyData.price} €
          </h2>
          <h3 className="property-details__total-offers">
            <span className="property-details__label">Offers:</span>
            {offers.length}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
