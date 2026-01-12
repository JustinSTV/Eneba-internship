import { useEffect, useState } from "react";

type Game = {
  _id?: string;
  title: string;
  platform?: string;
  region?: string;
  price: number;
  currency?: string;
  discount_percent?: number;
  cashback?: number;
  likes?: number;
};

const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  return (
    <div>
      {games.map((game) => (
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
