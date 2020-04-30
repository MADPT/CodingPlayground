export const offersReducer = (offers, action) => {
  switch (action.type) {
    case "ACCEPT":
      console.log("Offer accepted");
      const newArray = [...offers];

      newArray.map((offer) => {
        offer.status = offer.id === action.payload.id ? "Accepted" : "Rejected";

        if (offer.id === action.payload.id && action.payload.message.length) {
          offer.sellerMessage = action.payload.message;
        }
      });

      return newArray;

    case "REJECT":
      console.log("Offer rejected");
      return offers;

    case "COUNTER":
      console.log("Counter offer");
      return offers;

    default:
      return offers;
  }
};
