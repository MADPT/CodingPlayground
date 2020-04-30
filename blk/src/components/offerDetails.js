import React, { useContext } from "react";
import { OffersContext } from "../contexts/offersContext";

const OfferDetails = ({ offer }) => {
  const { dispatch } = useContext(OffersContext);

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
            <button onClick={() => dispatch({ type: "ACCEPT", payload: { id: offer.id, message: "Congratulations" } })}>Accept</button>
            <button onClick={() => dispatch({ type: "REJECT", payload: { id: offer.id, message: "Price too low" } })}>Reject</button>
            <button onClick={() => dispatch({ type: "COUNTER", payload: { id: offer.id, price: "100000", expirationDate: "00/00/00 00:00", message: "New offer" } })}>Counter</button>
          </div>
        )}
      </div>
      {/* If new
      <span>{offer.status}</span> */}
    </li>
  );
};

export default OfferDetails;
