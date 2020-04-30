import React, { useContext, useState } from "react";
import { OffersContext } from "../contexts/offersContext";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const OfferDetails = ({ offer }) => {
  const { dispatch } = useContext(OffersContext);

  const [selectedOffer, setSelectedOffer] = useState({});
  const [formValues, setFormValues] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOfferActions = (id, action) => {
    setSelectedOffer({ id, action });
    openModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => {
    setFormValues({});
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    clearForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: selectedOffer.action, payload: { id: offer.id, ...formValues } });
    setIsOpen(false);
    clearForm();
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Offer Action Modal"
      >
        <h2>{selectedOffer.action} Offer</h2>

        <form onSubmit={handleSubmit}>
          {selectedOffer.action === "COUNTER" && (
            <React.Fragment>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  value={formValues.price || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="expirationDate">Expiration Date and Time</label>
                <input
                  id="expirationDate"
                  type="datetime-local"
                  name="expirationDate"
                  min={offer.expirationDate}
                  value={formValues.expirationDate || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </React.Fragment>
          )}
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              required={selectedOffer.action === "REJECT" ? true : false}
              value={formValues.message || ""}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </li>
  );
};

export default OfferDetails;
