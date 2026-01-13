export type ListContextType = {
  state: ListState;
  getList: () => Promise<boolean>;
};

export type Game = {
  _id?: string | number;
  title: string;
  platform?: string;
  region?: string;
  price: number;
  currency?: string;
  discount_percent?: number;
  cashback?: number;
  likes?: number;
  image_url: string;
};

export type ListState = {
  list: Game[];
  loading: boolean;
  error: string | null;
  success: string | null;
};

export const initialListState: ListState = {
  list: [],
  loading: false,
  error: null,
  success: null,
};

export type ListActionTypes =
  | { type: "GET_LIST_START" }
  | { type: "GET_LIST_SUCCESS"; payload: Game[] }
  | { type: "GET_LIST_FAILURE"; payload: string };
