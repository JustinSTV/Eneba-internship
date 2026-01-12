import { useContext } from "react";
import { ListContext } from "./callListContext";
import type { ListContextType } from "../types/ListTypes";

export const useListContext = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
