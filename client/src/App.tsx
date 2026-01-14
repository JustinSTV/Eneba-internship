import { useEffect } from "react";
import styled from "styled-components";
import { useListContext } from "./context/useListContext";

import type { Game } from "./types/ListTypes";

import ProductCard from "./components/productCard/ProductCard.tsx";
import Header from "./components/header/Header.tsx";

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  div.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

const App = () => {
  const { state, getList } = useListContext();

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <Header />
      <div className="card-grid">
        {state.list.map((game: Game) => (
          <ProductCard key={game._id} game={game} />
        ))}
      </div>
    </Container>
  );
};

export default App;
