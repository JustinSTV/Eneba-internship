import { createContext } from "react";
import type { ListContextType } from "../types/ListTypes.ts";

export const ListContext = createContext<ListContextType | undefined>(undefined);
