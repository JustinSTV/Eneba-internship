import { useEffect } from "react";
import { useListContext } from "./context/useListContext";
import type { Game } from "./types/ListTypes";

const App = () => {
  const { state, getList } = useListContext();

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {state.list.map((game: Game) => (
        <div key={game._id}>
          <h2>{game.title}</h2>
          <p>Platform: {game.platform}</p>
          <p>Region: {game.region}</p>
          <p>
            Price: {game.price} {game.currency}
          </p>
          <p>Discount: {game.discount_percent}%</p>
          <p>Cashback: {game.cashback}</p>
          <p>Likes: {game.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
