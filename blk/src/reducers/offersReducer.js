export const offersReducer = (offers, action) => {
  const offerIndex = offers.findIndex(({ id }) => id == action.payload.id);

  switch (action.type) {
    case "ACCEPT":
      const newArray = [...offers];

      newArray.map((offer) => {
        offer.status = offer.id === action.payload.id ? "Accepted" : "Rejected";

        if (offer.id === action.payload.id && action.payload.message.length) {
          offer.sellerMessage = action.payload.message;
        }
      });

      return newArray;

    case "REJECT":
      return Object.assign([...offers], {
        [offerIndex]: {
          ...offers[offerIndex],
          status: "Rejected",
          sellerMessage: action.payload.message,
        },
      });

    case "COUNTER":
      return Object.assign([...offers], {
        [offerIndex]: {
          ...offers[offerIndex],
          status: "Counter",
          counterOffer: {
            expirationDate: action.payload.expirationDate,
            price: action.payload.price,
            sellerMessage: action.payload.message,
          },
        },
      });

    default:
      return offers;
  }
};
