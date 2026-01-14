import styled from "styled-components";
import type { Game } from "../../types/ListTypes";
import { CiCirclePlus } from "react-icons/ci";
import { SiEa } from "react-icons/si";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { BsNintendoSwitch, BsPcDisplay } from "react-icons/bs";
import { SiOrigin } from "react-icons/si";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CashbackBadge = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  background-color: #58e1c1;
  color: #1f0a4d;
  padding: 4px 10px;
  font-weight: 800;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

const PlatformBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
`;

function CardOverlay({ game }: { game: Game }) {
  const platformIcon = () => {
    const platform = game.platform;
    switch (true) {
      case platform.includes("Nintendo"):
        return <BsNintendoSwitch size={24} color="#E60012" />;
      case platform.includes("Xbox"):
        return <FaXbox size={24} color="#107C10" />;
      case platform.includes("EA App"):
        return <SiEa size={24} color="#ffffff" />;
      case platform.includes("Origin"):
        return <SiOrigin size={24} color="#f88400" />;
      case platform.includes("Steam"):
        return <FaSteam size={24} color="#FFFFFF" />;
      case platform.includes("PlayStation") || platform.includes("PSN Key"):
        return <FaPlaystation size={24} color="#ffffff" />;
      case platform.includes("PC"):
        return <BsPcDisplay size={24} color="#FFFFFF" />;
      default:
        return null;
    }
  };

  return (
    <Overlay>
      {game.cashback && game.cashback > 0 && (
        <CashbackBadge>
          <CiCirclePlus size={16} />
          Cashback
        </CashbackBadge>
      )}
      <PlatformBanner>
        {platformIcon()} {game.platform}
      </PlatformBanner>
    </Overlay>
  );
}

export default CardOverlay;
