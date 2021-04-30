import { INITIAL_LOAD, TOGGLE_MENU, CLOSE_MENU } from "./main.types";

export const initialLoad = () => {
  return {
    type: INITIAL_LOAD,
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
  };
};
