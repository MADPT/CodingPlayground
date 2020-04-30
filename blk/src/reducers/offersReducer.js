export const offersReducer = (offers, action) => {
  switch (action.type) {
    case "ACCEPT":
      console.log("Offer accepted");
      return offers;

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
