import { useState } from "react";
import { useListContext } from "../../context/useListContext";

import enebaLogo from "../../../assets/logoFull.svg";
import ltFlag from "../../../assets/lithuania.svg";

import styled from "styled-components";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const HeaderComponent = styled.header`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: white;
  height: 100px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.6rem;
  font-weight: 800;
  cursor: pointer;
  flex-shrink: 0;

  img {
    height: 50px;
  }
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: flex-start;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;

  .search-icon {
    position: absolute;
    left: 14px;
    font-size: 1.4rem;
    color: #cbd5e1;
  }

  .clear-icon {
    position: absolute;
    right: 14px;
    font-size: 1.4rem;
    color: #cbd5e1;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0 45px;
  color: white;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #cbd5e1;
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const RegionSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.9;

  img {
    width: 20px;
  }

  &:hover {
    opacity: 1;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;

  .icon-btn {
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .profile-pic {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #4b1a91;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchList } = useListContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    searchList(query);
  };

  const clearSearch = () => {
    setSearchTerm("");
    searchList("");
  };

  return (
    <HeaderComponent>
      <LogoSection>
        <img src={enebaLogo} alt="eneba" />
      </LogoSection>

      <SearchArea>
        <SearchWrapper>
          <CiSearch className="search-icon" />
          <SearchInput
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && <IoCloseOutline className="clear-icon" onClick={clearSearch} />}
        </SearchWrapper>

        <RegionSelector>
          <img src={ltFlag} alt="Lithuania" />
          English EU | EUR
        </RegionSelector>
      </SearchArea>
      <NavActions>
        <div className="icon-btn">
          <CiHeart />
        </div>
        <div className="icon-btn">
          <CiShoppingCart />
        </div>
        <div className="profile-pic">
          <CiUser size={24} />
        </div>
      </NavActions>
    </HeaderComponent>
  );
};

export default Header;
