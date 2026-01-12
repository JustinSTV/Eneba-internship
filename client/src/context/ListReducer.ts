import type { ListState, ListActionTypes } from "../types/ListTypes";

const ListReducer = (state: ListState, action: ListActionTypes) => {
  switch (action.type) {
    case "GET_LIST_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null,
      };
    case "GET_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ListReducer;
