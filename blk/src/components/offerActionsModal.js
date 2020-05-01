import React, { useContext, useState, useEffect } from "react";
import { OffersContext } from "../contexts/offersContext";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

const OffersActionsModal = ({ offerId, offerAction, expirationDate }) => {
  const { dispatch } = useContext(OffersContext);
  const [formValues, setFormValues] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    !(Object.keys(offerAction).length === 0 && offerAction.constructor === Object) && openModal();
  }, [offerAction]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    clearForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => {
    setFormValues({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: offerAction.action, payload: { id: offerId, ...formValues } });
    closeModal();
    clearForm();
  };

  const capLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Offer Action Modal"
    >
      <h2>{capLetter(offerAction.action)} Offer</h2>

      <form onSubmit={handleSubmit}>
        {offerAction.action === "COUNTER" && (
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
                min={expirationDate}
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
            required={offerAction.action === "REJECT" ? true : false}
            value={formValues.message || ""}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default OffersActionsModal;
