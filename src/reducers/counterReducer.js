export const counterReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "remove":
      return state ? state - 1 : 0;
    case "reset":
      return 0;

    default:
      return 0;
  }
};
