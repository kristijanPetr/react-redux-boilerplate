import { MUZLI_STORIES } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case MUZLI_STORIES:
      console.log("Reducer fetched stories");
      return state;
    default:
      return state;
  }
};
