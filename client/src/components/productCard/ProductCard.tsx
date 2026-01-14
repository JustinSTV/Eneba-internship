import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import type { Game } from "../../types/ListTypes";
import CardOverlay from "./CardOverlay";

const Card = styled.article`
  background-color: rgb(31, 10, 77);
  color: #ffffff;
  border: 2px solid white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  div.card-image {
    position: relative;
    height: 400px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  div.card-body {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 4px 0;
      line-height: 1.4;
    }
    div.card-meta {
      font-size: 0.85rem;
      color: #10b981;
      font-weight: 700;
      margin-bottom: 15px;
      text-transform: uppercase;
    }
    div.card-price {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 8px;
      margin-top: auto;

      .from-label {
        font-size: 0.85rem;
        color: #94a3b8;
      }

      .original {
        color: #94a3b8;
        text-decoration: line-through;
        font-size: 0.9rem;
      }

      .discount-badge {
        color: #4ade80;
        font-weight: 700;
        font-size: 0.9rem;
      }

      .discounted {
        width: 100%;
        font-weight: 800;
        font-size: 1.75rem;
        color: #ffffff;
      }
    }
  }
  div.card-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.9rem;
    font-weight: 600;
    color: #4ade80;

    .likes {
      padding-top: 4px;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
const ProductCard = ({ game }: { game: Game }) => {
  const originalPrice = game.discount_percent
    ? (game.price / (1 - game.discount_percent / 100)).toFixed(2)
    : null;

  const gameCurrency = game.currency === "EUR" ? "€" : game.currency;

  return (
    <Card>
      <div className="card-image">
        <img src={game.image_url} alt={game.title} />
        <CardOverlay game={game} />
      </div>
      <div className="card-body">
        <h2>
          {game.title} {game.platform} {game.region ?? "GLOBAL"}
        </h2>
        <div className="card-meta">{game.region ?? "GLOBAL"}</div>

        <div className="card-price">
          <span className="from-label">From</span>
          {game.discount_percent ? (
            <>
              <span className="original">
                {gameCurrency}
                {originalPrice}
              </span>
              <span className="discount-badge">-{game.discount_percent}%</span>
            </>
          ) : null}
          <div className="discounted">
            {gameCurrency}
            {game.price.toFixed(2)}
          </div>
        </div>
        <div className="card-footer">
          <span> Cashback: €{game.cashback ?? 0}</span>
          <span className="likes">
            <CiHeart size={18} /> {game.likes ?? 0}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
