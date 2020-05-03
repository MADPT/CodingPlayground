import React, { useState, useEffect } from "react";
import OffersActionsModal from "./offerActionsModal";
import { Transition } from "react-transition-group";

const OfferDetails = ({ offer }) => {
  const [offerAction, setOfferAction] = useState({});
  const [showEntry, setShowEntry] = useState(false);

  const handleOfferActions = (id, action) => {
    setOfferAction({ id, action });
  };

  useEffect(() => {
    setShowEntry(true);
  }, [offer]);

  return (
    <React.Fragment>
      <Transition in={showEntry} enter={showEntry} timeout={250}>
        {(state) => (
          <li className={`property-offers__entry box ${state}`} key={offer.id}>
            <div className="row middle-xs">
              <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8">
                <div className="property-offers__data--wrapper box">
                  <h2 className="property-offers__name">{offer.buyerName}</h2>
                  <p className="property-offers__message">{offer.buyerMessage}</p>
                  <p className="property-offers__date">
                    Offer Valid Until: {new Date(offer.expirationDate).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <div className="property-offers__data--wrapper box">
                  <h1 className="property-offers__price">{offer.price} €</h1>
                  <div className="property-offers__action-button--wrapper">
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
                        <p
                          className={`property-offers__action--message property-offers__action--message-${offer.status.toLowerCase()}`}
                        >
                          Offer {offer.status}
                        </p>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
      </Transition>
      {!(Object.keys(offerAction).length === 0 && offerAction.constructor === Object) && (
        <OffersActionsModal
          offerId={offer.id}
          offerAction={offerAction}
          expirationDate={offer.expirationDate}
        />
      )}
    </React.Fragment>
  );
};

export default OfferDetails;
