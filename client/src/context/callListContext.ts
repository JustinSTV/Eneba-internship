import { createContext } from "react";
import type { ListContextType } from "../types/ListTypes";

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);
