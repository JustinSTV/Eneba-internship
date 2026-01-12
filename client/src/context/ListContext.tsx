import { useReducer } from "react";
import { initialListState } from "../types/ListTypes";
import ListReducer from "./ListReducer";
import { ListContext } from "./callListContext";

type ChildProps = { children: React.ReactNode };

export const ListProvider = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(ListReducer, initialListState);

  const getList = async () => {
    try {
      dispatch({ type: "GET_LIST_START" });

      const res = await fetch("/api/list");

      const data = await res.json();

      dispatch({ type: "GET_LIST_SUCCESS", payload: data });

      return true;
    } catch (error) {
      dispatch({
        type: "GET_LIST_FAILURE",
        payload:
          error instanceof Error ? error.message : "Failed to fetch list",
      });
      return false;
    }
  };

  return (
    <ListContext.Provider value={{ state, getList }}>
      {children}
    </ListContext.Provider>
  );
};
