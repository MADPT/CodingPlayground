import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";

const OffersList = () => {
  const { offers, dispatch } = useContext(OffersContext);

  return offers.length ? (
    <div>
      <ul>
        {offers.map((offer) => {
          return (
            <li key={offer.id}>
              {offer.buyerName} - {offer.price} - {offer.buyerMessage}
              <button onClick={() => dispatch({ type: "ACCEPT" })}>Accept</button>
              <button onClick={() => dispatch({ type: "REJECT" })}>Reject</button>
              <button onClick={() => dispatch({ type: "COUNTER" })}>Counter</button>
              {offer.buyerName} - {offer.price} - {offer.buyerMessage} - {offer.status}
              <div>
                <button onClick={() => dispatch({ type: "ACCEPT", payload: { id: offer.id, message: "Congratulations" } })}>Accept</button>
              </div>
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
