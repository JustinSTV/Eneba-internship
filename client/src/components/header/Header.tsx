import { useState } from "react";
import { useListContext } from "../../context/useListContext";

import styled from "styled-components";

const HeaderComponent = styled.header``;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchList } = useListContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    searchList(query);
  };

  return (
    <HeaderComponent>
      <h1>Eneba</h1>
      <input type="text" placeholder="Search games..." value={searchTerm} onChange={handleSearch} />
    </HeaderComponent>
  );
};

export default Header;
