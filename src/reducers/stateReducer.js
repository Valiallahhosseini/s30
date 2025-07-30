export const stateReducer = (state, action) => {
  switch (action.type) {
    case "generateRand":
      return (state = "generating");
    case "foundRandom":
      return (state = "Random Found");

    default:
      return (state = "idle");
  }
};
