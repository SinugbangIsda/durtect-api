import { GlobalContextProps } from "../interfaces/Interfaces";
import { Actions } from "../types/types";

export const AppReducer = (state: GlobalContextProps, action: Actions )  => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: { user_id: action.payload } };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_ACTION":
      return { ...state, action: action.payload }
    case "RESET":
      return { ...state, action: null, error: null}
    default:
      return state;
    }
}