import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import type { Game } from "../types/ListTypes";

const Card = styled.article`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;
const ProductCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <div className="card-body">
        <h2>
          {game.title} {game.platform} {game.region ?? "GLOBAL"}
        </h2>
      </div>
      <div className="card-meta">{game.region ?? "GLOBAL"}</div>
      <div className="card-price">
        <span className="price">
          {game.currency}
          {game.price.toFixed(2)}
        </span>
        {game.discount_percent ? <span className="discount">{game.discount_percent}%</span> : null}
      </div>
      <div className="card-footer">
        <span> Cashback: €{game.cashback ?? 0}</span>
        <span>
          <CiHeart /> {game.likes ?? 0}
        </span>
      </div>
    </Card>
  );
};

export default ProductCard;
