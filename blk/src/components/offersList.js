import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";

const OffersList = () => {
  const { offers, dispatch } = useContext(OffersContext);

  console.log(offers);

  return offers.length ? (
    <div>
      <ul>
        {offers.map((offer) => {
          return (
            <li key={offer.id}>
              {offer.buyerName} - {offer.price} - {offer.buyerMessage} - {offer.status}
              {offer.status === "New" && (
                <div>
                  <button onClick={() => dispatch({ type: "ACCEPT", payload: { id: offer.id, message: "Congratulations" } })}>Accept</button>
                  <button onClick={() => dispatch({ type: "REJECT", payload: { id: offer.id, message: "Price too low" } })}>Reject</button>
                  <button onClick={() => dispatch({ type: "COUNTER", payload: { id: offer.id, price: "100000", expirationDate: "00/00/00 00:00", message: "New offer" } })}>Counter</button>
                </div>
              )}
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
