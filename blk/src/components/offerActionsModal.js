import React, { useContext, useState, useEffect } from "react";
import { OffersContext } from "../contexts/offersContext";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
      contentLabel="Offer Action Modal"
      className="modal"
      overlayClassName="modal--overlay"
    >
      <div className="modal__content-wrapper">
        <h2 className="modal__title">{capLetter(offerAction.action)} Offer</h2>

        <form className="modal__form form" onSubmit={handleSubmit}>
          {offerAction.action === "COUNTER" && (
            <React.Fragment>
              <div className="form__group">
                <label className="form__label" htmlFor="price">
                  Price
                </label>
                <input
                  className="form__input"
                  type="number"
                  name="price"
                  value={formValues.price || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="expirationDate">
                  Expiration Date and Time
                </label>
                <input
                  className="form__input"
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
          <div className="form__group">
            <label className="form__label" htmlFor="message">
              Message
              {offerAction.action !== "REJECT" && (
                <span className="form__label-optional">(optional)</span>
              )}
            </label>
            <textarea
              className="form__textarea"
              name="message"
              maxLength="200"
              rows="3"
              required={offerAction.action === "REJECT" ? true : false}
              value={formValues.message || ""}
              onChange={handleInputChange}
            ></textarea>
            <span className="form__label-info">Max 200 characters</span>
          </div>
          <div className="form__group form__group-inline">
            <button className="form__button" onClick={closeModal}>
              Cancel
            </button>
            <button className="form__button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OffersActionsModal;
