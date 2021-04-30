import { INITIAL_LOAD, TOGGLE_MENU, CLOSE_MENU } from "./main.types";

const INITIAL_STATE = {
  firstLoad: true,
  toggle: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return {
        ...state,
        firstLoad: false,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case CLOSE_MENU:
      return {
        ...state,
        toggle: false,
      };
    default:
      return state;
  }
};

export default reducer;
