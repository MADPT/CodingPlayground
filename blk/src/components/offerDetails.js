import React, { useState } from "react";
import OffersActionsModal from "./offerActionsModal";

const OfferDetails = ({ offer }) => {
  const [offerAction, setOfferAction] = useState({});

  const handleOfferActions = (id, action) => {
    setOfferAction({ id, action });
  };

  return (
    <li className="property-offers__entry box" key={offer.id}>
      <div className="row middle-xs">
        <div className="col-xs-10">
          <div className="property-offers__data-wrapper box">
            <h2 className="property-offers__name">{offer.buyerName}</h2>
            <p className="property-offers__message">{offer.buyerMessage}</p>
            <p className="property-offers__date">
              Offer Valid Until: {new Date(offer.expirationDate).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="col-xs-2">
          <div className="property-offers__data-wrapper box">
            <h1 className="property-offers__price">{offer.price} €</h1>
            <div className="property-offers__action-button-wrapper">
              {offer.status === "New" ? (
                <React.Fragment>
                  <button
                    className="property-offers__action-button property-offers__action-button--accept"
                    onClick={() => handleOfferActions(offer.id, "ACCEPT")}
                  >
                    Accept
                  </button>
                  <button
                    className="property-offers__action-button property-offers__action-button--counter"
                    onClick={() => handleOfferActions(offer.id, "COUNTER")}
                  >
                    Counter
                  </button>
                  <button
                    className="property-offers__action-button property-offers__action-button--reject"
                    onClick={() => handleOfferActions(offer.id, "REJECT")}
                  >
                    Reject
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="property-offers__action-message">Offer {offer.status}</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* If new
      <span>{offer.status}</span> */}
      {!(Object.keys(offerAction).length === 0 && offerAction.constructor === Object) && (
        <OffersActionsModal
          offerId={offer.id}
          offerAction={offerAction}
          expirationDate={offer.expirationDate}
        />
      )}
    </li>
  );
};

export default OfferDetails;
