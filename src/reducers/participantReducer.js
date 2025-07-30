export const participantsReducer = (state, action) => {
  switch (action.type) {
    case "addparticipant":
      return (state = action.value);
    case "removeparticipant":
      return (state = action.value);

    default:
      return state;
  }
};
