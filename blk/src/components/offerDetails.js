import React, { useState } from "react";
import OffersActionsModal from "./offerActionsModal";

const OfferDetails = ({ offer }) => {
  const [offerAction, setOfferAction] = useState({});

  const handleOfferActions = (id, action) => {
    setOfferAction({ id, action });
  };

  return (
    <li key={offer.id}>
      <div>
        <p>{offer.buyerName}</p>
        <p>{offer.buyerMessage}</p>
        <p>Valid Until: {offer.expirationDate}</p>
      </div>
      <div>
        <h1>{offer.price}</h1>
        {offer.status === "New" && (
          <div>
            <button onClick={() => handleOfferActions(offer.id, "ACCEPT")}>Accept</button>
            <button onClick={() => handleOfferActions(offer.id, "REJECT")}>Reject</button>
            <button onClick={() => handleOfferActions(offer.id, "COUNTER")}>Counter</button>
          </div>
        )}
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
